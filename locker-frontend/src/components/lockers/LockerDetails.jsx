import { useParams, useNavigate } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import ContainerLabel from "../containers/ContainerLabel";
import DeleteLockerModal from "./DeleteLockerModal";
import AddContainerModal from "../containers/AddContainerModal";
import { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';


export default function LockerDetails() {
    const [lockerData, setLockerData] = useState(null);
    let { lockerId } = useParams();
    const deleteLockerModal = useRef();
    const addContainerModal = useRef();
    const navigate = useNavigate();

    // variable used to display conditional content
    const hasContainers = lockerData && lockerData.lockerContainers.length > 0;

    // effect that fetches containers associated with the locker ID
    useEffect(() => {
        fetch(`http://localhost:3000/lockers/${lockerId}`)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setLockerData(data);
        }); 
    }, [lockerData]);
    // above lockerData dependency triggers effect when add container modal updates data

    // functions to control delete modal opening and closing
    function handleStartDeleteLocker() {
        deleteLockerModal.current.open();
    }

    function handleCancelDeleteLocker() {
        deleteLockerModal.current.close();
    }

    // functions to control add container modal opening and closing
    function handleStartAddContainer() {
        addContainerModal.current.open();
    }

    function handleCancelAddContainer() {
        addContainerModal.current.close();
    }

    // simple logic needed to delete locker 
    function handleDeleteLocker() {
        fetch(`http://localhost:3000/lockers/${lockerId}`, {
            method: "DELETE",
        })
        .then(res => {
            return res.json();
        })
        .then(updatedLockers => {
            console.log(updatedLockers);
            deleteLockerModal.current.close();
            toast('Locker Deleted');
            navigate('/lockerlist');
        });
    }


    return (
        <>
            <Header />
            <div className="locker-details">
                {lockerData && (
                    <>
                        <div>
                            <h4>{lockerData.lockerName}</h4>
                            <button onClick={handleStartDeleteLocker}>Delete Storage Locker</button>
                        </div>
                        <ul>
                            {lockerData.lockerContainers.map((container, idx) => (
                                <li key={idx}>
                                    <ContainerLabel
                                        lockerName={lockerData.lockerName}
                                        containerItems={container.containerItems}
                                        containerName={container.containerName}
                                    />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {!hasContainers && (
                    <p>There are no containers to display.</p>
                )}
                <button onClick={handleStartAddContainer}>Add Container</button>
            </div>
            <DeleteLockerModal
                ref={deleteLockerModal}
                onCancel={handleCancelDeleteLocker}
                onDelete={handleDeleteLocker}
            />
            <AddContainerModal
                lockerId={lockerId}
                ref={addContainerModal}
                onCancel={handleCancelAddContainer}
                onAdd={setLockerData}
            />
        </>
    );
}