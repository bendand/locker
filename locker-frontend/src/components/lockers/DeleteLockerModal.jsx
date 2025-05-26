import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const DeleteLockerModal = forwardRef(function DeleteLockerModal({
    onCancel,
    onDelete },
    ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog}>
            <div>
                <button onClick={onCancel}>X</button>
            </div>
            Are you sure you want to delete locker?
            <div>
                <button onClick={onDelete}>Delete</button>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});


export default DeleteLockerModal