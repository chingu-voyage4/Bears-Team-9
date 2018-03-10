import React, { Component } from 'react';
import Stack from '../components/Stack';
import Loader from '../components/Loader';
import AddStackModal from '../components/AddStackModal';

class Dashboard extends Component {
    state = {
        modalShow: false
    }
//     componentDidMount() {
//         fetch('/api/category/5a9f238bb1046f575107c377', {
//             method: 'DELETE',
//             body: JSON.stringify({
//                 cardId: "5aa1a9bafc19ee2a1e8cd322"
//             })     
//         })
//             .then(res => res.json())
//             .then(cats => console.log(cats))
//             .catch(err => console.log(err));
// }
    addStackHandler = () => {
        this.setState({
            modalShow: true
        }); 
    }

    closeModalHandler = () => {
        this.setState({
            modalShow: false,
        })
    }

    render () {
        const stateProps = this.props.store.getState().cards;
        let stacks = <Loader />;
        let modal = null;
        if (stateProps.status === 'success') {
            const stackContent = stateProps.stacks.map((stack, id) => {
                return (
                    <Stack
                        key={id}
                        name={stack.categoryName}
                        count={stack.cards.length} />
                );
            })
            stacks = (
                <div>
                    <div>
                        <button
                            onClick={ () => this.addStackHandler() } 
                            className='btn btn--add-stack'>
                            Add Stack
                        </button>
                    </div>
                    {stackContent}
                </div>
            );
        }
        if (this.state.modalShow) {
            modal = <AddStackModal
                closeModal={ this.closeModalHandler }
                store={ this.props.store } />;
        }
        
        return (
            <div className="dashboard">
                { modal }
                { stacks }
            </div>
        );
    }
}

export default Dashboard;
