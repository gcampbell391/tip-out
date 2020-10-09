import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

const UpdateEmailForm = (props) => {
    const classes = useStyles();
    const [newEmail, setNewEmail] = useState("")

    //Handle Email Input Change
    const handleEmailChange = (e) => {
        setNewEmail(e.target.value)
    }

    //Handles New Email Submit
    const handleEmailUpdateSubmit = () => {
        setNewEmail("")
        props.submitNewEmail(newEmail)
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
                        <TextField id="standard-basic" label="New Email" required value={newEmail} onChange={handleEmailChange} /><br />
                        <Button variant="contained" color="primary" id='all-shifts-close' onClick={handleEmailUpdateSubmit}>Update Email</Button>
                        <Button variant="contained" color="secondary" id='all-shifts-close' onClick={props.handleClose}>X</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}


export default UpdateEmailForm