
import { useState } from "react"

export default function SignUpForm({token, setToken}) {

    const {userName, setUserName}= useState ("")
    
    const {password, setPassword}= useState ("")

    const {error, setError} = useState (null)

async function handleSubmit(event) {
        event.preventDefault()
        //console.log("hello")
        try{
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
            { 
                method: "POST", 
                headers: {
                    "Content-Type" : " application/json"
                },
                    body: JSON.stringify({ 
                        username: {username}, 
                        password: {password}
                })
            })
            const result= await response.json();
            setToken(result.token);
            console.log(result)
        }catch(error){
            setError(error.message);
    }



}
    return (
        <div> 
            <h2>Sign Up!</h2>
                <form onSubmit={(handleSubmit)}>
                    <label>
                       Username:
                         <input value= {userName} onChange={(event)=>{
                            setUserName(event.target.value)
                         }}
                        />
                        <br />
                        Password:
                        <input value ={password} onChange={(event)=>{
                            setPassword(event.target.value)
                         }}
                         />
                         <br />
                    </label>
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}
   
   

