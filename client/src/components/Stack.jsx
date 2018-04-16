import React from 'react';
import ChangeStack from './../actions/ChangeStack';

const stack = (props) => {
    return (
        <div className="stack">
            <span className="stack__text stack__text--category">{props.name}</span>
            <span className="stack__text">
                Qns: <span className="stack__text--count">{props.count}</span>
            </span>
            {/* <span className="stack__text">
                High Score:
            </span> */}
            <div className="btn-group--stack">
<<<<<<< HEAD
                {/* <a  className="btn btn--stack">Quiz</a> */}
                <a  
=======
                <a  className="btn btn--stack">Quiz</a>
                <a
>>>>>>> development
                    onClick={ () => {
                        props.studyClicked();
                        props.store.dispatch(ChangeStack(props.id))}
                    }
                    className="btn btn--stack">
                    Study
                </a>
            </div>
        </div>
    );
}

export default stack;
