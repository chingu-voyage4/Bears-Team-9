import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';
import EditPage from './containers/EditPage';
import PreferencePage from './containers/PreferencePage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {

  // componentDidMount(){
  //   fetch( '/api/category/5a94841650bd003428b4d2a4' , {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',   // actual category id
  //      },
  //       body: JSON.stringify( 
  //       {'updatedCards': [
  //         { 'id': '5a94841650bd003428b4d2a3', 'front': 'Hi', 'back': 'Angular'},
  //         { 'id': '5a94841650bd003428b4d2a2', 'front': '<script></script>', 'back': 'Testing script'}
  //       ] }
          
  //       )
  //   })
  //       .then( res => res.json() ) 
  //       .then( res => console.log( res ))
  //       .catch( err => console.log( err ) )
  // }
  
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route path='/edit' component={ EditPage } />
          <Route path='/dashboard' component={ Dashboard } /> 
          <Route path='/preferences' component={ PreferencePage } />
          <Redirect from='/' to='/dashboard' />
        </Switch>
      </div>
    );
  }
}

export default App;
