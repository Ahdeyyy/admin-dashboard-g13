import React from "react"
import './styles/body.css'
import Navbar from "./Navbar"
import chart  from '../assets/chart.webp'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import SideBar from "./SideBar"


const Body = () => {
    return(
        <div class="main-container">
            <div class="navbar"><Navbar/></div>

            <div class="sidebar">
                <SideBar/>
            </div>

            <div class="statistics">
                <img src={chart} alt='chart' width="80%"/>
            </div>

            <div class="orders">Orders</div>

            <div class="summary">
                <h3>Transaction Summary</h3>
                <div className='income'>
                    <i><BsArrowDownLeft/></i><br/>
                    <span>Income <br/>$12,730</span>
                    <span></span>
                </div>
                <div className='expenditure'> 
                    <i><BsArrowUpRight/></i><br/>
                    <span>Expenditure</span><br/>
                    <span>$22,730</span>
                </div>
                <div className='week'>
                    <p>This Week <br/>$3000</p>
                    <span></span>
                </div>
                <div className='month'>
                    <p>This Month <br/>$5780</p>
                </div>
            </div>

        </div>
    )
}

export default Body;