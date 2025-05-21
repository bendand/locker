import LockerLabel from "./LockerLabel";
import { lockersData } from "../../assets/util";

import AddLockerForm from "./AddLockerForm";

import { Link } from "react-router-dom";
import { useRef } from "react";

export default function LockerList() {
    // ref for modal
    // fetch lockers, or pass down as props


    return (
        <main>
            <div>
                <h3>My Storage Lockers</h3> 
                <button>Add +</button>
            </div>
            <div>
                <ul>
                    {/* {lockers.map(() => {

                    })} */}

                    <li>
                        <Link to=""></Link><LockerLabel />
                    </li>
                                
                    <li>
                        <LockerLabel />
                    </li>
                    <li>
                        <LockerLabel />
                    </li>
                </ul>
            </div>
            <AddLockerForm />
        </main>
    );
}