import LockerLabel from "./LockerLabel";

import { Link } from "react-router-dom";

export default function LockerList() {

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
        </main>
    );
}