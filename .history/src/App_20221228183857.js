import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    this.state={
      name: "Baskar",
    };
    return<h1>{this.state.name}</h1>;
  }
}

export default App;
