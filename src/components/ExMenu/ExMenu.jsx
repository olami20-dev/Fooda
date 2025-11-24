import React from 'react'
import './ExMenu/ExMenu.css'
import {menu_list} from '../../assets/assets'
const ExMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Select from top restaurants and enjoy fast delivery.</p>
        <div className="explore-menu-lists">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All": item.menu_name)} className='explore-menu-list-item'>
                        <img  key={index} className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExMenu
