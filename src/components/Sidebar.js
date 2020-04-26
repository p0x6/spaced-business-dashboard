import React from "react"
import "./Sidebar.css"
import logo from './company_logo.jpg'



const Sidebar = () => {
    return(
        <div className="sidebar">
            <img src={logo} className="Company-logo" alt="logo" />
            <p className='Company-name'>Whole Foods Market</p>
            <div className='Company-Address'>

            </div>
        </div>
    )
}

export default Sidebar
