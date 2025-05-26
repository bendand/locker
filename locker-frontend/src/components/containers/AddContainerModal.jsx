import { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'react-toastify';

const AddContainerModal = forwardRef(function AddContainerModal({
    lockerId,
    onCancel,
    onAdd },
    ref) {

    const [containerName, setContainerName] = useState('');
    const dialog = useRef();

    function handleNameChange(event) {
        setContainerName(event.target.value);
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

    function handleSubmit(formData) {
        const name = formData.get("container-name");

        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            const newContainer = {
                "containerName": name,
                "containerItems": []
            }
            const updatedContainers = [...data.lockerContainers, newContainer];
            
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
        .then(updatedLockers => {
            setContainerName('');
            dialog.current.close();
            toast('Container Added!');
            onAdd();
        });
    }

    return createPortal(
        <dialog ref={dialog}>
            <div>
                <button onClick={onCancel}>X</button>
            </div>
            <p>Choose a unique container name</p>
            <form action={handleSubmit}>
                <label htmlFor="container-name">Container name: </label>
                <input 
                    name='container-name'
                    value={containerName}
                    onChange={handleNameChange}
                    required
                />
                <div>
                    <button type='submit'>Add Container</button>
                </div>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});


export default AddContainerModal