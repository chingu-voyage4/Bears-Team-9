import React, { Component } from 'react';
import FlashcardContainer from './FlashcardContainer';
import FlashcardSummaryTable from './FlashcardSummaryTable';
import Navbar from '../components/Navbar';
import StudyModal from '../components/StudyModal';

class StudyPage extends Component {
    state = {
        cards: [{
            front: 'This is the front.',
            back: 'This is the back'
        }],
        status: [{
            correct: true,
            incorrect: false,
            bookmark: true
        }],
        currentCard: 0,
        closeModalShow: false
    };

    componentDidMount() {
        const stateProps = this.props.store.getState();
        if (stateProps.cards.currentStackId !== '') {
            const cards = stateProps.cards.stacks.filter(stack => stack._id === stateProps.cards.currentStackId)[0];
            const statusObj = {
                correct: false,
                incorrect: false,
                bookmark: false
            };
            const statuses = cards.cards.map(stack => statusObj);
            this.setState({cards: cards.cards, status: statuses});
        }
    }

    onArrowClicked = (direction) => {
        const currentCardIdx = this.state.currentCard;
        if (direction === -1) {
            if (currentCardIdx === 0) {
                this.setState({ currentCard: this.state.cards.length - 1 })
            } else {
                this.setState({ currentCard: currentCardIdx - 1 })
            }
        } else {
            if (currentCardIdx === (this.state.cards.length - 1)) {
                this.setState({ currentCard: 0 })
            } else {
                this.setState({ currentCard: currentCardIdx + 1 })
            }
        }
    }

    onMarkClick = (type) => {
        const oldStatusObj = this.state.status[this.state.currentCard];
        let newStatusObj;
        switch(type) {
            case 'correct':
                newStatusObj = {
                    ...oldStatusObj,
                    correct: !oldStatusObj.correct
                }
                break;
            case 'bookmark':
                newStatusObj = {
                    ...oldStatusObj,
                    bookmark: !oldStatusObj.bookmark
                }
                break;
            case 'incorrect':
                newStatusObj = {
                    ...oldStatusObj,
                    incorrect: !oldStatusObj.incorrect
                }
                break;
            default:
                newStatusObj = {
                    ...oldStatusObj
                }
        }
        const newStatus = this.state.status.map((statusObj, i) => {
            if (i === this.state.currentCard) {
                return newStatusObj
            } else {
                return statusObj
            }
        })
        this.setState({
            status: newStatus
        })
    }

    closeModalHandler = () => {
        this.setState({
            closeModalShow: false
        })
    }

    endSessionHandler = () => {
        this.setState({
            closeModalShow: true
        })
    }

    render() {
        let closeModal = null;
        if (this.state.closeModalShow) {
            closeModal = <StudyModal
                start={false}
                text="Are you sure you want to end this study session?"
                closeModal={ this.closeModalHandler } />
        }
        return (
            <div>
                { closeModal }
                <Navbar
                    dashboardClicked={() => this.endSessionHandler()}
                    store={ this.props.store }
                    studyMode={true} />
                <div className="study-page--width center">
                    <FlashcardContainer
                        card={ this.state.cards[this.state.currentCard] }
                        leftclicked={() => this.onArrowClicked(-1)}
                        rightclicked={() => this.onArrowClicked(1)}
                        correctClicked={() => this.onMarkClick('correct')}
                        bookmarkClicked={() => this.onMarkClick('bookmark')}
                        incorrectClicked={() => this.onMarkClick('incorrect')}
                        />
                    <FlashcardSummaryTable cards={ this.state.cards } statuses={ this.state.status }/>
                </div>
            </div>
        );
    }
}

export default StudyPage;
