import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    this.state=[
      {name:"Baskar",age:"24"},
      {name:"Pabarm",age:"24"},
      {name:"Sabeek",age:"24"},
    ]
    return(
      <div>
        {this.state.map((userInfo) =>{
          return(
            <div>
              <h1>{userInfo.name}</h1>;
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
