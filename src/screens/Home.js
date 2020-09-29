import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core';
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TipChart from '../components/TipChart';
import Footer from '../components/Footer';
import AddShiftForm from '../components/AddShiftForm';
const store = require('store2')


const Home = (props) => {

    const [AddShiftOpen, setAddShiftOpen] = useState(false)

    useEffect(() => {
        toast.dark(`Welcome Back ${store.get('user').name}`, {
            autoClose: 3000,
            pauseOnHover: false
        })
    }, [])

    const handleLogOut = () => {
        fetch("http://localhost:3000/logout")
            .then(resp => resp.json())
            .then(data => {
                store.remove('user')
                history.push("/")
            })
    }

    //Methods for Adding a Shift

    const handleAddShift = () => {
        setAddShiftOpen(true);
    }

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
        console.log(shiftType, shiftDate, restaurant, shiftHours, shiftTips, shiftComments)
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
                <Button variant="contained" color="primary" className='home-screen-tool-btn' onClick={handleAddShift}>Enter New Shift</Button><br /><br />
                <AddShiftForm open={AddShiftOpen} handleClose={() => setAddShiftOpen(false)} handleAddShiftSubmit={handleAddShiftSubmit} handleAddShiftClose={() => setAddShiftOpen(false)} />
                <Button variant="contained" color="primary" className='home-screen-tool-btn' >Remove Old Shift</Button><br /><br />
                <Button variant="contained" color="primary" className='home-screen-tool-btn' >View All Shifts</Button><br /><br />
                <Button variant="contained" color="primary" className='home-screen-tool-btn' >Update Account</Button><br /><br />
            </div>
            <div className='home-screen-chart-container'>
                <TipChart userID={store.get('user').id} />
            </div>
            <div>
                <h1>Earnings Analytics</h1>
            </div>
            <Footer />
        </div >
    )
}

export default Home