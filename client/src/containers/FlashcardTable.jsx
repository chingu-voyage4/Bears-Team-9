import React, { Component } from 'react';
import FlashcardRow from '../components/FlashcardRow';
import InputRow from '../components/InputRow';
import EditModal from '../components/EditModal';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class FlashcardTable extends Component {
    state = {
        currentFront: '',
        currentBack: '',
        newFront: '',
        newBack: '',
        modalShow: false,
        cardId: ''
    }

    clearInputs = () => {
        this.setState({
            newFront: '',
            newBack: ''
        });
    }

    textChangeHandlerFront = (e) => {
        // console.log(e.target.value);
        this.setState({
            newFront: e.target.value
        })
    };

    textChangeHandlerBack = (e) => {
        this.setState({
            newBack: e.target.value
        })
    };

    editCardHandler = (id) => {
        const currentCard = this.props.cards.cards.filter(card => card.id === id)[0];
        // console.log(currentCard);
        this.setState({
            modalShow: true,
            currentFront: currentCard.front,
            currentBack: currentCard.back,
            cardId: id
        })
    }

    closeModalHandler = () => {
        this.setState({
            modalShow: false,
            currentFront: '',
            currentBack: '',
            cardId: ''
        })
    }
    updateCardHandler = (front, back) => {
        const newCard = this.state.cards.filter(card => card.id === this.state.cardId)[0];
        newCard.front = front;
        newCard.back = back;
        const newCards = this.state.cards.map(card => {
            if (card.id !== this.state.cardId) {
                return card;
            } else {
                return newCard;
            }
        });
        this.setState({
            modalShow: false,
            currentFront: '',
            currentBack: '',
            cardId: '',
            cards: newCards
        });
    }

    render() {
        let modal = null;
        if (this.state.modalShow) {
            modal = <EditModal
                updateCard={this.updateCardHandler}
                cardId={this.props.id}
                closeModal={this.closeModalHandler}
                currentFront={this.state.currentFront}
                currentBack={this.state.currentBack} />;
        }
        const rows = this.props.cards.cards.map((card, i) => {
            return <FlashcardRow
                edit={ () => this.editCardHandler(card.id)}
                // edit={this.editCardHandler.bind(this, card.id)}
                delete={ () => this.props.onDeleteCard(card.id) }
                // delete={this.deleteCardHandler.bind(this, card.id)}
                frontText={card.front}
                backText={card.back}
                key={card.id} 
                />;
        })
        return (
            <div>
                {modal}
                <div className='flashcardTable'>
                    <div className='flashcardTable__row--header'>
                        <span className='flashcardTable__row--header--front'>Question</span>
                        <span className='flashcardTable__row--header--back'>Answer</span>
                    </div>
                    {rows}
                    <InputRow
                        textChangeFront={this.textChangeHandlerFront}
                        textChangeBack={this.textChangeHandlerBack}
                        newFront={this.state.newFront}
                        newBack={this.state.newBack}
                    />
                    <button
                        // onClick={this.addCardHandler}
                        onClick={ () => {
                            this.clearInputs();
                            this.props.onAddCard(this.state.newFront, this.state.newBack)
                        } }
                        className='btn btn--add-card'>
                        Add Card
                </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.card.stacks.filter(stack => {
            return stack.id === state.card.currentStackId;
        })[0].category,
        cards: state.card.stacks.filter(stack => {
            return stack.id === state.card.currentStackId;
        })[0],
        id: state.card.currentStackId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteCard: (cardId) => dispatch({ type: actionTypes.DELETE_CARD, cardId: cardId }),
        onAddCard: (front, back) => dispatch({ type: actionTypes.ADD_CARD, frontText: front, backText: back})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlashcardTable);
// export default FlashcardTable;