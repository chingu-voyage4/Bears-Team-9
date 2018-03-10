import React, { Component } from 'react';
import StackChoice from '../components/StackChoice';
import ChangeStack from '../actions/ChangeStack';

class StackChoiceContainer extends Component {
    render() {
        const stateProps = this.props.store.getState()
        const choices = stateProps.cards.stacks.map(stack => {
            return (
                <StackChoice 
                    name={ stack.categoryName } 
                    key={ stack._id }
                    active={ stack._id  }
                    currentStackId={ stateProps.cards.currentStackId }
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