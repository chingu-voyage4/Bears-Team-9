import React, { Component } from 'react';
import StackChoice from '../components/StackChoice';
import ChangeStack from '../actions/ChangeStack';

class StackChoiceContainer extends Component {
    render() {
        const choices = this.props.store.getState().cards.stacks.map(stack => {
            return (
                <StackChoice 
                    name={ stack.categoryName } 
                    key={ stack._id }
                    clicked={ () => this.props.store.dispatch(ChangeStack(stack._id)) }
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

export default StackChoiceContainer;