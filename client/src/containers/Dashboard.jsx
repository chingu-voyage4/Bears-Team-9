import React, { Component } from 'react';
import Stack from '../components/Stack';
import Loader from '../components/Loader';
import AddStackModal from '../components/AddStackModal';
import Navbar from '../components/Navbar';

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
        const user = this.props.store.getState().user;
        let stacks = <Loader />;
        let modal = null;
        const addStackButton = (
            <button
                onClick={ () => this.addStackHandler() } 
                className='btn btn--add-stack'>
                Add Stack
            </button>
        )
        if (stateProps.status === 'success') {
            const stackContent = stateProps.stacks.map((stack, id) => {
                return (
                    <Stack
                        store={this.props.store}
                        key={stack._id}
                        id={stack._id}
                        // key={id}
                        name={stack.categoryName}
                        count={stack.cards.length} />
                );
            })
             
             stacks = (
                <div>
                    <div>
                       { user.isLoggedIn ? addStackButton : null  }
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
            <div>
                <Navbar store={ this.props.store } studyMode={false} />
                <div className="dashboard">
                    { modal }
                    { stacks }
                </div>
            </div>
        );
    }
}

export default Dashboard;
