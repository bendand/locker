import { useParams } from "react-router";

import Header from "../Header";

// import { containers } from "../../assets/util";

export default function ContainerDetails({ lockerName, lockerId, containerItems, containerId }) {
    // console.log(containerItems);
    console.log(lockerName);
    console.log('in container details');
    return (
        <>
            <Header />
            <div>
                <h3>Items in {lockerName}</h3>
            </div>
        </>
    );
}