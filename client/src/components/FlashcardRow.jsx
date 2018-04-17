import React from 'react';

const addDeleteButtons = (props) => {
    return (
        <td>
            <button
                onClick={props.delete}
                className='btn btn-row btn-row-delete'>
                <i className="far fa-trash-alt"></i>
            </button>
            <button
                onClick={props.edit}
                className='btn btn-row btn-row-edit'>
                <i className="far fa-edit"></i>
            </button>
        </td>
    );
}

const flashcardRow = (props) => {
    return (
        <tr className='flashcardTable__row'>
            <td className='flashcardTable__row--content--front'>{props.frontText}</td>
            <td className='flashcardTable__row--content--back'>{props.backText}</td>

            { ( props.user.isLoggedIn && props.stack.owner === props.user._id )  ? addDeleteButtons(props) : null }
        </tr>
    );
}

export default flashcardRow;
