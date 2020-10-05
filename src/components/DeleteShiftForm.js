import React, { useState } from "react"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib


//Styles for the Material UI Modal
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 170,
    },
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


const DeleteShiftForm = (props) => {
    const classes = useStyles();

    const [shiftDate, setShiftDate] = useState(new Date())
    const [shiftType, setShiftType] = useState("")

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
                        <form autoComplete="off" className='sign-up-form' >
                            <FormControl className={classes.formControl} required>
                                <InputLabel id="demo-simple-select-helper-label">Shift Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={shiftType}
                                    onChange={event => setShiftType(event.target.value)}
                                >
                                    <MenuItem value={"day"}>Day</MenuItem>
                                    <MenuItem value={"night"}>Night</MenuItem>
                                </Select>
                            </FormControl><br />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    disableToolbar
                                    required
                                    variant="inline"
                                    format="MM/dd/yy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Shift Date"
                                    value={shiftDate}
                                    onChange={date => setShiftDate(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider><br />
                            <Button variant="contained" color="primary" id='login-form-button' onClick={() => props.handleDeleteShift(shiftType, shiftDate)} >Delete Shift</Button> <Button variant="contained" color="secondary" id='login-form-close-button' onClick={props.handleDeleteShiftClose}>X</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}


export default DeleteShiftForm