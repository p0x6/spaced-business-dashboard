import React from "react"
import "./Sidebar.css"
import logo from './company_logo.jpg'
import { FiMapPin } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <img src={logo} className="Company-logo" alt="logo" />
            <p className='Company-name'>Whole Foods Market</p>
            <div className='Company-details'>
              <table id='company_details'>
              <tr>
                <th><FiMapPin /></th>
                <th>765 California St, San Francisco, CA 94109</th>
              </tr>
              <tr>
                <th>  <FaPhoneAlt /> </th>
                <th> (415)674-0500 </th>
              </tr>
              <tr>
                <th><AiFillClockCircle/></th>
                <th>Mon-Fri 8am-8pm <br/>
                Sat 6am-9pm<br/>
                Sun 11am-7pm</th>
              </tr>
              </table>
            </div>
            <div className='contact-buttons'>
              <button className="appointment-btn">Make an Announcement</button><br/>
              <button className="staff">Contact Staff</button>
            </div>
        </div>
    )
}

export default Sidebar
