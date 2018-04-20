import React from 'react';

const stackChoice = (props) => {
    let classOption = "btn btn--stackchoice";
    if (props.active === props.currentStackId) {
        classOption = "btn btn--stackchoice btn--stackchoice-active"
    }
    return (
        <span 
            onClick={ props.clicked }
            className={ classOption }>
                {props.name}
        </span>
    );
};

export default stackChoice;