import React, { Component } from 'react';
import FlashcardRow from '../components/FlashcardRow';
import InputRow from '../components/InputRow';
import EditModal from '../components/EditModal';
import { connect } from 'react-redux';

class FlashcardTable extends Component {
    state = {
        category: 'front end',
        cards: [
            {
                id: 1,
                front: 'What is HTTPS',
                back: 'The "S" in HTTPS stands for secure. HTTPS ensures an encrypted connection to whatever site is being visited.'
            },
            {
                id: 2,
                front: 'What is Sass?',
                back: 'Sass is an extension of CSS that allows for more complex and organized stylesheets.'
            },
            {
                id: 3,
                front: 'Is react a library or a framework?',
                back: 'React is technically a library, but can be used with extension such as Redux to turn it into more of a framework.'
            }
        ],
        id: 'stack_1',
        newFront: '',
        newBack: '',
        modalShow: false,
        cardId: ''
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

    addCardHandler = () => {
        const newCards = [
            ...this.state.cards,
            {
                id: this.state.cards.length + 1,
                front: this.state.newFront,
                back: this.state.newBack
            }
        ]
        this.setState({
            cards: newCards,
            newFront: '',
            newBack: ''
        })
    }

    deleteCardHandler = (id) => {
        const newCards = this.state.cards.filter(card => card.id !== id);
        // console.log(i);
        console.log(this.state);
        this.setState({
            cards: newCards
        })
    }

    editCardHandler = (id) => {
        const currentCard = this.state.cards.filter(card => card.id === id)[0];
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
                cardId={this.cardId}
                closeModal={this.closeModalHandler}
                currentFront={this.state.currentFront}
                currentBack={this.state.currentBack} />;
        }
        const rows = this.state.cards.map((card, i) => {
            return <FlashcardRow
                edit={this.editCardHandler.bind(this, card.id)}
                delete={this.deleteCardHandler.bind(this, card.id)}
                frontText={card.front}
                backText={card.back}
                key={card.id} />;
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
                        onClick={this.addCardHandler}
                        className='btn btn--add-card'>
                        Add Card
                </button>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         stacks: state.card.stacks,
//         currentStack: state.card.currentStackId
//     }
// }
// export default connect(mapStateToProps)(FlashcardTable);
export default FlashcardTable;