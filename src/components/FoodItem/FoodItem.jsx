import React, { useState , useContext } from 'react'
import './FoodItem/FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({_id,name,price,description,image}) => {


    const {cartItem , addToCart , removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-image-conatiner">
        <img  className="food-item-image" src={image} alt={name} />
        {
             !cartItem[_id] ? <img className='add' onClick={() => addToCart(_id)} src={assets.add_icon_white} alt="" />
             : <div className='food-item-counter'>
                <img onClick={() => removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
                {cartItem[_id]}
                <img onClick={() => addToCart(_id)} src={assets.add_icon_green} alt="" />
             </div>
        }
           
      
      </div>
        <div className="food-item-details">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem
