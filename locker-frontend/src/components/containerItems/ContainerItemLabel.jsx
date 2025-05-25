export default function ContainerItemLabel({ itemName, itemIdx }) {

    return (
        <div key={itemIdx}>
            <p>{itemName}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}