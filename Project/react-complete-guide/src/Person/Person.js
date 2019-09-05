import React from 'react';

const person = (props) => {
    return (
        <div>
            <h4> {props.name} : {props.age}</h4>
            <p> {props.children}</p>
            <p> The journey start before  {props.age} year </p>
            <button onClick = {props.change_name}> Change name</button>
            <input type = "text" onChange = {props.on_change}></input>
            <br />
        </div>
    )
}

export default person;