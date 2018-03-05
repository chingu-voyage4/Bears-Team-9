import React, { Component } from 'react';
import Stack from '../components/Stack';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render () {
        const stacks = this.props.stacks.map(stack => {
            return (
                <Stack
                    key={ stack.id } 
                    name={ stack.category }
                    count={ stack.cards.length } />
            );
        })
        return (
            <div className="dashboard">
                { stacks }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stacks: state.card.stacks
    }
}
export default connect(mapStateToProps)(Dashboard);