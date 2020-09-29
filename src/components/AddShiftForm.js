import React, { useState } from "react"
import { TextField, Button } from '@material-ui/core';
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

const AddShiftForm = (props) => {
    const classes = useStyles();

    const [restaurant, setRestaurant] = useState("")
    const [shiftDate, setShiftDate] = useState(new Date())
    const [shiftHours, setShiftHours] = useState("")
    const [shiftTipTotal, setShiftTipTotal] = useState("")
    const [shiftType, setShiftType] = useState("")
    const [shiftComments, setShiftComments] = useState("")

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
                            <TextField id="standard-basic" label="Restaurant" required value={restaurant} onChange={event => setRestaurant(event.target.value)} /><br />
                            <TextField id="standard-basic" label="Shift Hours" required value={shiftHours} onChange={event => setShiftHours(event.target.value)} /><br />
                            <TextField id="standard-basic" label="Total Tips" required value={shiftTipTotal} onChange={event => setShiftTipTotal(event.target.value)} /><br />
                            <TextField id="standard-basic" label="Comments" helperText="optional" value={shiftComments} onChange={event => setShiftComments(event.target.value)} /><br />
                            <Button variant="contained" color="primary" id='login-form-button' onClick={() => props.handleAddShiftSubmit(shiftType, shiftDate, restaurant, shiftHours, shiftTipTotal, shiftComments)}  >Add Shift</Button> <Button variant="contained" color="secondary" id='login-form-close-button' onClick={props.handleAddShiftClose}>X</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div >
    )
}


export default AddShiftForm