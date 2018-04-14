import React from 'react';

const addDeleteButtons = (props) => {
    return (
        <span>
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
        </span>
    );
}

const flashcardRow = (props) => {
    return (
        <div className='flashcardTable__row'>
            <span className='flashcardTable__row--content--front'>{props.frontText}</span>
            <span className='flashcardTable__row--content--back'>{props.backText}</span>
            { ( props.user.isLoggedIn && props.stack.owner === props.user._id )  ? addDeleteButtons(props) : null }
        </div>
    );
}

export default flashcardRow;
