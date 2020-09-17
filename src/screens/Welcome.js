import React from 'react'
import LoginForm from '../components/LoginForm'


const Welcome = () => {

    return (
        <div className='welcome-screen'>
            <div className='welcome-screen-flexbox-container'>
                <div className='welcome-screen-flexbox-left'>
                    {/* <img src={require("../images/tipoutLogo.png")} id='welcome-screen-logo' alt='tip out logo' /> */}
                    <LoginForm />
                    <p><span>Don't have an account? </span><span>Create one today!</span></p>
                </div>
                <div className='welcome-screen-flexbox-right'>
                    <img src={require("../images/welcome.png")} id='welcome-screen-image' alt='tip out' />
                </div>
            </div>
        </div>
    )
}


export default Welcome