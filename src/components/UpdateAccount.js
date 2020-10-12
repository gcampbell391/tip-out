import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import history from '../history';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import UpdateNameForm from './UpdateNameForm';
import UpdateEmailForm from './UpdateEmailForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdatePasswordForm from './UpdatePasswordForm';
import UpdateDeleteForm from './UpdateDeleteForm';
const store = require('store2')



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

const UpdateAccount = (props) => {
    const classes = useStyles();
    const [updateNameOpen, setUpdateNameOpen] = useState(false)
    const [updateEmailOpen, setUpdateEmailOpen] = useState(false)
    const [updatePasswordOpen, setUpdatePasswordOpen] = useState(false)
    const [updateDeleteOpen, setUpdateDeleteOpen] = useState(false)



    //Handles User Update Name
    const submitNewName = (newName) => {
        let userID = store.get('user').id
        const updatedUser = {
            id: userID,
            name: newName
        }
        fetch(`http://localhost:3000/update_name`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 404) {
                    return toast.dark(`Error Occurred..Please Try Again!`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                }
                else {
                    toast.dark(`Your Name has been Updated!`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                    setUpdateNameOpen(false)
                    store.remove('user')
                    store('user', data.user)
                }
            })
    }

    //Handles User Update Email
    const submitNewEmail = (newEmail) => {
        let userID = store.get('user').id
        const updatedUser = {
            id: userID,
            email: newEmail
        }
        if (!newEmail.includes('@') === true || !newEmail.includes('.com') === true) {
            return toast.dark(`Please Enter a Valid Email!`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        fetch(`http://localhost:3000/update_email`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 404) {
                    return toast.dark(`Error Occurred..Please Try Again!`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                }
                else {
                    toast.dark(`Your Email has been Updated!`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                    setUpdateEmailOpen(false)
                    store.remove('user')
                    store('user', data.user)
                }
            })
    }

    //Handles User Update Password
    const submitNewPassword = (oldPassword, newPassword) => {
        console.log(oldPassword, newPassword)
        let userID = store.get('user').id
        const updatedUser = {
            id: userID,
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        fetch(`http://localhost:3000/update_password`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    return toast.dark(`${data.error}`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                }
                else {
                    toast.dark(`Password Was Successfully Updated!`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                    setUpdatePasswordOpen(false)
                    store.remove('user')
                    store('user', data.user)
                }
            })
    }

    //Handles User Delete Account
    const deleteAccount = () => {
        console.log("Delete Account")
        let userID = store.get('user').id
        const updatedUser = {
            id: userID,
        }
        fetch(`http://localhost:3000/delete_account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    return toast.dark(`${data.error}`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                }
                else {
                    toast.dark(`${data.message}`, {
                        autoClose: 2000,
                        pauseOnHover: false
                    })
                    store.remove('user')
                    history.push("/")
                }
            })
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <div className='single-shift-details'>
                            <div className='update-account-modal-update-name-container'>
                                <Button variant="contained" color="primary" className='update-account-buttons' onClick={() => setUpdateNameOpen(true)}>Update Name</Button>
                                <UpdateNameForm open={updateNameOpen} handleClose={() => setUpdateNameOpen(false)} submitNewName={submitNewName} />
                            </div>
                            <div className='update-account-modal-update-email-container'>
                                <Button variant="contained" color="primary" className='update-account-buttons' onClick={() => setUpdateEmailOpen(true)}>Update Email</Button>
                                <UpdateEmailForm open={updateEmailOpen} handleClose={() => setUpdateEmailOpen(false)} submitNewEmail={submitNewEmail} />
                            </div>
                            <div className='update-account-modal-update-password-container'>
                                <Button variant="contained" color="primary" className='update-account-buttons' onClick={() => setUpdatePasswordOpen(true)}>Update Password</Button>
                                <UpdatePasswordForm open={updatePasswordOpen} handleClose={() => setUpdatePasswordOpen(false)} submitNewPassword={submitNewPassword} />
                            </div>
                            <div className='update-account-modal-delete-account-container'>
                                <Button variant="contained" color="secondary" className='update-account-buttons' onClick={() => setUpdateDeleteOpen(true)}>Delete Account</Button>
                                <UpdateDeleteForm open={updateDeleteOpen} handleClose={() => setUpdateDeleteOpen(false)} deleteAccount={deleteAccount} />
                            </div>
                        </div>
                        <hr id='all-shifts-hr' />
                        <Button variant="contained" color="secondary" id='all-shifts-close' onClick={props.handleClose}>X</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}


export default UpdateAccount