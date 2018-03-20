import React from 'react';

const flashcardButton = (props) => {
    let classCategory = null;
    let text = null;
    switch (props.type) {
        case 'correct':
            classCategory = 'btn btn--flashcard btn--flashcard--correct';
            text = <i className="fas fa-check"></i>
            break;
        case 'flip':
            classCategory = 'btn btn--flashcard btn--flashcard--flip';
            text = <i className="fas fa-bookmark"></i>
            break;
        case 'incorrect':
            classCategory = 'btn btn--flashcard btn--flashcard--incorrect';
            text = <i className="fas fa-times"></i>
            break;
        default:
            break;
    }
    return <a 
        onClick={ props.clicked }
        className={ classCategory }>
            { text }
        </a>;
}

export default flashcardButton;