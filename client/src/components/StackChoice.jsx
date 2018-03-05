import React from 'react';

const stackChoice = (props) => {
    return (
        <span 
            onClick={ props.clicked }
            className="btn btn--stackchoice">
                {props.name}
        </span>
    );
};

export default stackChoice;