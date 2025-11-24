import React, { useContext } from 'react'
import './Cart/Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItem , food_list,removeFromCart, getTotalcart } = useContext(StoreContext)
    const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartItem[item._id]>0)
          {
            return(
              <div>
                  <div className='cart-item-title cart-items-item' >
             <img src={item.image} alt="" />
             <p>{item.name}</p>
             <p>${item.price}</p>
             <p>{cartItem[item._id]}</p>
             <p>${item.price * cartItem[item._id]}</p>
             <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
           </div>
           <hr />
              </div>
           

            )
          }
        })}
      </div>
      <div className="cart-bootom">
        <div className="cart-tot">
          <h2>Totals</h2>
          <div>
            <div className="cart-details">
              <p>SubTotal</p>
              <p>${getTotalcart()}</p>
            </div>
               <hr />
            <div className="cart-details">
               <p>Delivery</p>
              <p>${getTotalcart()===0?0:2}</p>
                 
            </div>
               <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>${getTotalcart() === 0?0:getTotalcart()+2}</b>
            </div>

            <hr />
          
          </div>
            <button onClick={() => navigate('/place-order')}>PROCEED TO CHECKOUT</button>
        </div>
         <div className="cart-promo">
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-input">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Cart
