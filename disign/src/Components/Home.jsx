import React from 'react'
import Sidebar from './SideNav'
// import Header from './Header'
import LandingPage from './LandingPage'

const Home = () => {
    return (
        <div>

            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Sidebar />
                <LandingPage />
            </div>

        </div>
    )
}

export default Home