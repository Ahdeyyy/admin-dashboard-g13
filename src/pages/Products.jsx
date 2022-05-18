import React, {useEffect, useState} from 'react'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import './style.css'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'

const Products = () => {
    const [data, setData] = useState({})
    const [fetched, setFetched] = useState(false)

    useEffect(()=>{
        getData()
        
    }, [])


    const getData = async () => {
        const {data } = await axios.get(' https://fakerapi.it/api/v1/products?_quantity=10') 
        setData(data)
        setFetched(true)
        console.log(data)
    }
    //product name, product image, net price, taxes, price
    return (
        <div className='products'>
            <div className='product-nav'><Navbar/></div>
            <div className='product-sidebar'><SideBar/></div>
            <div className='product'>
                <h2>Products</h2>
                {fetched ? data.data.map((item) =>  (
                    <div className="product-item" key ={item.id}>
                        <img src={item.image} alt='item' width='50px'/><br/>
                        <span style={{fontSize:'16px'}}>{item.name}</span><br/>
                        <span>Net-Price: ${item.net_price}</span><br/>
                        <span>Taxes: {item.taxes}</span><br/>
                        <span>Price: ${item.price}</span>
                    </div>
                ) ): <div  className='product-item'><BeatLoader color={"#D65A31"}/></div>}
            </div>
            
            
        </div>
        
      );
}
 
export default Products;