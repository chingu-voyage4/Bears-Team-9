import React, { Component } from 'react';
import Flashcard from './../components/Flashcard';
import FlashcardButton from './../components/FlashcardButton';

class FlashcardSummaryTable extends Component {
    render () {
        let progressRows = null;
        return (
            <div className="studypage__column--item">
                <div>Test</div>
                {/* <div className="flashcardSummary">
                    <div className='flashcardSummary__row--header'>
                        <span className='flashcardSummary__row--header--title'>#</span>
                        <span className='flashcardSummary__row--header--title'>Question</span>
                        <span className='flashcardSummary__row--header--title'><i className="fas fa-check"></i></span>
                        <span className='flashcardSummary__row--header--title'><i className="fas fa-times"></i></span>
                        <span className='flashcardSummary__row--header--title'><i className="fas fa-bookmark"></i></span>
                    </div>
                    { progressRows }
                </div> */}
            </div>
        );
    }
}

export default FlashcardSummaryTable;