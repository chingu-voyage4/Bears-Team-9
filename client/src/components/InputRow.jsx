import React from 'react';

const inputRow = (props) => {
    return (
        <div className='flashcardTable__row'>
            <span className='flashcardTable__row--content--front'>
                <input type="text" onChange={props.textChangeFront} value={props.newFront} placeholder='New Question' />
            </span>
            <span className='flashcardTable__row--content--back'>
                <input type="text" onChange={props.textChangeBack} value={props.newBack} placeholder='New Answer' />
            </span>
        </div>
    );
}

export default inputRow;