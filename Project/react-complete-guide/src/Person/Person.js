import React from 'react';

const person = (props) => {
    return(
        <div>
            <h4> {props.name} : {props.age}</h4>
            <p> {props.children}</p>
            <p> The journey start before  {props.age} year </p>
            <br/>
        </div> 
    )
}

export default person;