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
        <div>
            <h1>Home</h1>
            <h1>Welcome {props.user.name}</h1>
            <Button variant="contained" color="secondary" id='log-out-btn' onClick={handleLogOut}>Log Out</Button>
        </div>
    )
}

export default Home