import React, { Component } from 'react';
import StackChoice from '../components/StackChoice';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class StackChoiceContainer extends Component {
    render() {
        const choices = this.props.stacks.map(stack => {
            return (
                <StackChoice 
                    name={ stack.category } 
                    key={ stack.id }
                    clicked={ () => this.props.onChangeStack(stack.id) }
                    />
            );
        });
        return (
            <div className='stackChoiceContainer'>
                {choices}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stacks: state.card.stacks,
        id: state.card.currentStackId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeStack: (newId) => dispatch({ type: actionTypes.CHANGE_STACK, stackId: newId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackChoiceContainer);