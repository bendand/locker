import { useParams } from "react-router";
import Header from "../Header";
import { useEffect, useState } from "react";


import { Link } from "react-router-dom";

// import { containersData } from "../../assets/util";

export default function LockerDetails({ idx, name, address }) {
    const [containers, setContainers] = useState();
    // const lockerName = useParams('lockerName');

    useEffect(() => {
        fetch('http://localhost:3000/containers')
        .then(res => {
            console.log('response object,', res)
            return res.json();
        })
        .then((data) => {
            console.log('json data,', data)
            setContainers(data);
        }); 
    }, []);

    // load related boxes here 
    return (
        <>
            <Header />
            <div>
                <h4>{name}</h4>
                <h6><em>{address}</em></h6>
            </div>
            <div>

            </div>
        </>
    );
}