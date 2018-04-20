import React, { Component } from 'react';
import FlashcardRow         from '../components/FlashcardRow';
import InputRow             from '../components/InputRow';
import EditModal            from '../components/EditModal';
import AddCard              from '../actions/AddCard';
import DeleteCard           from '../actions/DeleteCard';
import FetchState           from '../actions/FetchState';
import Loader               from '../components/Loader';
import DeleteCategoryModal  from '../components/DeleteCategoryModal';

class FlashcardTable extends Component {
    state = {
        currentFront: '',
        currentBack: '',
        newFront: '',
        newBack: '',
        modalShow: false,
        cardId: '',
        modalDeleteShow: false
    }

    clearInputs = () => {
        this.setState({
            newFront: '',
            newBack: ''
        });
    }

    /* Methods for two changeHandler
    textChangeHandler = (e) => {
        console.log(e.target.value);
        if (e.target.name === "qn") {
          this.setState({ newFront: e.target.value });
        } else {
          this.setState({ newBack: e.target.value });
        }

        if (e.target.value.length > )
        e.target.parentNode.style.height = "auto";
        e.target.parentNode.style.height = (e.target.scrollHeight) + "px";
    };
    */

    textChangeHandlerFront = (e) => {
        // console.log(e.target);
        this.setState({ newFront: e.target.value });

        if (e.target.value.length < e.target.nextSibling.value.length){
          e.target.parentNode.style.height = e.target.nextSibling.height;
        } else {
          e.target.parentNode.style.height = "auto";
          e.target.parentNode.style.height = (e.target.scrollHeight) + "px";
        }
    };

    textChangeHandlerBack = (e) => {
        this.setState({ newBack: e.target.value });

        if (e.target.value.length < e.target.previousSibling.value.length){
          e.target.parentNode.style.height = e.target.previousSibling.height;
        } else {
          e.target.parentNode.style.height = "auto";
          e.target.parentNode.style.height = (e.target.scrollHeight) + "px";
        }
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
                this.props.store.getState().cards.stacks,
                this.props.store.getState().cards.currentStackId,
                id)
        );
    }

    deleteCategoryHandler = () => {
        this.setState({
            modalDeleteShow: true
        })
        console.log(this.state)
    }

    closeDeleteModalHandler = () => {
        this.setState({
            modalDeleteShow: false
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

    getCurrentCards = () => {
        const currentStackId = this.props.store.getState().cards.currentStackId;
        const stack = this.props.store.getState().cards.stacks.filter(stack => {
           return stack._id === currentStackId;
       })[0];
        // console.log(stack);
       return stack;
    }

    addDeleteButtons = (
        <React.Fragment>
            <button
                onClick={() => {
                    this.clearInputs();
                    this.props.store.dispatch(
                        AddCard(
                            this.props.store.getState().cards.stacks,
                            this.props.store.getState().cards.currentStackId,
                            this.state.newFront, this.state.newBack))
                }}
                className='btn btn--add-card'>
                Add Card
            </button>
            <button
                onClick={this.deleteCategoryHandler}
                className='btn btn--delete-card'>
                Delete Category
            </button>
        </React.Fragment>
    )

    componentWillMount = () => {
        this.props.store.subscribe(() => this.forceUpdate());
        this.props.store.dispatch(FetchState());
    }

    render() {
        const stateProps = this.props.store.getState().cards;
        const user = this.props.store.getState().user;
        let modal = null;
        let flashcardTable = null;
        let deleteModal = null;
        if (this.state.modalShow) {
            modal = <EditModal
                store={this.props.store}
                cardId={this.state.cardId}
                closeModal={this.closeModalHandler}
                currentFront={this.state.currentFront}
                currentBack={this.state.currentBack} />;
        }
        if (this.state.modalDeleteShow) {
            deleteModal = <DeleteCategoryModal
                store={this.props.store}
                closeModal={this.closeDeleteModalHandler}
                />
        }
        let rows = <Loader />;
        if (stateProps.status === 'success' && stateProps.currentStackId !== '') {
            const currentStack = this.getCurrentCards();
            const rowContents = currentStack.cards.map(card => {
                return <FlashcardRow
                    stack={currentStack}
                    user={this.props.store.getState().user}
                    edit={() => this.editCardHandler(card._id)}
                    delete={() => this.deleteCardHandler(card._id)}
                    frontText={card.front}
                    backText={card.back}
                    key={card._id}
                />;
            });
            let inputRow = null;
            // two changeHandler method, front and back, become one changeHandler
            // textChange={this.textChangeHandler}
            if (user.isLoggedIn && currentStack.owner === user._id) {
                inputRow =  <InputRow
                    textChangeFront={this.textChangeHandlerFront}
                    textChangeBack={this.textChangeHandlerBack}
                    newFront={this.state.newFront}
                    newBack={this.state.newBack}
                />
            }
            rows = (
                <section className="edit-page__wrapper">
                  <div className='flashcardTable__row--header front'>Question</div>
                  <div className='flashcardTable__row--header back'>Answer</div>

                  { rowContents }
                  { inputRow }
                  { ( user.isLoggedIn && currentStack.owner === user._id ) ? this.addDeleteButtons : null }

                </section>
            );
        }
        if (stateProps.currentStackId !== '') {
            flashcardTable = (
                <div className='flashcardTable'>
                    {rows}
                </div>
            );
        }
        return (
            <div>
                {modal}
                {deleteModal}
                {flashcardTable}
            </div>
        );
    }
}

export default FlashcardTable;
