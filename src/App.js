import React, { useState } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history'

import Home from './screens/Home'
import Welcome from './screens/Welcome'
import swal from 'sweetalert';

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  //Handle Email Input Change
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  //Handle Password Input Change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  //Handle User Log in
  const handleLogin = () => {

    const userData = {
      email: email,
      password: password
    }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 401) {
          swal("Login Failed", "Email and Password combination is incorrect.", "error");
        }
        else {
          console.log(data.user)
          setUser(data.user)
          setEmail('')
          setPassword('')
          history.push("/home")
        }
      })
  }



  return (
    <Router history={history}>
      <Route exact path="/" render={() => <Welcome handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleLogin={handleLogin} email={email} password={password} />} />
      <Route exact path="/home" render={() => <Home user={user} />} />
    </Router>
  );
}

export default App;
