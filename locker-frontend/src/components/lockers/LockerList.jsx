import LockerLabel from "./LockerLabel";
import Header from "../Header";
import Footer from "../Footer";
import AddLockerModal from "./AddLockerModal";
import { useRef, useEffect, useState } from "react";

export default function LockerList() {
    const [lockers, setLockers] = useState(null);
    const modal = useRef();

    // effect that fectches lockers in json file
    useEffect(() => {
        fetch('http://localhost:3000/lockers')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setLockers(data);
        }); 

    }, [lockers]);
    // dependency above is used to run the effect when locker is added by add locker modal
    // which then updates the locker data


    // start add, cancel add functions to open and close modal
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
                    <ul> 
                        {lockers && lockers.map((locker, idx) => (
                            <li key={idx}>
                                <LockerLabel 
                                    lockerId={locker.id}
                                    lockerName={locker.lockerName} 
                                    lockerAddress={locker.lockerAddress}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <AddLockerModal
                    ref={modal}
                    onCancel={cancelAddLocker}
                    onAdd={setLockers}
                />
            </main>
            <Footer />
        </>
    );
}