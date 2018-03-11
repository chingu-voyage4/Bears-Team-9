import React, { Component } from 'react';
import DeleteCategory from '../actions/DeleteCategory';
import ChangeStack from '../actions/ChangeStack';
class DeleteCategoryModal extends Component {
    deleteCategoryHandler = () => {
        const categoryId = this.props.store.getState().cards.currentStackId
        this.props.store.dispatch(ChangeStack(''));
        this.props.store.dispatch(
            DeleteCategory(categoryId)
        );
        this.props.closeModal();
    }

    render() {
        const stateProps = this.props.store.getState().cards;
        const currentCategoryName = stateProps.stacks.filter(stack => stack._id === stateProps.currentStackId)[0].categoryName;
        return (
            <div>
                <div
                    onClick={this.props.closeModal}
                    className="modal-background">
                </div>
                <div className="modal modal__add-stack">
                    <div className="">
                        <div className="modal__add-stack--titles">Are you sure you want to delete this stack: <span className="modal__category-title">{currentCategoryName}</span></div>
                    </div>
                    <div className="btn__group--modal">
                        <button
                            onClick={this.deleteCategoryHandler}
                            className="btn btn--modal">
                            Confirm
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

export default DeleteCategoryModal;