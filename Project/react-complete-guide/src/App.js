import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
        persons: [
            { name: "Tousif", age: "26" },
            { name: "Shantanu da", age: "31" },
            { name: "Shohel", age: "25" }
        ]
    }

    swithNameHandler = () => {
        this.setState(
            {
                persons: [
                    { name: "Tousif Ahammad", age: "27" },
                    { name: "Shantanu Mondal", age: "37" },
                    { name: "Shohel Akhtar", age: "27" }
                ]
            }
        )
    }

    autoNameChangeHandler = (event) => {
        this.setState(
            {
                persons: [
                    { name: event.target.value, age: "27" },
                    { name: event.target.value, age: "37" },
                    { name: event.target.value, age: "27" }
                ]
            }
        )
    }

    render() {
        return (
            <div className="App">
                <h1>Hello Tousif. Welcome to React</h1>

                {/* <h2>Using props</h2>
                <Person name="Tousif" age="26"> I am a developer </Person>
                <Person name="Shantanu da" age="31" />
                <Person name="Shohel" age="25" /> */}

                <h2>Using props with state</h2>

                <button onClick={this.swithNameHandler}> Switch Name </button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    change_name={this.swithNameHandler}
                    on_change={this.autoNameChangeHandler}>
                    I am a developer
                </Person>

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    change_name={this.swithNameHandler}
                    on_change={this.autoNameChangeHandler}>
                </Person> />

                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    change_name={this.swithNameHandler}
                    on_change={this.autoNameChangeHandler}>
                </Person>/>

            </div>
        );
    }
}

export default App;
