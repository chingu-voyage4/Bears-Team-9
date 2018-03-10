import React, { Component } from 'react';
import AddCategory from '../actions/AddCategory';

class AddStackModal extends Component {
    state = {
        newStackTitle: ''
    }

    onChangeHandlerTitle = (e) => {
        this.setState({
            newStackTitle: e.target.value
        });
    }

    addNewCategoryHandler = () => {
        this.props.store.dispatch(
            AddCategory(this.state.newStackTitle)
        );
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <div
                    onClick={this.props.closeModal}
                    className="modal-background">
                </div>
                <div className="modal modal__add-stack">
                    <div className="">
                        <div className="modal__add-stack--titles">New Stack Title:</div>
                        <input 
                            onChange={this.onChangeHandlerTitle}
                            className="modal__add-stack--input"
                            type='text' 
                            value={this.state.newStackTitle} />
                    </div>
                    <div className="btn__group--modal">
                        <button
                            onClick={ this.addNewCategoryHandler }
                            className="btn btn--modal">
                            Add Stack
                        </button>
                        <button
                            onClick={this.props.closeModal}
                            className="btn btn--modal">
                            Cancel
                        </button>
                    </div>

                </div>

            </div>

        );
    }
}

export default AddStackModal;