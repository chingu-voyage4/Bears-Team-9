import React, { Component } from 'react';
import StackChoice from '../components/StackChoice';
import ChangeStack from '../actions/ChangeStack';

class StackChoiceContainer extends Component {
    render() {
        const choices = this.props.store.getState().stacks.map(stack => {
            return (
                <StackChoice 
                    name={ stack.category } 
                    key={ stack.id }
                    clicked={ () => this.props.store.dispatch(ChangeStack(stack.id)) }
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