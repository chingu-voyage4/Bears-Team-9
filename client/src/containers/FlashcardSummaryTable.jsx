import React, { Component } from 'react';

class FlashcardSummaryTable extends Component {
    render () {
        let progressRows = null;
        return (
            <div className="studypage__column--item">
                Flashcard Summary Table
                { progressRows }
            </div>
        );
    }
}

export default FlashcardSummaryTable;