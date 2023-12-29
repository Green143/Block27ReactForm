
import { useState } from "react"


export default function Authenticate({token, setToken}) {

    const [accessMessage,setAccessMessage] = useState(null);

    const [error, setError] = useState(null);

    const [result, setResult] = useState(null)

    async function handleClick(){
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method:"GET",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
              }

            })
                const results = await response.json();
                console.log(results)
                setAccessMessage(results.message)

        } catch (error){
            setError(error.message);
        }
        
    }
    

    return(
        <div>
        <h2>Authenticate</h2>
        {accessMessage && <p>{accessMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      
</div>
);
}
  

 