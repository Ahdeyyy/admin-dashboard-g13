import React from 'react'
import SideBar from './SideBar';

const hamburgerMenu = (props) => {

    if(!props.show){
        return null;
    }
    return (
        <div className='hamburger'>
            
            <div className='ham-item'>
                <p onClick={props.onClose}>X</p>
                <SideBar/>
            </div>
           
        </div>
      );
}
 
export default hamburgerMenu;