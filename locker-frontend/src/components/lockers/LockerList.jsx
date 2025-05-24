import LockerLabel from "./LockerLabel";
import Header from "../Header";

import AddLockerModal from "./AddLockerModal";

import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import LockerDetails from "./LockerDetails";

export default function LockerList() {
    const [lockers, setLockers] = useState(null);
    const modal = useRef();

    useEffect(() => {
        fetch('http://localhost:3000/lockers')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setLockers(data);
        }); 
    }, [lockers]);

    function handleStartAddLocker() {
        modal.current.open();
    }

    function cancelAddLocker() {
        modal.current.close();
    }


    return (
        <>
            <Header />
            <main>
                <div className="lockerlist-container">
                    <div className="lockerlist-header">
                        <h3>My Storage Lockers</h3> 
                        <button onClick={handleStartAddLocker}>Add +</button>
                    </div>
                    <div className="lockerlist-lockers"> 
                        {lockers && lockers.map((locker, idx) => (
                            <div key={idx}>
                                <LockerLabel 
                                    lockerId={locker.id}
                                    lockerName={locker.lockerName} 
                                    lockerAddress={locker.lockerAddress}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <AddLockerModal
                    ref={modal}
                    onCancel={cancelAddLocker}
                    onAdd={setLockers}
                />
            </main>
        </>
    );
}