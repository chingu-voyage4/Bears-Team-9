import React from 'react';

const inputRow = (props) => {
    return (
        <React.Fragment>
            <div className='flashcardTable__row--content'>
                <input type="text" onChange={props.textChangeFront} value={props.newFront}
                  placeholder='New Question' className="qn-input" />
            </div>
            <div className='flashcardTable__row--content'>
                <input type="text" onChange={props.textChangeBack} value={props.newBack}
                  placeholder='New Answer' className="ans-input" />
            </div>
        </React.Fragment>
    );
}

export default inputRow;
