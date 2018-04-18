import React from 'react';

const flashcardSummaryRow = (props) => {
    let correctClass = '';
    let incorrectClass = '';
    let bookmarkClass = '';
    if (props.correct) {
        correctClass = ' tick';
    }
    if (props.incorrect) {
        incorrectClass = ' cross';
    }
    if (props.bookmark) {
        bookmarkClass = ' show';
    }
    return (
        <tr className='flashcardSummary__row--header'>
            <td className='flashcardSummary__row--header--title show'>{ props.num }</td>
            <td className='flashcardSummary__row--header--title show'>{ props.front }</td>
            <td className={'flashcardSummary__row--header--title'.concat(correctClass)}><i className="fas fa-check"></i></td>
            <td className={'flashcardSummary__row--header--title'.concat(incorrectClass)}><i className="fas fa-times"></i></td>
            <td className={'flashcardSummary__row--header--title'.concat(bookmarkClass)}><i className="fas fa-bookmark"></i></td>
        </tr>
    );
};

export default flashcardSummaryRow;
