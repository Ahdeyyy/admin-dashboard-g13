import React from "react"
import  { GrHomeRounded } from 'react-icons/gr'
import {AiOutlineTeam} from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import { GoPackage } from 'react-icons/go'
import {NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="sidebar-comp">
            <div><NavLink to = '/' > <i className="icon"><GrHomeRounded fill="#D65A31"/></i> Dashboard</NavLink></div>
            <div><NavLink to='/products'> <i className="icon"><GoPackage/></i> Products</NavLink></div>
            <div><NavLink to='/team'> <i className="icon"><AiOutlineTeam/></i>Team</NavLink></div>
            <button> <NavLink to= '/login'> <i><ImExit/></i> Logout</NavLink></button>
        </div>
      );
}
 
export default SideBar;