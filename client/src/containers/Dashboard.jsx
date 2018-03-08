import React, { Component } from 'react';
import Stack from '../components/Stack';

class Dashboard extends Component {
    componentDidMount() {
        fetch('/api/category/5a9f238bb1046f575107c377', {
            method: 'DELETE',
            body: JSON.stringify({
                cardId: "5aa1a9bafc19ee2a1e8cd322"
            })     
        })
            .then(res => res.json())
            .then(cats => console.log(cats))
            .catch(err => console.log(err));
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
