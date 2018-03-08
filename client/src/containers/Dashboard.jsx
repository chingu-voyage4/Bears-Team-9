import React, { Component } from 'react';
import Stack from '../components/Stack';

class Dashboard extends Component {
    componentDidMount () {
        fetch('/api/categories')
            .then(res => res.json())
            .then(res => console.log(res));
    }
    render () {
        const stateProps = this.props.store.getState();
        const stacks = stateProps.stacks.map((stack, id) => {
            return (
                <Stack
                    key={ id } 
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

export default Dashboard;