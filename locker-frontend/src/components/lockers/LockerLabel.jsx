import { Link } from "react-router-dom";
import LockerDetails from "./LockerDetails";
import { useParams } from "react-router";



export default function LockerLabel({ lockerId, lockerName, lockerAddress }) {
    // console.log('locker name within locker label component: ', lockerId);
 
    return (
        <div key={lockerId}>
            <Link 
                to={`${lockerId}`}
            >
                <h4>{lockerName}</h4>
            </Link>
            <p><em>{lockerAddress}</em></p>
        </div>
    );
}