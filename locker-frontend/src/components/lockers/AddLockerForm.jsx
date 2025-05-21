import { useNavigate } from "react-router";


export default function AddLockerForm() {
    let navigate = useNavigate;

    function handleAddLocker() {
        // if valid, 
        // add locker to locker list
        // let newObjSerialized = JSON.stringify(newObj)
        // localstorage.push(newObjSerialized)
        // return redirect("/dashboard/lockerlist")
    }


    return (
        <div>
            <form action="">
                <div>
                    <label for="name">Locker Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label for="address">Locker Address</label>
                    <input type="text" name="address" />
                </div>
                <div>
                    <button onclick={handleAddLocker}>Add Locker</button>
                </div>
            </form>
        </div>
    );
}