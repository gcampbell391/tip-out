import React, { useState } from "react"
import { TextField, Button } from '@material-ui/core';


const LoginForm = () => {

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
                console.log(data)
            })
        setEmail('')
        setPassword('')
    }

    return (
        <div className='login-form-container'>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Email" required value={email} onChange={handleEmailChange} /><br />
                <TextField id="standard-basic" label="Password" required value={password} onChange={handlePasswordChange} /><br />
                <Button variant="contained" color="primary" id='login-form-button' onClick={handleLogin}>Login</Button>
            </form>
        </div>
    )
}

export default LoginForm