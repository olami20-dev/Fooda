import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setLogin}) => {

    const [menu , setmenu] = useState("home");
    const {getTotalcart} = useContext(StoreContext);
  return (
    <div className='navbar'>
       <Link to="/"> 
      <img src={assets.logo} alt="" className='logo' />
       </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=> setmenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setmenu("menu")} className={menu === "menu" ? "active" : ""} >Menu</a>
        <a a href = "#app-download"onClick={()=> setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer'  onClick={()=> setmenu("contact-us")}className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalcart()=== 0 ? "" :"dot"}></div>
        </div>
        <button onClick={() => setLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
