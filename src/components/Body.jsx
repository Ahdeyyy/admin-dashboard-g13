import React, { useState, useEffect } from "react"
import './styles/body.css'
import Navbar from "./Navbar"
import BeatLoader from 'react-spinners/BeatLoader'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import SideBar from "./SideBar"
import axios from 'axios'
import Chart from "./Chart"

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
                <div><Chart width={90}/></div>
                
            </div>

            {fetched ? //name, email, phone gender image
            
            <div className="orders">
                <p style={{color:'#D65A31', fontWeight: 'bold'}}>CLIENTS</p>
                <div className='client-card'>
                    <div className='client-img'><img src={data.data[0].image} alt='item'></img></div>
                    <div className='client-details'> 
                        <span>{data.data[0].name}</span><br/>
                        <span>{data.data[0].email}</span><br/>
                        <span>{data.data[0].phone}</span><br/>
                        <span>{data.data[0].contact.gender}</span>
                    </div>
                    
                   
                </div>
                
            </div>: <div  className='client-card'><BeatLoader color={"#D65A31"}/></div>}
             

            <div className="summary">
                <h3>Transaction <br/>Summary</h3>
                <div className='income'>
                    <i><BsArrowDownLeft  size={45} fill='white'/></i><br/>
                    <p>Income <br/>
                    <span><span>&#8358;</span>12,730</span></p>
                </div>
                <div className='expenditure'> 
                    <i><BsArrowUpRight size={45} fill='white'/></i><br/>
                    <p>Expenditure<br/>
                    <span><span>&#8358;</span>22,730</span></p>
                </div>
                <div className='week'>
                    <p>This Week <br/><span><span>&#8358;</span>3000</span></p>
                </div>
                <div className='month'>
                    <p>This Month <br/><span><span>&#8358;</span>5780</span></p>
                </div>
            </div>

        </div>
    )
}

export default Body;