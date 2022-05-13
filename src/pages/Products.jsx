import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import './style.css'

const Products = () => {
    return (
        <div className='products'>
            <div className='product-nav'><Navbar/></div>
            <div className='product-sidebar'><SideBar/></div>
            <div className='product'>
                <h2>Products</h2>
            </div>
            
            
        </div>
        
      );
}
 
export default Products;