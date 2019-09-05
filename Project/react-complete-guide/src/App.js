import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello Tousif. Welcome to React</h1>
          <Person name = "Tousif" age= "26"> I am a developer </Person>
          <Person name = "Shantanu da" age= "31"/>
          <Person name = "Shohel" age= "25"/>
      </div>
    );
  }
}

export default App;
