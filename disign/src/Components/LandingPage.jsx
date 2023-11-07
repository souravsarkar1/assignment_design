import React from 'react'
import Header from './Header'

const LandingPage = () => {
    return (
        <div style={{
            textAlign : "center"
        }}>
        <Header />
            <h1>WelCome to Data GPT </h1>
            <p>Experience of Ai with GEN AI</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio alias quas? Tempore autem vel sint pariatur, nobis, nisi nulla fugiat illum in nesciunt sit labore mollitia quaerat et aperiam!</p>
                <button style={{
                    background : "blue",
                    margin : "10px",
                    padding : "8px",
                    color : "white",
                    borderRadius : "5px",
                }}>Get Started</button>
            </div>
    )
}

export default LandingPage