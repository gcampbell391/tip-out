import React, { useState } from "react"
import { Button } from '@material-ui/core';
import SingleShiftDetails from "./SingleShiftDetails";


const SingleShift = (props) => {

    const [shiftDetailsOpen, setShiftDetailsOpen] = useState(false)

    console.log(props.shift)
    return (
        <div className='single-shift-card'>
            <div className='single-shift-card-left'>
                <p className='single-shift-card-title'>Shift Date</p>
                <p className='single-shift-card-info'>{props.shift.shift_date}</p>

            </div>
            <div className='single-shift-card-middle'>
                <p className='single-shift-card-title'>Total Tip Out</p>
                <p className='single-shift-card-info-tip'>${props.shift.pay_total}</p>
            </div>
            <div className='single-shift-card-right'>
                <p className='single-shift-card-title'>More Details</p>
                <Button variant="contained" color="primary" className='shift-details-button' onClick={() => setShiftDetailsOpen(true)}>Details</Button>
                <SingleShiftDetails open={shiftDetailsOpen} handleClose={() => setShiftDetailsOpen(false)} shift={props.shift} />
            </div>
        </div >
    )
}

export default SingleShift