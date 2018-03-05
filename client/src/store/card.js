import * as actionTypes from './actions';

const initialState = {
    stacks: [
        {
            category: 'front end',
            cards: [
                {
                    id: 1,
                    front: 'What is HTTPS',
                    back: 'The "S" in HTTPS stands for secure. HTTPS ensures an encrypted connection to whatever site is being visited.'
                },
                {
                    id: 2,
                    front: 'What is Sass',
                    back: 'Sass is an extension of CSS that allows for more complex and organized stylesheets.'
                },
                {
                    id: 3,
                    front: 'is react a library or a framework',
                    back: 'React is technically a library, but can be used with extension such as Redux to turn it into more of a framework.'
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
    currentStackId: 'stack_3'
}

// REDUCERS
const cardsReducer = (state = initialState, action) => {
    let currentStack;
    let newCard;
    let newCards;
    let newState;
    let newStacks;
    let updatedStack;
    let updatedCard;
    switch (action.type) {
        case actionTypes.ADD_CARD:
            currentStack = state.stacks.filter(stack => stack.id === state.currentStackId)[0];

            newCard = {
                id: currentStack.cards.length + 1,
                front: action.frontText,
                back: action.backText
            }
            // CREATE NEW STACK BY APPENDING NEW CARD
            newCards = currentStack.cards.concat(newCard);

            // REPLACE OLD STACK IN OLD STATE WITH NEW STACK
            newState = {
                ...state
            }

            newStacks = newState.stacks.map(stack => {
                if (stack.id === state.currentStackId) {
                    return {
                        ...stack,
                        cards: newCards
                    };
                } else {
                    return stack;
                }
            })
            return {
                ...state,
                stacks: newStacks
            }
        case actionTypes.DELETE_CARD:
            currentStack = state.stacks.filter(stack => stack.id === state.currentStackId)[0];
            updatedStack = {
                ...currentStack,
                cards: currentStack.cards.filter(card => card.id !== action.cardId)
            }
            newStacks = state.stacks.map(stack => {
                if (stack.id === state.currentStackId) {
                    return updatedStack;
                } else {
                    return stack;
                }
            })

            return {
                ...state,
                stacks: newStacks
            }
        case actionTypes.UPDATE_CARD:
            currentStack = state.stacks.filter(stack => stack.id === state.currentStackId)[0];
            updatedCard = currentStack.cards.filter(card => card.id === action.cardId)[0];
            updatedCard.front = action.newFront;
            updatedCard.front = action.newBack;
            newCards = currentStack.cards.filter(card => {
                if (card.id === action.cardId) {
                    return updatedCard;
                } else {
                    return card;
                }
            });
            updatedStack = {
                ...currentStack,
                cards: newCards
            }
            
        case actionTypes.CHANGE_STACK:
            return {
                ...state,
                currentStackId: action.stackId
            }
    }
    return state;
}

export default cardsReducer;
