import SignUpForm from './Components/SignUpForm'
import Authenticate from './Components/Authenticate'
import { useState } from 'react';

import './App.css'

function App() {
  const [token, setToken] = useState(null)

  return (
      <>
        <Authenticate token ={token} setToken={setToken}/>
          <h1></h1>
      
        <SignUpForm token ={token} setToken={setToken}/>
      </>
  );
}
export default App

