import React, { Component } from 'react';
import Stack from '../components/Stack';
import Loader from '../components/Loader';
import AddStackModal from '../components/AddStackModal';
import Navbar from '../components/Navbar';
import StudyModal from '../components/StudyModal';

class Dashboard extends Component {
    state = {
        modalShow: false,
        studyModalShow: false,
        showFixedNav: false,
        intervalId: 0
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
            studyModalShow: false
        })
    }

    studyHandler = () => {
        this.setState({
            studyModalShow: true
        })
    }

    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
      window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
      const y = Math.round(window.pageYOffset);
      if (y >= 100) {
        this.setState({ showFixedNav: true });
      } else {
        this.setState({ showFixedNav: false });
      }
    }

    //const scrollStepInPx = 50;
    //const delayInMs = 16.66;

    scrollStep = () => {
      if (window.pageYOffset === 0){
        clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - 100);
    }

    scrollToTop = () => {
      let intervalId = setInterval(this.scrollStep.bind(this), 20);
      this.setState({ intervalId: intervalId });
    }

    render () {
        const stateProps = this.props.store.getState().cards;
        const user = this.props.store.getState().user;
        let stacks = <Loader />;
        let modal = null;
        let studyModal = null;
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
                        studyClicked={() => this.studyHandler()}
                        store={this.props.store}
                        key={stack._id}
                        id={stack._id}
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
        if (this.state.studyModalShow) {
            studyModal = <StudyModal
                start={true}
                text="Do you want to start a study session?"
                closeModal={ this.closeModalHandler } />
        }

        return (
            <div>
                <Navbar store={ this.props.store } studyMode={false} />
                <div className="dashboard">
                    { studyModal }
                    { modal }
                    { stacks }
                </div>
                <div className={this.state.showFixedNav === false ? "display-none" : "fixed-nav"}
                    onClick={() => { this.scrollToTop(); }}>
                    <i className="fas fa-chevron-up arrow-up"></i>
                </div>
            </div>
        );
    }
}

export default Dashboard;
