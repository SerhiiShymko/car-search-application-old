import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleESC = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleESC);
        return () => {
            document.removeEventListener('keydown', handleESC);
        };
    }, [onClose]);

    const handleClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };


    return modalRoot
        ? createPortal(<Overlay onClick={handleClickBackdrop}>{children}</Overlay>, modalRoot)
        : null;
}

export default Modal