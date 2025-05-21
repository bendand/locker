import React, { use, useState } from "react";
import { useEffect } from "react";


export default function jsonServer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/lockers')
        .then(res = setData(res))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{d.lockerName}</td>
                                <td>{d.lockerAddress}</td>
                                <td>{d.id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

