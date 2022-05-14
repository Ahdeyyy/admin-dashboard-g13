import React, { useState, useEffect } from "react"
import './styles/body.css'
import Navbar from "./Navbar"
import chart  from '../assets/chart.webp'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import SideBar from "./SideBar"
import Login from "./Login"
import axios from 'axios'


const Body = () => {
    const [data, setData] = useState({})
    const [fetched, setFetched] = useState(false)

    useEffect(()=>{
        getData()
        
    }, [])

    // axios.get('https://fakerapi.it/api/v1/companies?_quantity=3') 
    //     .then(function (response) {
    //         setData(response)
    //         setFetched(true)
            
    //         setData(response.data)
    //         console.log(data)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
     const getData = async () => {
         const {data } = await axios.get('https://fakerapi.it/api/v1/companies?_quantity=3') 
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
                orders
                <p>{data.data[0].name}</p>
                <img src={data.data[0].image} width='40px'></img>
                
                  
            
            </div>: <p>Clients</p>}
             

            <div className="summary">
                <h3>Transaction Summary</h3>
                <div className='income'>
                    <i><BsArrowDownLeft/></i><br/>
                    <span>Income <br/>$12,730</span>
                    <span></span>
                </div>
                <div className='expenditure'> 
                    <i><BsArrowUpRight/></i><br/>
                    <span>Expenditure</span><br/>
                    <span>$22,730</span>
                </div>
                <div className='week'>
                    <p>This Week <br/>$3000</p>
                    <span></span>
                </div>
                <div className='month'>
                    <p>This Month <br/>$5780</p>
                </div>
            </div>

        </div>
    )
}

export default Body;