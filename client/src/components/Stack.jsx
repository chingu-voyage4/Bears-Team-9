import React from 'react';
import ChangeStack from './../actions/ChangeStack';

const stack = (props) => {
    return (
        <div className="stack">
            <span className="stack__text stack__text--category">{props.name}</span>
            <span className="stack__text">
                Count: <span className="stack__text--count">{props.count}</span>
            </span>
            {/* <span className="stack__text">
                High Score:
            </span> */}
            <div className="btn-group--stack">
                {/* <a  className="btn btn--stack">Quiz</a> */}
                <a  
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