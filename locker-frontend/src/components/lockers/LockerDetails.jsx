import { useParams } from "react-router";
import Header from "../Header";
import ContainerLabel from "../containers/ContainerLabel";
import { useEffect, useState } from "react";



export default function LockerDetails() {
    const [lockerData, setLockerData] = useState(null);
    let { lockerId } = useParams();
    console.log(lockerId);

    useEffect(() => {
        fetch('http://localhost:3000/lockers')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            const lockersData = data;
            let currLockerData = null;
            lockersData.forEach(locker => {
                if (locker.id == lockerId) {
                    currLockerData = locker;
                }
            })

            setLockerData(currLockerData);
        }); 
    }, []);

    if (lockerData) {
        console.log(lockerData);
    }

    // console.log(lockerData);


    return (
        <>
            <Header />
            <div className="locker-details">
                {lockerData ? (
                    <>
                        <div>
                            <h4>Containers in {lockerData.lockerName}</h4>
                        </div>
                        <div>
                            {lockerData.lockerContainers.map((container, idx) => (
                                <div key={container.containerId}>
                                    <ContainerLabel
                                        lockerId={lockerData.id}
                                        lockerName={lockerData.lockerName}
                                        containerItems={container.containerItems}
                                        containerId={container.containerId}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}