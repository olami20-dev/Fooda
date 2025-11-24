import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItem, food_list, getTotalcart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();

    
    const orderItems = food_list.filter(item => cartItem[item._id] > 0)
      .map(item => ({
        _id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: cartItem[item._id],
      }));

    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    localStorage.setItem('orderTotal', getTotalcart());

    navigate('/payment-page');
  }

  const subtotal = getTotalcart();
  const delivery = subtotal === 0 ? 0 : 2;
  const total = subtotal + delivery;

  return (
    <form className='place-order'>
          <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='phone' />
      </div>
      <div className='place-order-right'>
        <div className="cart-tot">
          <h2>Totals</h2>
          <div className="cart-details">
            <p>SubTotal</p>
            <p>${subtotal}</p>
          </div>
          <hr />
          <div className="cart-details">
            <p>Delivery</p>
            <p>${delivery}</p>
          </div>
          <hr />
          <div className="cart-details">
            <b>Total</b>
            <b>${total}</b>
          </div>
          <hr />
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
