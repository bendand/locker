import { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';

const Modal = forwardRef(function Modal({
    children,
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
            {children}
            <div>
                <button onClick={onDelete}>Delete Locker</button>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});


export default Modal