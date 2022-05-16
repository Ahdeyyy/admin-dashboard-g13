import React, { useState, useEffect } from "react"
import './styles/body.css'
import Navbar from "./Navbar"
import chart  from '../assets/chart.webp'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import SideBar from "./SideBar"
import axios from 'axios'


const Body = () => {
    const [data, setData] = useState({})
    const [fetched, setFetched] = useState(false)

    useEffect(()=>{
        getData()
        
    }, [])


     const getData = async () => {
         const {data } = await axios.get('https://fakerapi.it/api/v1/companies?_quantity=1') 
         setData(data)
         setFetched(true)
         console.log(data)
     }

    return(
        <div className="main-container">
            <div className="navbar"><Navbar/></div>

            <div className="sidebar">
                <SideBar/>
            </div>

            <div className="statistics">
                <img src={chart} alt='chart' width="80%"/>
            </div>

            {fetched ? //name, email, phone gender image
            
            <div className="orders">
                <p>orders</p>
                
                <img src={data.data[0].image} width='40px' alt='item'></img>
                <p>{data.data[0].name}</p>
                <p>{data.data[0].email}</p>
                <p>{data.data[0].phone}</p>
                <p>{data.data[0].contact.gender}</p>
                  
            
            </div>: <p>Clients</p>}
             

            <div className="summary">
                <h3>Transaction <br/>Summary</h3>
                <div className='income'>
                    <i><BsArrowDownLeft  size={45} fill='white'/></i><br/>
                    <p>Income <br/>
                    <span>$12,730</span></p>
                </div>
                <div className='expenditure'> 
                    <i><BsArrowUpRight size={45} fill='white'/></i><br/>
                    <p>Expenditure<br/>
                    <span>$22,730</span></p>
                </div>
                <div className='week'>
                    <p>This Week <br/><span>$3000</span></p>
                </div>
                <div className='month'>
                    <p>This Month <br/><span>$5780</span></p>
                </div>
            </div>

        </div>
    )
}

export default Body;