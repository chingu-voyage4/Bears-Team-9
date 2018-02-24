import React, { Component } from 'react';
import Stack from '../components/Stack';

class Dashboard extends Component {
    state = {
        stacks: [
            {
                category: 'front end',
                cards: [
                    {
                        id: 1,
                        front: 'What is HTTPS',
                        back: 'an internet protocol'
                    },
                    {
                        id: 2,
                        front: 'What is Sass',
                        back: 'a CSS preprocessor'
                    },
                    {
                        id: 3,
                        front: 'is react a library or a framework',
                        back: 'a library'
                    }
                ],
                id: 'stack_1'
            },
            {
                category: 'back end',
                cards: [
                    {
                        id: 1,
                        front: 'Which side does the back end deal with?',
                        back: 'the client side'
                    },
                    {
                        id: 2,
                        front: 'what is state in redux?',
                        back: 'it stores global variables for a react app'
                    },
                    {
                        id: 3,
                        front: 'what is the back end language for django apps?',
                        back: 'python'
                    }
                ],
                id: 'stack_2'
            },
            {
                category: 'history',
                cards: [
                    {
                        id: 1,
                        front: 'Who was the first American president?',
                        back: 'George Washington'
                    },
                    {
                        id: 2,
                        front: "What was Alexander Hamilton's role as a founding father?",
                        back: 'He fought under Washington and was the first treasury secretary'
                    },
                    {
                        id: 3,
                        front: 'Which country was the first to send a man into space?',
                        back: 'Soviet Union'
                    }
                ],
                id: 'stack_3'
            }
        ],
        currentStackId: 'stack_1'
    }
    render () {
        const stacks = this.state.stacks.map(stack => {
            return (
                <Stack 
                    name={ stack.category }
                    count={ stack.cards.length } />
            );
        })
        return (
            <div className="dashboard content-width">
                { stacks }
            </div>
        );
    }
}

export default Dashboard;