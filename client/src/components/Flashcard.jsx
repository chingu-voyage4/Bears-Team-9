import React from 'react';

const Flashcard = (props) => {
    return (
        <div className="flashcard">
            <div className="flashcard__side flashcard__side--front">
                <div className="flashcard__side--text">
                    <span>
                        {props.front}
                    </span>
                </div>
                
            </div>
            <div className="flashcard__side flashcard__side--back">
                <div className="flashcard__side--text">
                    <span>
                        { props.back }
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;