import React, { Component } from 'react';
import FlashcardTable from './FlashcardTable';
import StackChoiceContainer from './StackChoiceContainer';
import Navbar from '../components/Navbar';

class EditPage extends Component {
    render () {
        return (
            <div className="app">
                <Navbar store={ this.props.store } studyMode={false} />
                <StackChoiceContainer store={ this.props.store }/>
                <FlashcardTable store={ this.props.store }/>
            </div>
        );
    }
}

export default EditPage;