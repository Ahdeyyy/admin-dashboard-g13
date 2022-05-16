import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Team = () => {

    const [data, setData] = useState({})
    const [fetched, setFetched] = useState(false)

    useEffect(()=>{
        getData()
        
    }, [])


    const getData = async () => {
        const {data } = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=10') 
        setData(data)
        setFetched(true)
        console.log(data)
    }
    //full name, email, phone number, gender, image
    return (
        <div className='team'>
            <div className='team-nav'><Navbar/></div>
            <div className='team-sidebar'><SideBar/></div>
            <div className='team-members'>
                <h2>Teampage</h2>
                {fetched ?  data.data.map((item) => (
                    <div className='item'key={item.id}>
                        <img src={item.image} alt='item' width="50px"/>
                        <p>{item.firstname} {item.lastname}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.gender}</p>
                    </div>
                    
                )) : <p>ok</p>}
            </div>
        </div>
      );
}
 
export default Team;