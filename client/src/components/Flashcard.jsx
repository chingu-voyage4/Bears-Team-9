import React from 'react';

const Flashcard = (props) => {
    return (
        <div className="flashcard">
            <div className="flashcard__side flashcard__side--front">
                <span className="flashcard__text flashcard__text--front">
                        { props.front }
                </span>
            </div>
            <div className="flashcard__side flashcard__side--back">
                <span className="flashcard__text flashcard__text--back">
                        { props.back }
                </span>
            </div>
        </div>
    );
}

export default Flashcard;