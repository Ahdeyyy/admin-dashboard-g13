import React from "react"
import icon from '../assets/icon-menu.svg'
import { BiUser } from 'react-icons/bi'


const Navbar = () => {
    return (
        <div className='navbar-comp'>
            <img src={icon} alt ='icon'/>
            <span>Sphinx</span>
            <BiUser/>
        </div>
      );
}
 
export default Navbar;