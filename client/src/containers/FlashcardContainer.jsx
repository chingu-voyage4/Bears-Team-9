import React, { Component } from 'react';
import Flashcard from './../components/Flashcard';
import FlashcardButton from './../components/FlashcardButton';

class FlashcardContainer extends Component {
    render() {
        return (
            <div className="studypage__column--item">
                <Flashcard front="This is a flashcard question" />
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