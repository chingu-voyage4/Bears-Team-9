import React from 'react';
import { NavLink } from 'react-router-dom';

const studyModal = (props) => {
    let continueAction = null;
    if (props.start) {
        continueAction = (
            <button 
                className="btn btn--modal" 
                onClick={() => window.location.href='/study'}>
                    Continue
            </button> 
        );
    } else {
        continueAction = (
            <button 
                className="btn btn--modal" 
                onClick={() => window.location.href='/dashboard'}>
                    End Session
            </button> 
        );
    }
    return (
        <div>
            <div
                onClick={props.closeModal}
                className="modal-background">
            </div>
            <div className="modal modal__add-stack">
                    <div className="">
                        <div className="modal__add-stack--titles">{props.text}</div>
                    </div>
                    <div className="btn__group--modal">
                        { continueAction }
                        <button
                            onClick={props.closeModal}
                            className="btn btn--modal">
                            Cancel
                        </button>
                    </div>

                </div>
        </div>
    )
}

export default studyModal;