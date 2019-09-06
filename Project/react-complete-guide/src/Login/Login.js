import React from 'react';

const login = (props) => {
    return (
        <div>
            <h2> LOGIN </h2>

            <input type = "text" placeholder = "Enter Username"  onChange = {props.on_username_change}></input>      <br/><br/>
            
            <input type = "text" placeholder = "Enter Password" type = "password" onChange = {props.on_password_change}></input>      <br/><br/>
            

            <button onClick = {props.on_login_clicked}> Login </button> 

        
        </div>
    )
}

export default login;