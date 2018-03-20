import React from 'react';
import { NavLink } from 'react-router-dom';

const studyModal = (props) => {
    let continueAction = null;
    if (props.start) {
        continueAction = <NavLink to='/study' >Continue</NavLink>
    } else {
        continueAction = <NavLink to='/dashboard' >End Session</NavLink>
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
                        <button className="btn btn--modal">
                            { continueAction }
                        </button>
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