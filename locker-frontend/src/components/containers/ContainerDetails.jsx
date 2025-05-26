// import { useParams } from "react-router";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import ContainerItemLabel from '../containerItems/ContainerItemLabel';
import AddContainerItemModal from '../containerItems/AddContainerItemModal';
import DeleteContainerModal from './DeleteContainerModal';

import Header from "../Header";
import { useState, useRef } from 'react';
import { toast } from 'react-toastify'; 



export default function ContainerDetails() {
    const { lockerId, containerName } = useParams();
    const location = useLocation();
    const data = location.state.data;
    const lockerName = data.lockerName;
    const containerItems = data.containerItems;
    const addItemModal = useRef();
    const deleteContainerModal = useRef();

    const navigate = useNavigate();

    const [items, setItems] = useState(containerItems);
    const hasItems = containerItems.length > 0;


    function handleStartAddItem() {
        addItemModal.current.open();
    }

    function cancelAddItem() {
        addItemModal.current.close();
    }

    function handleStartDeleteContainer() {
        deleteContainerModal.current.open();
    }

    function cancelDeleteContainer() {
        deleteContainerModal.current.close();
    }


    function handleUpdateItems() {
        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then(res => {
            return res.json();
        })
        .then((lockerData) => {
            const updatedItems = lockerData.lockerContainers.find(container => container.containerName === containerName).containerItems;
            setItems(updatedItems);
        }); 
    }

    function handleDeleteContainer() {
        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then(res => {
            return res.json();
        })
        .then((lockerData) => {
            const updatedContainers = lockerData.lockerContainers.filter(container => container.containerName !== containerName);
            
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
            deleteContainerModal.current.close();
            toast('Container Deleted');
            navigate(`/lockerlist/${lockerId}`);
        });
    }

    
    return (
        <>
            <Header />
            <h3>Items in <em>{containerName}</em> in {lockerName}</h3>
            <button onClick={handleStartDeleteContainer}>Delete Container</button>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        <ContainerItemLabel
                            itemName={item}
                            itemIdx={idx}
                        />
                    </li>
                ))}
            </ul>
            {!hasItems && (
                <p>There are no items to display.</p>
            )}
            <div>
                <button onClick={handleStartAddItem}>Add Item</button>
            </div>
            <AddContainerItemModal 
                ref={addItemModal}
                onCancel={cancelAddItem}
                onAdd={handleUpdateItems}
                lockerId={lockerId}
                containerName={containerName}
            />
            <DeleteContainerModal 
                ref={deleteContainerModal}
                onCancel={cancelDeleteContainer}
                onDelete={handleDeleteContainer}
            />
        </>
    );
}