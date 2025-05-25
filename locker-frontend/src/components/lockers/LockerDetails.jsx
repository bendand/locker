import { useParams, useNavigate } from "react-router";
import Header from "../Header";
import ContainerLabel from "../containers/ContainerLabel";
import Modal from "../Modal";
import { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';


export default function LockerDetails() {
    const [lockerData, setLockerData] = useState(null);
    let { lockerId } = useParams();
    const modal = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/lockers')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            const lockersData = data;
            let currLockerData = null;
            lockersData.forEach(locker => {
                if (locker.id == lockerId) {
                    currLockerData = locker;
                }
            })

            setLockerData(currLockerData);
        }); 
    }, []);

    function handleStartDeleteLocker() {
        modal.current.open();
    }

    function handleCancelDeleteLocker() {
        modal.current.close();
    }

    function handleDeleteLocker() {
        fetch(`http://localhost:3000/lockers/${lockerId}`, {
            method: "DELETE",
        })
        .then(res => {
            return res.json();
        })
        .then(updatedLockers => {
            console.log(updatedLockers);
            modal.current.close();
            toast('Locker Deleted');
            navigate('/lockerlist');
            return
        });
    }


    return (
        <>
            <Header />
            <div className="locker-details">
                {lockerData ? (
                    <>
                        <div>
                            <h4>Containers in {lockerData.lockerName}</h4>
                            <button onClick={handleStartDeleteLocker}>Delete Storage Locker</button>
                        </div>
                        <ul>
                            {lockerData.lockerContainers.map((container, idx) => (
                                <li key={container.containerId}>
                                    <ContainerLabel
                                        lockerName={lockerData.lockerName}
                                        containerItems={container.containerItems}
                                        containerName={container.containerName}
                                        containerId={container.containerId}
                                    />
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Modal
                ref={modal}
                onCancel={handleCancelDeleteLocker}
                onDelete={handleDeleteLocker}
            >
                Are you sure you want to delete the storage locker?
            </Modal>
        </>
    );
}