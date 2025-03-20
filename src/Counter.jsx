import react, {useState} from 'react'

function Counter(){

     const [name, setName] = useState("Ukendt");
        const [age, setAge] = useState(0); 
        const [isEmployed, setIsEmployed] = useState(false);
    
        const updateName = () => {
            setName("Dennis");
        }
    
        const incrementAge = () => {
            setAge(age + 2);
        }
    
        const toggleEmployedStatus = () => {
            setIsEmployed(!isEmployed);
        }
    
        return(
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
    
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
    
                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>
        );

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>

        </div>
    );

}

export default Counter