import React, { Component } from 'react';
import FlashcardTable from './FlashcardTable';
import StackChoiceContainer from './StackChoiceContainer';

class EditPage extends Component {
    render () {
        return (
            <div>
                <StackChoiceContainer store={ this.props.store }/>
                <FlashcardTable store={ this.props.store }/>
            </div>
        );
    }
}

export default EditPage;