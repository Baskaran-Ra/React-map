import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    this.state=[
      {name:"Baskar",age:"24"},
      {name:"abarm",age:"24"},
      {name:"sabeek",age:"24"},
    ]
    return<h1>{this.state.name}</h1>;
  }
}

export default App;
