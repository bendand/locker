import React from "react";
import { useNavigate } from "react-router";
import { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';



const AddLockerModal = forwardRef(function AddLockerModal({ 
    onCancel, 
    onAdd }, 
    ref) {

    let navigate = useNavigate();
    const dialog = useRef();
    const [inputValues, setInputValues] = useState({
        lockerName: '',
        lockerAddress: ''
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        
        setInputValues(prevData => ({
            ...prevData,
            [name]: value
        }));


    }

    console.log(inputValues.lockerName);




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
                <form action="">
                    <div>
                        <label htmlFor="name">Locker Name</label>
                        <input
                            type="text" 
                            name="name" 
                            value={inputValues.lockerName}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Locker Address</label>
                        <input
                            type="text" 
                            name="address"
                            value={inputValues.lockerAddress}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <button onClick={onAdd}>Add Locker</button>
                    </div>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default AddLockerModal