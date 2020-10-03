import React, { useState } from "react"
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Styles for the Material UI Modal
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #85bb65',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const SignUpForm = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Handles Modal Open
    const handleOpen = () => {
        setOpen(true);
    };

    //Handles Modal Close
    const handleClose = () => {
        setOpen(false);
    };

    //Handle Name Input Change
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    //Handle Email Input Change
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    //Handle Password Input Change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    //Handles New User Sign Up 
    const handleSignUp = () => {
        if (name === "" || email === "" || password === "") {
            toast.dark("⚠️ Please fill out all fields", {
                autoClose: 3000,
                pauseOnHover: false
            })
        }
        else {
            console.log(name, email, password)
            toast.dark("Creating Account...", {
                autoClose: 3000,
                pauseOnHover: false
            })
            const newUser = {
                name: name,
                email: email,
                password: password
            }
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === '401') {
                        toast.dark("⚠️ Creating Account Failed...Please Try Again", {
                            autoClose: 3000,
                            pauseOnHover: false
                        })
                    }
                    else {
                        setOpen(false)
                        setName("")
                        setEmail("")
                        setPassword("")
                        setTimeout(() => {
                            toast.success("Account Created!", {
                                autoClose: 3000,
                                pauseOnHover: false
                            })
                        }, 1000)
                        setTimeout(() => {
                            toast.success("You Can Now Log In!", {
                                autoClose: 4000,
                                pauseOnHover: false
                            })
                        }, 2000)
                    }
                })
        }
    }

    return (
        <div>
            <Button variant="contained" color='primary' onClick={handleOpen}>Create One Today!</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form noValidate autoComplete="off" className='sign-up-form'>
                            <p>Please complete each field below</p>
                            <TextField id="standard-basic" label="Name" required value={name} onChange={handleNameChange} /><br />
                            <TextField id="standard-basic" label="Email" required value={email} onChange={handleEmailChange} /><br />
                            <TextField id="standard-basic" label="Password" required value={password} onChange={handlePasswordChange} /><br />
                            <Button variant="contained" color="primary" id='login-form-button' onClick={handleSignUp}>Create Account</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
            <ToastContainer />
        </div>
    )
}


export default SignUpForm