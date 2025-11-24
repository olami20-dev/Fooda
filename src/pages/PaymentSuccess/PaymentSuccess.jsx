import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './PaymentSuccess/PaymentSuccess.css'

export default function PaymentSuccess () {
  const [status, setStatus] = useState('processing')
  const [orderID] = useState(Math.floor(100000 + Math.random() * 900000))

  
  const items = JSON.parse(localStorage.getItem('orderItems')) || []
  const subtotal = Number(localStorage.getItem('orderTotal')) || 0
  const delivery = subtotal === 0 ? 0 : 2
  const total = subtotal + delivery

  
  useEffect(() => {
   
    if (items.length === 0) {
      setStatus('failed')
      return 
    }

  
    const timeout = setTimeout(() => {
      const random = Math.random()

      if (random < 0.7) setStatus('success')
      else if (random < 0.9) setStatus('pending')
      else setStatus('failed')
    }, 1000)

    return () => clearTimeout(timeout)
  }, [items])

  return (
    <div className='success-wrapper'>
      <h1>Order Status</h1>

      <div className='order-box'>
        {/* Status */}
        <div className='status-row'>
          <span
            className={`status-dot ${
              status === 'success'
                ? 'green'
                : status === 'failed'
                ? 'red'
                : 'yellow'
            }`}
          ></span>

          <p className='status-text'>
            {status === 'success' && 'Payment Successful'}
            {status === 'failed' && 'Payment Failed'}
            {status === 'pending' && 'Awaiting Confirmation'}
            {status === 'processing' && 'Processing Payment...'}
          </p>
        </div>

        <p className='order-id'>
          <strong>Order ID:</strong> #{orderID}
        </p>

        <h3>Order Summary</h3>

        <div className='items-list'>
          {/* If empty items */}
          {items.length === 0 && <p>No items found in your order.</p>}

          {/* If items exist */}
          {items.length > 0 &&
            items.map(item => (
              <div className='item-card' key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
        </div>

        {/* Totals */}
        <div className='totals'>
          <div className='total-row'>
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div className='total-row'>
            <p>Delivery:</p>
            <p>${delivery}</p>
          </div>
          <div className='total-row'>
            <b>Total:</b>
            <b>${total}</b>
          </div>
        </div>

        {status === 'failed' && (
          <Link to='/payment-page' className='retry-btn'>
            Retry Payment
          </Link>
        )}

        <Link
          to='/'
          className='home-btn'
          onClick={() => {
            localStorage.removeItem('orderItems')
            localStorage.removeItem('orderTotal')
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
