export default function ContainerList() {

    // fetch containers, or pass down as props

    return (
        <main>
            <div>
                <h3>Containers at Uhaul - 123 4th St.</h3>
                <button>Add +</button>
            </div>

            <ul>
                {/* {containers.map(() => {

                })} */}

                <li>
                    <ContainerInfo />
                </li>
            </ul>
        </main>
    );
}
