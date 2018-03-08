import React, { Component } from 'react';
import Stack from '../components/Stack';

class Dashboard extends Component {
    componentDidMount() {
        fetch('/api/category/5a9f238bb1046f575107c377', {
            method: 'DELETE',
            body: JSON.stringify({
                "cardId": "5aa1a9bafc19ee2a1e8cd322"
            })     
        })
            .then(res => res.json())
            .then(cats => console.log(cats))
            .catch(err => console.log(err));
        // fetch('/api/category', {
        //   method: 'GET',
        //   headers: {
        //     'id': "5a9f238bb1046f575107c377"
        //   }
        // })
        //   .then(res => res.json())
        //   .then(cats => console.log(cats))
        //   .catch(err => console.log(err))
    //     fetch('/api/category/5a9f238bb1046f575107c377', {
    //         method: 'POST',
    //         headers: {
    //             'front': 'When was the war 0f 1812?',
    //             'back': 'In 1812'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(newCards => console.log(newCards))
    //         .catch(err => console.log(err));
    // }
        // fetch('/api/category/5a9f238bb1046f575107c377', {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         updatedCards: [
        //             {
        //                 id:  '5aa1a9bafc19ee2a1e8cd322',
        //                 front: 'When was the war of 1812 fought?',
        //                 back: 'In 1812'
        //             },
        //             {
        //                 id:  '5aa1a99dfc19ee2a1e8cd321',
        //                 front: 'When was the Declariation of Independnece signed?',
        //                 back: '1776'
        //             },
        //         ]
        //     })     
        // })
        //     .then(res => res.json())
        //     .then(newCards => console.log(newCards))
        //     .catch(err => console.log(err));
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
