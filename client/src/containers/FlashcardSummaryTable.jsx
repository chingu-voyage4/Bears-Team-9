import React, { Component } from 'react';
import Flashcard from './../components/Flashcard';
import FlashcardButton from './../components/FlashcardButton';
import FlashcardSummaryRow from './../components/FlashcardSummaryRow';

class FlashcardSummaryTable extends Component {
    render () {
        let progressRows = null;
        if (this.props.cards) {
            progressRows = this.props.cards.map((card, i) => {
                return (
                    <FlashcardSummaryRow
                        num={i}
                        front={card.front}
                        correct={true}
                        incorrect={true}
                        bookmark={true}
                    />
                );
            });
        }
        console.log(this.props.cards.stacks);
        return (
            <div className="studypage__column">
                <div className="flashcardSummary">
                    <FlashcardSummaryRow
                        num='#'
                        front='Question'
                        correct={ true }
                        incorrect={ true }
                        bookmark={ true } />
                    { progressRows }
                </div>
            </div>
        );
    }
}

export default FlashcardSummaryTable;