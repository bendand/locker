import { Link } from "react-router-dom";
import ContainerDetails from "./ContainerDetails";

export default function ContainerLabel({ lockerName, containerItems, containerName }) {
    const data = { 
        lockerName, 
        containerItems, 
        containerName
    }

    return (
        <div key={containerName}>
            <Link
                to={`${containerName}`}
                state={{ data }}
            >
                <p>{containerName}</p>
            </Link>
            <p><em></em></p>
        </div>
    );
}