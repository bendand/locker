import DeleteContainerItemModal from "./DeleteContainerItemModal";
import { useRef } from "react";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; 


export default function ContainerItemLabel({ itemName, itemIdx, onDeleteItem }) {
    const { lockerId, containerName } = useParams();
    const deleteItemModal = useRef();

    function handleDeleteItem() {
        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then(res => {
            return res.json();
        })
        .then((lockerData) => {
            const updatedContainers = [...lockerData.lockerContainers];
            const targetContainer = updatedContainers.find(container => container.containerName === containerName);
            
            // returns a list of items without the name of 
            targetContainer.containerItems = targetContainer.containerItems.filter(function(item) {
                return item !== targetContainer.containerItems[itemIdx];
            });

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
        .then(updatedContainers => {
            deleteItemModal.current.close();
            toast('Item Deleted');
            onDeleteItem();
        }); 
    }

    function handleStartDeleteItem() {
        deleteItemModal.current.open();
    }

    function cancelDeleteItem() {
        deleteItemModal.current.close();
    }

    return (
        <>
            <div key={itemIdx}>
                <p>{itemName}</p>
                <button onClick={handleStartDeleteItem}>Delete</button>
            </div>
            <DeleteContainerItemModal
                ref={deleteItemModal}
                onCancel={cancelDeleteItem}
                onProceed={handleDeleteItem}
            />
        </>
    );
}