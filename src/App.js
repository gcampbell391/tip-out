import React, { useState } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history'

import Home from './screens/Home'
import Welcome from './screens/Welcome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = require('store2')


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
          toast.dark("⚠️ Login Failed...", {
            autoClose: 3000,
            pauseOnHover: false
          })
        }
        else {
          console.log(data.user)
          store('user', data.user)
          setEmail('')
          setPassword('')
          toast.success("Login Successful", {
            autoClose: 3000,
            pauseOnHover: false
          })
        }
      })
  }


  if (store.get('user') !== null) {
    history.push("/home")
  }
  else {
    history.push("/")
  }
  return (
    <Router history={history}>
      <Route exact path="/" render={() => <Welcome handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleLogin={handleLogin} email={email} password={password} />} />
      <Route exact path="/home" render={() => <Home user={store.get('user')} />} />
      <ToastContainer />
    </Router>
  );
}

export default App;
