import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Team = () => {
    return (
        <div className='team'>
            <div className='team-nav'><Navbar/></div>
            <div className='team-sidebar'><SideBar/></div>
            <div className='team-members'>
                <h2>Teampage</h2>
            </div>
        </div>
      );
}
 
export default Team;