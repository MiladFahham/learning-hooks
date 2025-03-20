import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

    [name, setName] = useState("Ukendt");
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
)
