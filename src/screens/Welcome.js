import React from 'react'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'


const Welcome = () => {


    const login = () => {
        console.log("login")
    }

    return (
        <div className='welcome-screen'>
            <div className='welcome-screen-flexbox-container'>
                <img src={require("../images/tipoutLogo.png")} id='welcome-screen-logo' alt='tip out logo' />
                <LoginForm login={login} />
                <p id="welcome-screen-create-link">Don't have an account? <a href="google.com">Create one today!</a></p>
                {/* <p id="welcome-screen-create-link">Coming Soon...</p> */}
            </div>
            <Footer />
        </div>
    )
}


export default Welcome