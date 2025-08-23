import React, { useState } from "react";

function MyComponent() {
    
    const [name, setName] = useState(0);
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Mangoose");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set Name</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>)

}

export default MyComponent;