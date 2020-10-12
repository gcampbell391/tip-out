import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { toast } from 'react-toastify';
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


const UpdatePasswordForm = (props) => {
    const classes = useStyles();
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    //Handle Old Password Input Change
    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value)
    }

    //Handle New Password Input Change
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value)
    }

    //Handles New Password Submit
    const handlePasswordUpdateSubmit = () => {
        if (oldPassword === "") {
            return toast.dark(`Current Password can't be empty!`, {
                autoClose: 3000,
                pauseOnHover: false
            })
        }
        if (newPassword === "") {
            return toast.dark(`New Password can't be empty!`, {
                autoClose: 3000,
                pauseOnHover: false
            })
        }
        setNewPassword("")
        setOldPassword("")
        props.submitNewPassword(oldPassword, newPassword)
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
                        <TextField id="standard-basic" label="Current Password" required value={oldPassword} onChange={handleOldPasswordChange} /><br />
                        <TextField id="standard-basic" label="New Password" required value={newPassword} onChange={handleNewPasswordChange} /><br />
                        <Button variant="contained" color="primary" id='all-shifts-close' onClick={handlePasswordUpdateSubmit}>Update Password</Button>
                        <Button variant="contained" color="secondary" id='all-shifts-close' onClick={props.handleClose}>X</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default UpdatePasswordForm