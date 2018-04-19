import React from 'react';

const addDeleteButtons = (props) => {
    return (
        <div className="flashcardTable__row--content nested-grid">
          {props.backText}
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
        </div>
    );
}

const flashcardRow = (props) => {
  // parent div w className flashcardTable__row
    return (
        <React.Fragment>
            <div className='flashcardTable__row--content'>{props.frontText}</div>

            { ( props.user.isLoggedIn && props.stack.owner === props.user._id )  ? addDeleteButtons(props) :
                <div className='flashcardTable__row--content'>
                  {props.backText}
                </div>
            }
        </React.Fragment>
    );
}

export default flashcardRow;
