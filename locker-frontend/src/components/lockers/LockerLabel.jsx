import { Link } from "react-router-dom";
import LockerDetails from "./LockerDetails";
import { useParams } from "react-router";



export default function LockerLabel({ idx, name, address }) {

    const lockerName = useParams('lockerName');
    console.log(lockerName);

    return (
        <div id={idx}>
            <Link 
                to={`${name}`}
                element={<LockerDetails 
                            id={idx}
                            name={name}
                            address={address}
                        />}
            >
                <h4>{name}</h4>
            </Link>
            <p><em>{address}</em></p>
        </div>
    );
}