import React from 'react';
import {NavLink} from 'react-router-dom';

const studyModal = (props) => {
    let continueAction = null;
    if (props.start) {
        continueAction = (
            <NavLink to='/study' className="btn btn--modal">
                Continue
            </NavLink>
        );
    } else {
        continueAction = (
            <NavLink to='/dashboard' className="btn btn--modal">
                End Session
            </NavLink>
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
                        <a onClick={props.closeModal} className="btn btn--modal">
                            Cancel
                        </a>
                    </div>

                </div>
        </div>
    )
}

export default studyModal;