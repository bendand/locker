export default function AddContainerForm() {
    return (
        <div>
            <form action="dialog">
                <div>
                    <label for="name">Container Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label for="name">Container Id (generated) </label>
                </div>
                <div>
                    <label for="address"></label>
                    <input type="text" name="address" />
                </div>
            </form>
        </div>
    );
}