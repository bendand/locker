import { Link } from "react-router-dom";
import ContainerDetails from "./ContainerDetails";

export default function ContainerLabel({ lockerName, containerItems, containerName, containerId }) {

    const data = { 
        lockerName, 
        containerItems, 
        containerName
    }

    return (
        <div key={containerId}>
            <Link
                to={`${containerId}`}
                state={{ data }}
            >
                <p>{containerName} container</p>
            </Link>
            <p><em></em></p>
        </div>
    );
}