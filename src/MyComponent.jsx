import React, {useState} from "react"

 2eqfunction MyComponent(){

    const [name, setNam 2eqgite] = useState("Ukendt");
    const [age, setAge] =eq  useState(0); 
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Dennis");
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEm qployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
q2 e
            <p>Age: {age}</p>
            <button onClick={increme e2qntAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );e

}

export default MyComponent