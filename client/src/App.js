import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';
import EditPage from './containers/EditPage';
// import PreferencePage from './containers/PreferencePage';
import { Switch, Route, Redirect } from 'react-router-dom';

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
    


  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          {/* <Route path='/edit' component={ EditPage } /> */}
          <Route path='/edit' render={() => <EditPage store={ this.props.store } />} />
          <Route path='/dashboard' render={() => <Dashboard store={ this.props.store } />} />
          
          {/* <Route path='/preferences' component={ PreferencePage } /> */}
          <Redirect from='/' to='/dashboard' />
        </Switch>
      </div>
    );
  }
}

export default App;
