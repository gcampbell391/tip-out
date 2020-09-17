import React from "react"
import { TextField, Button } from '@material-ui/core';


const LoginForm = () => {

    return (
        <div className='login-form-container'>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Email" required /><br />
                <TextField id="standard-basic" label="Password" required /><br />
                <Button variant="contained" color="primary" id='login-form-button'>Login</Button>
            </form>
        </div>
    )
}

export default LoginForm