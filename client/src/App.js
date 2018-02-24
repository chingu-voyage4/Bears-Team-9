import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';

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
        <Dashboard />
      </div>
    );
  }
}

export default App;
