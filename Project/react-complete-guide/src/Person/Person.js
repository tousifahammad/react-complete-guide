import React from 'react';

const person = (props) => {
    return(
        <div>
            <h1> {props.name} : {props.age}</h1>
            <h1> {props.children}</h1>
            <p> The journey start before  {Math.random()} year </p>

        </div> 
    )
}

export default person;