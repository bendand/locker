export default function ContainerItemLabel({ itemName, itemIdx }) {

    return (
        <div key={itemIdx}>
            <p>{itemName}</p>
            <button>Delete</button>
        </div>
    );
}