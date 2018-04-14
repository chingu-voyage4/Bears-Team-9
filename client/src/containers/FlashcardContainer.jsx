import React, { Component } from 'react';
import Flashcard from './../components/Flashcard';
import FlashcardButton from './../components/FlashcardButton';

class FlashcardContainer extends Component {
    render() {
        let flashcard = <Flashcard
                front=" This is a flashcard question"
                back="This is a flascard answer" />;
        if (this.props.card) {
            flashcard = <Flashcard front={ this.props.card.front } back={ this.props.card.back } />
        }
        //console.log("PROPS BELOW HERE");
        //console.log(this.props.card)
        return (
            <div className="studypage__column">
                <div className="flashcard-row">
                    <a className="btn--left" onClick={this.props.leftclicked}>
                        <i className="fas fa-caret-left"></i>
                    </a>
                    { flashcard }
                    <a className="btn--right" onClick={this.props.rightclicked}>
                        <i className="fas fa-caret-right"></i>
                    </a>
                </div>
                <div className="studypage__btn-group" >
                    <FlashcardButton type="correct" clicked={this.props.correctClicked}/>
                    <FlashcardButton type="flip"  clicked={this.props.bookmarkClicked}/>
                    <FlashcardButton type="incorrect"  clicked={this.props.incorrectClicked}/>
                </div>
            </div>
        );
    };
};

export default FlashcardContainer;
