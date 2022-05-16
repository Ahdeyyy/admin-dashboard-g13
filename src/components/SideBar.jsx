import React,{} from "react"
import  { GrHomeRounded } from 'react-icons/gr'
import {AiOutlineTeam} from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import { GoPackage } from 'react-icons/go'
import {Link, NavLink } from 'react-router-dom'

const SideBar = () => {
    

    return (
        
         
        <div className="sidebar-comp">
            <div><NavLink to='/'> <i className="icon"><GrHomeRounded/></i>  <span className='sidetext'>Dashboard</span></NavLink></div>
            <div><NavLink to='/products'> <i className="icon"><GoPackage/></i> <span className='sidetext'>Products</span></NavLink></div>
            <div><NavLink activeClassName='active' to='/team'> <i className="icon"><AiOutlineTeam/></i> <span className='sidetext'>Team</span></NavLink></div>
            <div ><Link to='/'><i className="icon"><ImExit/></i>  <span className='sidetext'>Logout</span></Link> </div>
        </div>
       
    

        
      );
}
 
export default SideBar;