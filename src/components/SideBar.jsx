import React,{useState} from "react"
import  { GrHomeRounded } from 'react-icons/gr'
import {AiOutlineTeam} from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import { GoPackage } from 'react-icons/go'
import {Link } from 'react-router-dom'
import Body from "./Body"

const SideBar = () => {
    const [logout, setLogout] = useState(false);
    

    return (
        
         
        <div className="sidebar-comp">
            <div><Link to='/'> <i className="icon"><GrHomeRounded/></i> Dashboard</Link></div>
            <div><Link to='/products'> <i className="icon"><GoPackage/></i> Products</Link></div>
            <div><Link to='/team'> <i className="icon"><AiOutlineTeam/></i>Team</Link></div>
            <div ><Link to='/'><i><ImExit/></i> Logout</Link> </div>
        </div>
       
    

        
      );
}
 
export default SideBar;