import React, { Component } from 'react';
import FlashcardTable from './FlashcardTable';
import StackChoiceContainer from './StackChoiceContainer';

import { connect } from 'react-redux';

class EditPage extends Component {
    render () {
        return (
            <div>
                <StackChoiceContainer />
                <FlashcardTable />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stacks: state.card.stacks
    }
}
export default connect(mapStateToProps)(EditPage);