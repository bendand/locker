import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const DeleteContainerItemModal = forwardRef(function DeleteContainerItemModal({
    onCancel,
    onProceed },
    ref) {
    const dialog = useRef();

    // hook that exposes methods used to control modal
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
            Are you sure you want to delete item?
            <div>
                <button onClick={onProceed}>Delete</button>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});


export default DeleteContainerItemModal