import React, {useState} from 'react';
// Import Components
import Modal from './Modal';

// Styles

require('./Comic.scss');


const Comic = (props) => {
    // Props
    const {title, publisher, description, price, release_date, creators } = props;
    // Initial States
    const initialTitle = '';
    const initialDescription = '';
    const initialShow = false;
    // UseStates 
    const [currentTitle, setCurrentTitle] = useState(initialTitle);
    const [currentDescription, setCurrentDescription] =  useState(initialDescription);
    const [show, setShow] = useState(initialShow);


    function showModal (title, description)  {
        const bodyElt = document.querySelector("body");
        bodyElt.style.position = 'fixed';
        setCurrentTitle(title);
        setCurrentDescription(description);
        setShow(true);
    }

    function hideModal() {
        const bodyElt = document.querySelector("body");
        bodyElt.style.position = 'static';
        setShow(false);
    }

    return (
        <React.Fragment>
        <div className='comic'>
            <div className='comic__container'>
                <div className="comic__date">{release_date}</div>
                <h5>{title}</h5>
                <div className="comic__creators">{creators}</div>
                <div className="comic__publisher">{publisher}</div>
                <div className="comic__description">{description}</div>
                <div className="comic__price">{price}</div>
                <div className="comic__more" onClick={() => showModal(title,description)}>See More</div>
            </div>
        </div>
        {show && (
            <Modal 
            show={show} 
            handleClose={ () => hideModal()} 
            description={currentDescription} 
            title={currentTitle}
            />
        )}
        </React.Fragment>
    
    )
}

export default Comic