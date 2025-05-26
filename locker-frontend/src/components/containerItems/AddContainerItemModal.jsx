import React from "react";
import { useNavigate } from "react-router";
import { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'react-toastify'; 


const AddContainerItemModal = forwardRef(function AddContainerItemModal({ 
    onCancel, 
    onAdd,
    lockerId,
    containerName }, 
    ref) {

    const [itemName, setItemName] = useState('');
    const dialog = useRef();

    function handleNameChange(event) {
        setItemName(event.target.value);
    }

    // function that handles add item submission
    function handleSubmit(formData) {
        const name = formData.get("itemName");
        // fetches locker data with the locker id chained onto url
        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then((res) => res.json())
        .then((data) => {
            // makes a copy of locker containers
            const updatedContainers = [...data.lockerContainers];
            // then finds the target container to be updated
            const targetContainer = updatedContainers.find(container => container.containerName === containerName);
            // adds form input to target container
            targetContainer.containerItems = [...targetContainer.containerItems, name];

            
            return fetch(`http://localhost:3000/lockers/${lockerId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ lockerContainers: updatedContainers })
            });
        })
        .then(res => {
            return res.json();
        })
        .then(updatedLocker => {
            dialog.current.close();
            toast('Item Added!');
            onAdd();
        });
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
                <form action={handleSubmit} id="item-form">
                    <div>
                        <label htmlFor="name">Item Name: </label>
                        <input
                            type="text" 
                            name="itemName" 
                            value={itemName}
                            onChange={handleNameChange}
                            required 
                        />
                    </div>
                    <div>
                        <button type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default AddContainerItemModal