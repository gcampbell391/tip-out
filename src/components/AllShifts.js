import React, { useState, useEffect } from "react"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SingleShift from "./SingleShift";
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


const AllShifts = (props) => {
    const classes = useStyles();
    const [allUserShifts, setAllUserShifts] = useState([])

    useEffect(() => {
        let userID = store.get('user').id
        fetch(`http://localhost:3000/users/${userID}`)
            .then(resp => resp.json())
            .then(data => {
                setAllUserShifts(data.shifts)
            })
    }, [])

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
                        <div className='all-shifts-modal'>
                            {allUserShifts.map(shift => {
                                return <SingleShift shift={shift} />
                            })}
                        </div>
                        <hr id='all-shifts-hr' />
                        <Button variant="contained" color="secondary" id='all-shifts-close' onClick={props.handleClose}>X</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}


export default AllShifts