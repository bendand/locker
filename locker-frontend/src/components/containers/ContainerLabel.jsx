import { Link } from "react-router-dom";
import ContainerDetails from "./ContainerDetails";

export default function ContainerLabel({ lockerId, lockerName, containerItems, containerId }) {
    // console.log('lockerId: ', );
    let items = containerItems;
    // console.log(items);
    // console.log(typeof(items));
    // items.forEach(item => {
    //     console.log(item);
    // })

    return (
        <div key={containerId}>
            <Link 
                to={`${containerId}`} 
                element={<ContainerDetails
                        lockerName={lockerName}
                        lockerId={lockerId}
                        containerItems={containerItems}
                        containerId={containerId}
                    />}
            >
                <p>Container id: {containerId}</p>
            </Link>
            <p><em></em></p>
        </div>
    );
}