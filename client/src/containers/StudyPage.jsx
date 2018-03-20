import React, { Component } from 'react';
import FlashcardContainer from './FlashcardContainer';
import FlashcardSummaryTable from './FlashcardSummaryTable';

class StudyPage extends Component {
    state = {
        cards: []
    };

    componentWillMount() {
        const stateProps = this.props.store.getState();
        const cards = stateProps.cards.stacks.filter(stack => stack._id === stateProps.cards.currentStackId)[0];
        this.setState({
            cards: cards
        })
    }
    render() {
        // console.log(this.state.cards);
        return (
            <div className="content-width center">
                <FlashcardContainer store={ this.state.cards } />
                <FlashcardSummaryTable cards={ this.state.cards } />
            </div>
        )
    }
}

export default StudyPage;