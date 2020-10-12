import React from 'react'
import { Button } from '@material-ui/core';
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

const UpdateDeleteForm = (props) => {
    const classes = useStyles();

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
                        <h1 id='delete-form-header'>Are You Sure?</h1>
                        <p id='delete-form-desc'><span role="img" aria-label="Police Cars Revolving Light">🚨</span> Deleting Account Is Irreversible</p>
                        <Button variant="contained" color="primary" id='all-shifts-close' onClick={props.deleteAccount}>Yes</Button>
                        <Button variant="contained" color="secondary" id='all-shifts-close' onClick={props.handleClose}>No</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default UpdateDeleteForm