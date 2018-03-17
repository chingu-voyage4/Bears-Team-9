import React, { Component } from 'react';
import FlashcardContainer from './FlashcardContainer';
import FlashcardSummaryTable from './FlashcardSummaryTable';

class StudyPage extends Component {
    render() {
        return (
            <div className="content-width center">
                <div className="studypage__column">
                    <FlashcardContainer store={ this.props.store } />
                </div>
                <div className="studypage__column">
                    <FlashcardSummaryTable store={ this.props.store } />
                </div>
            </div>
        )
    }
}

export default StudyPage;