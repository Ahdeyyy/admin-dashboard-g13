import React from "react"
import icon from '../assets/icon-menu.svg'
import avatar from '../assets/avatar.jpg'


const Navbar = () => {
    return (
        <div className='navbar' styles={{display:"flex" }}>
            <img src={icon} alt ='icon'/>
            <span>Sphinx</span>
            <span ><img src={avatar} alt='avatar' width='20px'/></span>
        </div>
      );
}
 
export default Navbar;