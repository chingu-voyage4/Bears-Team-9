import React from 'react';

const Flashcard = (props) => {
    return (
        <div className="flashcard">
            <span 
                className="flashcard__text flashcard__text--front">
                    { props.front }
            </span>
        </div>
    );
}

export default Flashcard;