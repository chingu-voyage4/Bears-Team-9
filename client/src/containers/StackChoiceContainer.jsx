import React, { Component } from 'react';
import StackChoice from '../components/StackChoice';
import { connect } from 'react-redux';

class StackChoiceContainer extends Component {
    render() {
        const choices = this.props.stacks.map(stack => {
            return <StackChoice name={ stack.category } key={ stack.id } />
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
        stacks: state.card.stacks
    }
}
export default connect(mapStateToProps)(StackChoiceContainer);