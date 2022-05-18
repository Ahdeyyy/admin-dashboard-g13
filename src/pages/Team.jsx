import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import BeatLoader from 'react-spinners/BeatLoader'

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
                        <img src={item.image} alt='item'/><br/>
                        <span style={{fontSize:'16px'}}>{item.firstname} {item.lastname}</span><br/>
                        <span>{item.email}</span><br/>
                        <span>{item.phone}</span><br/>
                        <span style={{textTransform: 'uppercase'}}>{item.gender}</span><br/>
                    </div>
                    
                )) : <div  className='product-item'><BeatLoader color={"#D65A31"}/></div>}
            </div>
        </div>
      );
}
 
export default Team;