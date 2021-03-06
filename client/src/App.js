import React, { Component } from 'react';
import Dashboard from './containers/Dashboard';
import EditPage from './containers/EditPage';
import StudyPage from './containers/StudyPage';
import LandingPage from './components/LandingPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import FetchState from './actions/FetchState';
import VerifyAuth from './components/VerifyAuth';
import FetchUser from './actions/FetchUser';
class App extends Component {

  // componentDidMount(){
  //   fetch( '/api/categories' , {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json',   // actual category id
  //       'id': '5a9886bb4164834e2560dd0a'
  //      },
  //       body: JSON.stringify(
  //       {
  //           newCategory: {
  //             categoryName: 'New Category',
  //             cards: [
  //               { front: 'What is HTTPS?', back: 'An Internet protocol' },
  //               { front: 'What is SASS?', back: 'A CSS preprocessor' }
  //             ]
  //           }
  //         }
  //       )
  //   })
  //       .then( res => res.json() )
  //       .then( res => console.log( res ))
  //       .catch( err => console.log( err ) )
  //   }

  // componentDidMount(){
  //   fetch( '/api/category/5a9f238bb1046f575107c377' , {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json',
  //      },
  //       body: JSON.stringify(
  //         { cardId : '5aa1ba7ecc5cde4e7b4b70d0'}
  //       )
  //   })
  //       .then( res => res.json() )
  //       .then( res => console.log( res ))
  //       .catch( err => console.log( err ) )
  // }

  componentWillMount = () => {
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(FetchState());
    this.props.store.dispatch(FetchUser());
  }


  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/edit' render={() => <EditPage store={ this.props.store } />} />
          <Route exact path='/dashboard' render={() => <Dashboard store={ this.props.store } />} />
          <Route exact path='/study' render={ () => <StudyPage store={ this.props.store }/> } />
          <Route exact path='/verify' component={ VerifyAuth } />
          <Route exact path='/' render={() => <LandingPage store={this.props.store} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
