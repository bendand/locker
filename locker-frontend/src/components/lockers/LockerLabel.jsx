import { Link } from "react-router-dom";
import LockerDetails from "./LockerDetails";
import { useParams } from "react-router";



export default function LockerLabel({ lockerId, lockerName, lockerAddress }) {
    // console.log('locker name within locker label component: ', lockerId);
    // console.log(lockerName);

    return (
        <div key={lockerId}>
            <Link 
                to={`${lockerId}`}
                element={<LockerDetails
                            lockerName={lockerName}
                        />}
            >
                <h4>{lockerName}</h4>
            </Link>
            <p><em>{lockerAddress}</em></p>
        </div>
    );
}