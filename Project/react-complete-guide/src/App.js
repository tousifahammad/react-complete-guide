import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import Login from './Login/Login.js'
import Post from './Login/Post.js'
import axios from 'axios'

class App extends Component {

    state = {
        persons: [
            { name: "Tousif", age: "26" },
            { name: "Shantanu da", age: "31" },
            { name: "Shohel", age: "25" }
        ],

        username: "",
        password: "",
        posts: []
    }

    swithNameHandler = (my_name) => {
        this.setState(
            {
                persons: [
                    { name: my_name, age: "27" },
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

    setNameFromInput = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    setPasswordFromInput = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }



    render() {

        const posts = this.state.posts.map(post => {
            return <Post title={post.title}> </Post>
        })

        return (
            <div className="App">
                <h1>Hello Tousif. <br /> Welcome to React</h1>

                <div>
                    <p> {this.state.username}</p>
                    <p> {this.state.password}</p>

                    <Login
                        on_username_change={this.setNameFromInput}
                        on_password_change={this.setPasswordFromInput}
                        on_login_clicked={this.LoginClickHandler}>
                    </Login>

                    {posts}

                </div>

                <div>

                    {/* <h2>Using props</h2>
                <Person name="Tousif" age="26"> I am a developer </Person>
                <Person name="Shantanu da" age="31" />
                <Person name="Shohel" age="25" /> */}
                    {/* 
                    <h2>Using props with state</h2>

                    <button onClick={this.swithNameHandler.bind(this, "Tousif Ahammad")}> Reset Names </button>

                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        //change_name={this.swithNameHandler}
                        on_change={this.autoNameChangeHandler}>
                        I am a developer
                </Person>

                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        //change_name={this.swithNameHandler}
                        on_change={this.autoNameChangeHandler}>
                    </Person>

                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        //change_name={this.swithNameHandler}
                        on_change={this.autoNameChangeHandler}>
                    </Person> */}

                </div>

            </div>
        );
    }


    LoginClickHandler = () => {

        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(response => {
                this.setState({
                    posts: response.data
                })

                console.log(response);
            })

            .catch(error => {
                console.log(error);
            });
    }


    // LoginClickHandler = () => {

    //     const params = {
    //         mobile_num: '9300086662',
    //         password: '123456'
    //     }

    //     axios.post('https://steelhaat.com/service/index.php/api/user/login', params)

    //         .then(function (response) {
    //             console.log(response);
    //         })

    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


}

export default App;
