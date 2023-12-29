import SignUpForm from './Components/SignUpForm'
import Authenticate from './Components/Authenticate'
import { useState } from 'react';

import './App.css'

export default function App() {
  const [token, setToken] = useState(null)

  return (
      <>
       
        <SignUpForm token ={token} setToken={setToken}/>
        
        <Authenticate token ={token} setToken={setToken}/>
      </>
  );
}


