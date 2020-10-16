import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core';
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TipChart from '../components/TipChart';
import Footer from '../components/Footer';
import AddShiftForm from '../components/AddShiftForm';
import DeleteShiftForm from '../components/DeleteShiftForm'
import AllShifts from '../components/AllShifts'
import UpdateAccount from '../components/UpdateAccount';
import EarningsStatistics from '../components/EarningsStatistics';
const store = require('store2')


const Home = (props) => {

    const [userData, setUserData] = useState([])
    const [shifts, setShifts] = useState([['x', 'night', 'day']])
    const [AddShiftOpen, setAddShiftOpen] = useState(false)
    const [DeleteShiftOpen, setDeleteShiftOpen] = useState(false)
    const [allShiftsOpen, setAllShiftsOpen] = useState(false)
    const [updateAccountOpen, setUpdateAccountOpen] = useState(false)

    //Fetch user shifts to display in chart
    useEffect(() => {
        toast.dark(`Welcome Back ${store.get('user').name}`, {
            autoClose: 3000,
            pauseOnHover: false
        })
        let userID = store.get('user').id
        fetch(`http://localhost:3000/users/${userID}`)
            .then(resp => resp.json())
            .then(data => {
                updateShifts(data)
            })
        updateUserData()
    }, [])


    //User Log Out
    const handleLogOut = () => {
        fetch("http://localhost:3000/logout")
            .then(resp => resp.json())
            .then(data => {
                store.remove('user')
                history.push("/")
            })
    }


    //Adds New Shift for Current User
    const handleAddShiftSubmit = (shiftType, shiftDate, restaurant, shiftHours, shiftTips, shiftComments) => {

        //Validates shiftType
        if (shiftType === "") {
            return toast.dark(`Please Enter A Shift Type`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        //Converts shiftDate
        shiftDate = (parseInt(shiftDate.getMonth()) + 1) + "/" + shiftDate.getDate() + "/" + shiftDate.getFullYear().toString().charAt(2) + shiftDate.getFullYear().toString().charAt(3)
        //Validates restaurant
        if (restaurant === "") {
            return toast.dark(`Please Enter A Restaurant`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        //Validates shiftHours
        if (shiftHours === "") {
            return toast.dark(`Please Enter Shift Hours`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        else if (isNaN(parseInt(shiftHours))) {
            return toast.dark(`Shift Hours Must Be A Numeric Value`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        //Validates shiftTips
        if (shiftTips === "") {
            return toast.dark(`Please Enter Shift Tips`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        else if (isNaN(parseInt(shiftTips))) {
            return toast.dark(`Shift Tips Must Be A Numeric Value`, {
                autoClose: 2000,
                pauseOnHover: false
            })
        }
        const newShift = {
            userID: store.get('user').id,
            employment_place: restaurant,
            shift_date: shiftDate,
            shift_type: shiftType,
            shift_hours: shiftHours,
            pay_total: shiftTips,
            shift_comments: shiftComments
        }
        fetch('http://localhost:3000/add_shift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newShift),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    toast.dark(`${data.error}`, {
                        autoClose: 3000,
                        pauseOnHover: false
                    })
                }
                else {
                    setAddShiftOpen(false)
                    updateShiftsHelper()
                    toast.dark(`Shift: ${data.newShift.shift_date} Has Been added!`, {
                        autoClose: 3000,
                        pauseOnHover: false
                    })
                    updateUserData()
                }
            })
    }

    //Removes Shift for Current User
    const handleDeleteShift = (shiftType, shiftDate) => {
        //Converts shiftDate
        shiftDate = (parseInt(shiftDate.getMonth()) + 1) + "/" + shiftDate.getDate() + "/" + shiftDate.getFullYear().toString().charAt(2) + shiftDate.getFullYear().toString().charAt(3)
        console.log('Shift Type: ', shiftType)
        console.log('Shift Date: ', shiftDate)
        const shift = {
            shiftType,
            shiftDate
        }
        fetch('http://localhost:3000/delete_shift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(shift),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status) {
                    toast.dark(`${data.status}`, {
                        autoClose: 3000,
                        pauseOnHover: false
                    })
                }
                else {
                    toast.dark(`Shift For ${data.shift.shift_date} Has Been Deleted!`, {
                        autoClose: 3000,
                        pauseOnHover: false
                    })
                    updateShiftsHelper()
                    updateUserData()
                    setDeleteShiftOpen(false)
                }
            })
    }

    //Helper Method to Update Current User Shifts
    const updateShiftsHelper = () => {
        setShifts([['x', 'night', 'day']])
        let userID = store.get('user').id
        fetch(`http://localhost:3000/users/${userID}`)
            .then(resp => resp.json())
            .then(data => {
                updateShifts(data)
            })
    }

    //Helper Method for sorting and limiting shifts(Max: 10)
    const updateShifts = (data) => {
        let shifts = data.user.shifts
        //Sort shifts
        shifts.sort(function (a, b) {
            return new Date(a.shift_date) - new Date(b.shift_date)
        })
        //Return at max 10 most recent shifts
        if (data.user.shifts.length > 10) {
            shifts = data.user.shifts.slice(-10)
        }
        shifts.forEach(shift => {
            let day = 0
            let night = 0
            //If date exists in array already, update current date...STILL NEED THIS
            if (shift.shift_type === "day") {
                day = shift.pay_total
            }
            else {
                night = shift.pay_total
            }
            setShifts(shifts => [...shifts, [shift.shift_date, parseInt(night), parseInt(day)]])
        })
    }

    //Helper Method to Update Current User
    const updateUserData = () => {
        let userID = store.get('user').id
        fetch(`http://localhost:3000/users/${userID}`)
            .then(resp => resp.json())
            .then(data => {
                setUserData(data)
            })
    }

    return (
        <div className='home-screen'>
            <div className='home-screen-header'>
                <div className='home-screen-header-left'>
                    <img src={require("../images/tipoutLogo.png")} id='home-screen-header-logo' alt='tip out logo' />
                </div>
                <div className='home-screen-header-right'>
                    <Button variant="contained" color="secondary" id='log-out-btn' onClick={handleLogOut}>Log Out</Button>
                </div>
            </div>
            <div className='home-screen-button-container'>
                <Button variant="contained" color="primary" className='home-screen-tool-btn' onClick={() => setAddShiftOpen(true)}>Enter New Shift</Button><br /><br />
                <AddShiftForm open={AddShiftOpen} handleClose={() => setAddShiftOpen(false)} handleAddShiftSubmit={handleAddShiftSubmit} handleAddShiftClose={() => setAddShiftOpen(false)} />
                <Button variant="contained" color="primary" className='home-screen-tool-btn' onClick={() => setDeleteShiftOpen(true)}>Remove Old Shift</Button><br /><br />
                <DeleteShiftForm open={DeleteShiftOpen} handleClose={() => setDeleteShiftOpen(false)} handleDeleteShiftClose={() => setDeleteShiftOpen(false)} handleDeleteShift={handleDeleteShift} />
                <Button variant="contained" color="primary" className='home-screen-tool-btn' onClick={() => setAllShiftsOpen(true)}>View All Shifts</Button><br /><br />
                <AllShifts open={allShiftsOpen} handleClose={() => setAllShiftsOpen(false)} />
                <Button variant="contained" color="primary" className='home-screen-tool-btn' onClick={() => setUpdateAccountOpen(true)}>Update Account</Button><br /><br />
                <UpdateAccount open={updateAccountOpen} handleClose={() => setUpdateAccountOpen(false)} />
            </div>
            <div className='home-screen-chart-container'>
                <TipChart shifts={shifts} />
            </div>
            <div>
                <h1>Earnings Analytics</h1>
                <EarningsStatistics shifts={shifts} userData={userData} />
            </div>
            <hr id='home-hr' />
            <Footer />
        </div >
    )
}

export default Home