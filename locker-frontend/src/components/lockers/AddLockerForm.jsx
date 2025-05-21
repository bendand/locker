export default function AddLockerForm() {
    return (
        <div>
            <form action="dialog">
                <div>
                    <label for="name">Locker Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label for="address">Locker Address</label>
                    <input type="text" name="address" />
                </div>
            </form>
        </div>
    );
}