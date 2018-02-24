import React from 'react';

const stack = (props) => {
    return (
        <div className="stack">
            <span className="stack__text stack__text--category">{props.name}</span>
            <span className="stack__text">
                Count: <span className="stack__text--count">{props.count}</span>
            </span>
            <span className="stack__text">
                High Score:
            </span>
        </div>
    );
}

export default stack;