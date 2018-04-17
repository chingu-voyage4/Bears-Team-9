import React from 'react';

const inputRow = (props) => {
    return (
        <tr className='flashcardTable__row'>
            <td className='flashcardTable__row--content--front' col-span='1'>
                <input type="text" onChange={props.textChangeFront} value={props.newFront} placeholder='New Question' />
            </td>
            <td className='flashcardTable__row--content--back'  col-span='2'>
                <input type="text" onChange={props.textChangeBack} value={props.newBack} placeholder='New Answer' />
            </td>
        </tr>
    );
}

export default inputRow;
