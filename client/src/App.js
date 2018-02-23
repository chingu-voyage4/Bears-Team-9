import React, { Component } from 'react';

class App extends Component {

  componentDidMount(){
    fetch( '/api/categories' )
        .then( res => res.json() )
        .then( res => console.log( res ) )
  }
  render() {
    return (
      <div>
        Content goes here
      </div>
    );
  }
}

export default App;
