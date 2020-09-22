import React from 'react'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'


const Welcome = (props) => {

    return (
        <div className='welcome-screen'>
            <div className='welcome-screen-flexbox-container'>
                <img src={require("../images/tipoutLogo.png")} id='welcome-screen-logo' alt='tip out logo' />
                <LoginForm handleEmailChange={props.handleEmailChange} handlePasswordChange={props.handlePasswordChange} handleLogin={props.handleLogin} email={props.email} password={props.password} />
                <p id="welcome-screen-create-link">Don't have an account? </p>
                <SignUpForm />
                {/* <p id="welcome-screen-create-link">Coming Soon...</p> */}
            </div>
            <Footer />
        </div>
    )
}


export default Welcome