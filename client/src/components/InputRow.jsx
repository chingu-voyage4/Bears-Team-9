import React from 'react';

const inputRow = (props) => {
    return (
        <div className="textarea-div">
            <textarea name="qn" type="text" rows="1" onChange={props.textChangeFront}
              placeholder='New Question' value={props.newFront}
              className="textarea qn-textarea"></textarea>

            <textarea name="ans" type="text" rows="1" onChange={props.textChangeBack}
              placeholder='New Answer'  value={props.newBack}
              className="textarea ans-textarea"></textarea>
        </div>
    );
}

export default inputRow;
