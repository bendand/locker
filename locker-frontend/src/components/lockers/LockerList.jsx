import LockerLabel from "./LockerLabel";
import Header from "../Header";

import AddLockerForm from "./AddLockerForm";

import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import LockerDetails from "./LockerDetails";

export default function LockerList() {
    const [lockers, setLockers] = useState(null);
    // ref for modal
    // fetch lockers, or pass down as props

    useEffect(() => {
        fetch('http://localhost:3000/lockers')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setLockers(data);
        }); 
    }, []);


    return (
        <>
            <Header />
            <main>
                <div className="lockerlist-container">
                    <div className="lockerlist-header">
                        <h3>My Storage Lockers</h3> 
                        <button>Add +</button>
                    </div>
                    <div className="lockerlist-lockers"> 
                        {lockers && lockers.map((locker, idx) => (
                            <div key={locker.id}>
                                <LockerLabel 
                                    idx={locker.id}
                                    name={locker.lockerName} 
                                    address={locker.lockerAddress}
                                />
                            </div>
                        ))}
                    </div>
                    {/* <AddLockerForm /> */}
                </div>
            </main>
        </>
    );
}