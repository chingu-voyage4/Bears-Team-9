import React, { Component } from 'react';
import FlashcardRow from '../components/FlashcardRow';
import InputRow from '../components/InputRow';
import EditModal from '../components/EditModal';
import * as actionTypes from '../actions/actions';
import AddCard from '../actions/AddCard';
import DeleteCard from '../actions/DeleteCard';
import FetchState from '../actions/FetchState';
import Loader from '../components/Loader';

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
        const currentCard = this.getCurrentCards().cards.filter(card => card._id === id)[0];
        this.setState({
            modalShow: true,
            currentFront: currentCard.front,
            currentBack: currentCard.back,
            cardId: id
        })
    }

    deleteCardHandler = (id) => {
        console.log(id);
        this.props.store.dispatch(
            DeleteCard(
                this.props.store.getState().stacks, 
                this.props.store.getState().currentStackId, 
                id)
        );
    }

    closeModalHandler = () => {
        this.setState({
            modalShow: false,
            currentFront: '',
            currentBack: '',
            cardId: ''
        })
    }
    
    getCurrentCards = () => {
        const currentStackId = this.props.store.getState().currentStackId;
        const stack = this.props.store.getState().stacks.filter(stack => {
           return stack._id === currentStackId;
       })[0];
        // console.log(stack);
       return stack; 
    }

    componentWillMount = () => {
        this.props.store.subscribe(() => this.forceUpdate());
        this.props.store.dispatch(FetchState());
    }

    render() {
        const stateProps = this.props.store.getState();
        let modal = null;
        if (this.state.modalShow) {
            modal = <EditModal
                store={this.props.store}
                cardId={this.state.cardId}
                closeModal={this.closeModalHandler}
                currentFront={this.state.currentFront}
                currentBack={this.state.currentBack} />;
        }
        let rows = <Loader />;
        if (stateProps.status === 'success') {
            rows = this.getCurrentCards().cards.map(card => {
                return <FlashcardRow
                    edit={() => this.editCardHandler(card._id)}
                    delete={() => this.deleteCardHandler(card._id)}
                    frontText={card.front}
                    backText={card.back}
                    key={card._id}
                />;
            })
        }
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
                        onClick={ () => {
                            this.clearInputs();
                            this.props.store.dispatch(
                                AddCard(
                                    this.props.store.getState().stacks, 
                                    this.props.store.getState().currentStackId,
                                    this.state.newFront, this.state.newBack))
                        } }
                        className='btn btn--add-card'>
                        Add Card
                </button>
                </div>
            </div>
        );
    }
}

export default FlashcardTable;