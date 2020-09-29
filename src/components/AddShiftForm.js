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
                        <form noValidate autoComplete="off" className='sign-up-form'>
                            <p>Add New Shift</p>
                            <TextField id="standard-basic" label="Restaurant" required /><br />
                            <TextField id="standard-basic" label="Shift Type" required /><br />
                            <TextField id="standard-basic" label="Shift Hours" required /><br />
                            <TextField id="standard-basic" label="Total Tips" required /><br />
                            <FormControl className={classes.formControl} required>
                                <InputLabel id="demo-simple-select-helper-label">Shift Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={shiftType}
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"day"}>Day</MenuItem>
                                    <MenuItem value={"night"}>Night</MenuItem>
                                </Select>
                            </FormControl><br />
                            <TextField id="standard-basic" label="Comments" multiline rows={2} helperText="optional" /><br />
                            <Button variant="contained" color="primary" id='login-form-button'  >Add Shift</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div >
    )
}


export default AddShiftForm