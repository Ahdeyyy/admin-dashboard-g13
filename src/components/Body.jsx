import React from "react"
import './styles/body.css'
import Navbar from "./Navbar"
import chart  from '../assets/chart.webp'

const Body = () => {
    return(
        <div class="main-container">
            <div class="navbar"><Navbar/></div>
            <div class="sidebar">
                <div>Dashboard</div>
                <div>Statistics</div>
                <div>Products</div>
                <div>Team Members</div>
                <button>Logout</button>
            </div>
            <div class="statistics">
                <img src={chart} alt='chart' width="80%"/>
            </div>
            <div class="orders">Orders</div>
            <div class="team">Team</div>
        </div>
    )
}

export default Body;