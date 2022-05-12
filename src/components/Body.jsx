import React from "react"
import './styles/body.css'
import Navbar from "./Navbar"
import chart  from '../assets/chart.webp'
import  { GrHomeRounded } from 'react-icons/gr'
import {AiOutlineTeam} from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import { GoPackage } from 'react-icons/go'

const Body = () => {
    return(
        <div class="main-container">
            <div class="navbar"><Navbar/></div>
            <div class="sidebar">
                <div> <GrHomeRounded/>Dashboard</div>
                <div> <GoPackage/> Products</div>
                <div> <AiOutlineTeam/>Team Members</div>
                <button> <ImExit/>Logout</button>
            </div>
            <div class="statistics">
                <img src={chart} alt='chart' width="80%"/>
            </div>
            <div class="orders">Orders</div>
            <div class="summary">Summary</div>
        </div>
    )
}

export default Body;