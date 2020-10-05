import React from "react"
import { Button } from '@material-ui/core';


const SingleShift = (props) => {
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
                <Button variant="contained" color="primary" className='shift-details-button' >Details</Button>
            </div>
        </div >
    )
}

export default SingleShift