import React, { Component } from 'react';
import './App.css';
import Card from './component/Card';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
           <div className="card">
               <Card />
               <Card />
               </div>
        </div>
      </div>
    );
  }
}

export default App;
