import * as actionTypes from '../actions/actions';

// const initialState = {
//     stacks: [
//         {
//             category: 'front end',
//             cards: [
//                 {
//                     id: 1,
//                     front: 'What is HTTPS',
//                     back: 'The "S" in HTTPS stands for secure. HTTPS ensures an encrypted connection to whatever site is being visited.'
//                 },
//                 {
//                     id: 2,
//                     front: 'What is Sass',
//                     back: 'Sass is an extension of CSS that allows for more complex and organized stylesheets.'
//                 },
//                 {
//                     id: 3,
//                     front: 'is react a library or a framework',
//                     back: 'React is technically a library, but can be used with extension such as Redux to turn it into more of a framework.'
//                 }
//             ],
//             id: 'stack_1'
//         },
//         {
//             category: 'back end',
//             cards: [
//                 {
//                     id: 1,
//                     front: 'Which side does the back end deal with?',
//                     back: 'the client side'
//                 },
//                 {
//                     id: 2,
//                     front: 'what is state in redux?',
//                     back: 'it stores global variables for a react app'
//                 },
//                 {
//                     id: 3,
//                     front: 'what is the back end language for django apps?',
//                     back: 'python'
//                 }
//             ],
//             id: 'stack_2'
//         },
//         {
//             category: 'history',
//             cards: [
//                 {
//                     id: 1,
//                     front: 'Who was the first American president?',
//                     back: 'George Washington'
//                 },
//                 {
//                     id: 2,
//                     front: "What was Alexander Hamilton's role as a founding father?",
//                     back: 'He fought under Washington and was the first treasury secretary'
//                 },
//                 {
//                     id: 3,
//                     front: 'Which country was the first to send a man into space?',
//                     back: 'Soviet Union'
//                 }
//             ],
//             id: 'stack_3'
//         }
//     ],
//     currentStackId: 'stack_3'
// }

const initialState = {
    status: '',
    stacks: [],
    currentStackId: '5a9f238bb1046f575107c373'
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
            return {
                ...state,
                status: action.status,
            }
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                status: action.status,
                stacks: action.stacks
            }
        case actionTypes.ADD_CARD:
            return {
                ...state,
                stacks: action.stacks
            }
        case actionTypes.DELETE_CARD:
            return {
                ...state,
                stacks: action.stacks
            }
        case actionTypes.UPDATE_CARD:
            return {
                ...state,
                stacks: action.stacks
            }
        case actionTypes.CHANGE_STACK:
            return {
                ...state,
                currentStackId: action.stackId
            }
        default:
            return state;
    }
}

export default cardsReducer;
