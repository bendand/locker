import React from "react";
import { useNavigate } from "react-router";
import { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { useInput } from "../../hooks/useInput";
import { isNotEmpty } from "../../util/validation";
import { ToastContainer, toast } from 'react-toastify';


const AddLockerModal = forwardRef(function AddLockerModal({ 
    onCancel, 
    onAdd }, 
    ref) {

    const [inputValues, setInputValues] = useState({
        lockerName: '',
        lockerAddress: ''
    });

    let navigate = useNavigate();
    const dialog = useRef();

    function handleInputChange(event) {
        const { name, value } = event.target;
        
        setInputValues(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(formData) {
        const name = formData.get("lockerName");
        const address = formData.get("lockerAddress");
        const url = "http://localhost:3000/lockers";

        const postAPI = () => {
            console.log('post api entered');
            try {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        lockerName: name,
                        lockerAddress: address,
                        lockerContainers: []
                    })
                });

                dialog.current.close();
                onAdd();
                toast('Locker Added!');
                

            } catch (err) {
                console.log("Error: ", err)
            }
        }

        postAPI();
    }

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        };
    });


    return createPortal(
        <dialog ref={dialog}>
            <div className="modal">
                <button 
                    onClick={onCancel}
                >
                    X
                </button>
                <form action={handleSubmit} id="locker-form">
                    <div>
                        <label htmlFor="name">Locker Name</label>
                        <input
                            type="text" 
                            name="lockerName" 
                            value={inputValues.lockerName}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Locker Address</label>
                        <input
                            type="text" 
                            name="lockerAddress"
                            value={inputValues.lockerAddress}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <button type="submit">Add Locker</button>
                    </div>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default AddLockerModal