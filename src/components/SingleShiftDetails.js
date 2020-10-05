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

const SingleShiftDetails = (props) => {
    const classes = useStyles();
    const hourlyRate = parseInt(props.shift.pay_total) / parseInt(props.shift.shift_hours)
    let hourlyRateGesture = hourlyRate < 10 ? '😔' : '😁'
    if (hourlyRate > 20) {
        hourlyRateGesture = '🤑'
    }
    let shiftTypeGesture = props.shift.shift_type === 'night' ? '🌃' : '🌇'


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
                        <div>
                            <p className='single-shift-details-shift-type-gesture'>{shiftTypeGesture}</p>
                            <p><span className='single-shift-details-title'>Restaurant:</span> {props.shift.employment_place}</p>
                            {/* <p><span className='single-shift-details-title'>Shift Type:</span> <span className='single-shift-details-shift-type-gesture'>{shiftTypeGesture}</span></p> */}
                            <p><span className='single-shift-details-title'>Tip Out:</span> <span className='single-shift-details-money'>${props.shift.pay_total}</span></p>
                            <p><span className='single-shift-details-title'>Hours Worked:</span> {props.shift.shift_hours}</p>
                            <p><span className='single-shift-details-title'>Hourly Rate:</span> <span className='single-shift-details-money'>${hourlyRate.toFixed(2)}</span></p>
                            {props.shift.shift_comments && <p><span className='single-shift-details-title'>Comments: </span>{props.shift.shift_comments}</p>}
                            <p className='single-shift-details-gesture'>{hourlyRateGesture}</p>
                        </div>
                        <hr id='all-shifts-hr' />
                        <Button variant="contained" color="secondary" id='all-shifts-close' onClick={props.handleClose}>X</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default SingleShiftDetails