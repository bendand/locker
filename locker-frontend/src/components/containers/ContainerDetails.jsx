// import { useParams } from "react-router";
import { useLocation, useParams } from 'react-router-dom';
import ContainerItemLabel from '../containerItems/ContainerItemLabel';
import AddContainerItemModal from '../containerItems/AddContainerItemModal';

import Header from "../Header";

import { useState, useEffect, useRef } from 'react';


export default function ContainerDetails() {
    const { lockerId, containerId } = useParams();
    const location = useLocation();
    const data = location.state.data;
    const lockerName = data.lockerName;
    const containerItems = data.containerItems;
    const containerName = data.containerName;
    const modal = useRef();

    const [items, setItems] = useState(containerItems);


    function handleStartAddItem() {
        modal.current.open();
    }

    function cancelAddItem() {
        modal.current.close();
    }

    function handleUpdateItems() {
        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then(res => {
            return res.json();
        })
        .then((lockerData) => {
            setItems(lockerData.lockerContainers[containerId-1].containerItems);
        }); 
    }

    
    return (
        <>
            <Header />
            <div>
                <h3>Items in {containerName} container in {lockerName}</h3>
                <button onClick={handleStartAddItem}>Add Item</button>
            </div>
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
            <AddContainerItemModal 
                ref={modal}
                onCancel={cancelAddItem}
                onAdd={handleUpdateItems}
                lockerId={lockerId}
                containerId={containerId}
            />
        </>
    );
}