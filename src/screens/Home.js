import React, { useEffect } from 'react'
import { Button } from '@material-ui/core';
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = require('store2')


const Home = (props) => {

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
                console.log(data)
                store.remove('user')
                history.push("/")
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
            <h1>Welcome {props.user.name}</h1>
            <div className='home-screen-middle-flexbox'>
                <div className='home-screen-middle-flexbox-left'>
                    <h1>Current Earnings Analytics</h1>
                </div>
                <div className='home-screen-middle-flexbox-right'>
                    <Button variant="contained" color="primary" className='home-screen-tool-btn' >Enter New Shift</Button><br /><br />
                    <Button variant="contained" color="primary" className='home-screen-tool-btn' >Remove Old Shift</Button><br /><br />
                    <Button variant="contained" color="primary" className='home-screen-tool-btn' >View All Shifts</Button><br /><br />
                    <Button variant="contained" color="primary" className='home-screen-tool-btn' >Update Account</Button><br /><br />
                </div>
            </div>
        </div >
    )
}

export default Home