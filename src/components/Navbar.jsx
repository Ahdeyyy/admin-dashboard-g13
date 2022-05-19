import React, {useState } from "react"
import icon from '../assets/icon-menu.svg'
import { BiUser } from 'react-icons/bi'
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true)
    }
    return (
        <div className='navbar-comp'>
            <img onClick={ handleShow } src={icon} alt ='icon'/>
            <span>Sphinx</span>
            <BiUser fill={"#D65A31"}/>
            <HamburgerMenu  onClose={()=> setShow(false)} show={show}/>
        </div>
      );
}
 
export default Navbar;