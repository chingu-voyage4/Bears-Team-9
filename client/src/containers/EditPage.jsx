import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlashcardTable from './FlashcardTable';
import StackChoiceContainer from './StackChoiceContainer';
import Navbar from '../components/Navbar';

class EditPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);

        const { user } = this.props.store.getState();
        if( !user.isLoggedIn ) {
            this.context.router.history.goBack();
        }
    }

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