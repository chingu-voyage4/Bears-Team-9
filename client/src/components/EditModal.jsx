import React, { Component } from 'react';

class EditModal extends Component {
    state = {
        currentFront: this.props.currentFront,
        currentBack: this.props.currentBack,
        id: this.props.cardId
    }

    onChangeHandlerFront = (e) => {
        this.setState({
            currentFront: e.target.value
        });
    }

    onChangeHandlerBack = (e) => {
        this.setState({
            currentBack: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div
                    onClick={this.props.closeModal}
                    className="modal-background">
                </div>
                <div className="modal">
                    <div className="modal__front">
                        <div className="modal--titles">Card Front</div>
                        <textarea
                            className="modal__front--textarea"
                            onChange={this.onChangeHandlerFront}
                            value={this.state.currentFront}
                            name=""
                            id="">
                        </textarea>
                    </div>
                    <div className="modal__back">
                        <div className="modal--titles">Card Back</div>
                        <textarea
                            className="modal__back--textarea"
                            onChange={this.onChangeHandlerBack}
                            value={this.state.currentBack}
                            name=""
                            id="">
                        </textarea>
                    </div>
                    <div className="btn__group--modal">
                        <button
                            onClick={() => this.props.updateCard(this.state.currentFront, this.state.currentBack)}
                            className="btn btn--modal">
                            Update Card
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

export default EditModal;