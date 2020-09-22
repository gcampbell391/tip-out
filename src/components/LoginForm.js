import React from "react"
import { TextField, Button } from '@material-ui/core';



const LoginForm = (props) => {

    return (
        <div className='login-form-container'>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Email" required value={props.email} onChange={props.handleEmailChange} /><br />
                <TextField id="standard-basic" label="Password" required value={props.password} onChange={props.handlePasswordChange} /><br />
                <Button variant="contained" color="primary" id='login-form-button' onClick={props.handleLogin}>Login</Button>
            </form>
        </div>
    )
}

export default LoginForm