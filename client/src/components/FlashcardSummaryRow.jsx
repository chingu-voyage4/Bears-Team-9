import React from 'react';

const flashcardSummaryRow = (props) => {
    let correctClass = '';
    let incorrectClass = '';
    let bookmarkClass = '';
    if (props.correct) {
        correctClass = ' show';
    }
    if (props.incorrect) {
        incorrectClass = ' show';
    }
    if (props.bookmark) {
        bookmarkClass = ' show';
    }
    return (
        <div className='flashcardSummary__row--header'>
            <span className='flashcardSummary__row--header--title show'>{ props.num }</span>
            <span className='flashcardSummary__row--header--title show'>{ props.front }</span>
            <span className={'flashcardSummary__row--header--title'.concat(correctClass)}><i className="fas fa-check"></i></span>
            <span className={'flashcardSummary__row--header--title'.concat(incorrectClass)}><i className="fas fa-times"></i></span>
            <span className={'flashcardSummary__row--header--title'.concat(bookmarkClass)}><i className="fas fa-bookmark"></i></span>
        </div>
    );
};

export default flashcardSummaryRow;