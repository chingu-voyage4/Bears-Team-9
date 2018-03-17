import React, { Component } from 'react';
import Flashcard from './../components/Flashcard';
import FlashcardButton from './../components/FlashcardButton';

class FlashcardContainer extends Component {
    render() {
        return (
            <div className="studypage__column--item">
                <div className="flashcard-row">
                    <a className="btn--left">
                        <i className="fas fa-caret-left"></i>
                    </a>
                    <Flashcard 
                        front="This is a flashcard question" 
                        back="This is a flascard answer" />
                    <a className="btn--right">
                        <i className="fas fa-caret-right"></i>
                    </a>
                </div>
                <div className="studypage__btn-group" >
                    <FlashcardButton type="correct" />
                    <FlashcardButton type="flip" />
                    <FlashcardButton type="incorrect" />
                </div>
            </div>
        )
    };
};

export default FlashcardContainer;