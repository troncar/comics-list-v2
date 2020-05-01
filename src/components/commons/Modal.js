import React from 'react';
import './Modal.scss';



const Modal = ({ handleClose, show, title, description }) => {
const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
    <div className={showHideClassName}>
        <section className='modal-main'>
            <h3>{title}</h3>
            <div className='modal__content__container'>
                <div className='modal__content'>
                    {description}
                </div>
            </div>
            <div className="modal__close" onClick={handleClose}>
                X
            </div>
        </section>
    </div>
    );
};

export default Modal;

