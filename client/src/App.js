import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';
import EditPage from './containers/EditPage';
import PreferencePage from './containers/PreferencePage';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    fetch( '/api/categories' )
        .then( res => res.json() )
        .then( res => console.log( res ) )
  }
  
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route path='/edit' component={ EditPage } />
          <Route path='/dashboard' component={ Dashboard } /> 
          <Route path='/preferences' component={ PreferencePage } />
        </Switch>
      </div>
    );
  }
}

export default App;
