import React from 'react'

const Home = (props) => {


    return (
        <div>
            <h1>Home</h1>
            <h1>Welcome {props.user.name}</h1>
        </div>
    )
}

export default Home