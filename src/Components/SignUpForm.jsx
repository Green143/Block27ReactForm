
import { useState } from "react"




export default function SignUpForm() {
    const {userName, setUserName}= useState ("")
    
    const {password, setPassword}= useState ("")

    const {error, setError} = useState (null)

async function handleSubmit(event) {
        event.preventDefault()
        //console.log("hello")
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
                        <br /><br />
                         <input value ={error} onChange={(event)=>{   //error space
                            setError(event.target.value)
                         }}
                         />
                         <br />
                    </label>
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}
   
   

