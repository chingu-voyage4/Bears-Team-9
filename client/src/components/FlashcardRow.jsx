import React from 'react';

const flashcardRow = (props) => {
    return (
        <div
            className='flashcardTable__row'>
            <span className='flashcardTable__row--content--front'>{props.frontText}</span>
            <span className='flashcardTable__row--content--back'>{props.backText}</span>
            <button
                onClick={props.delete}
                className='btn btn-row btn-row-delete'>
                <i class="far fa-trash-alt"></i>
            </button>
            <button
                onClick={props.edit}
                className='btn btn-row btn-row-edit'>
                <i class="far fa-edit"></i>
            </button>
        </div>
    );
}

export default flashcardRow;