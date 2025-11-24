import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPage from './components/Loginpage/LoginPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess'

const App = () => {

  const [login , setLogin] = useState(false);
  return (
    <>
    {login ? <LoginPage setLogin={setLogin} /> : <></>}
    <div className='app'>
      <Navbar setLogin={setLogin} />

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/payment-page' element={<PaymentPage />} />
        <Route path='/payment-success' element={<PaymentSuccess />} />

      </Routes>
    </div>
    <Footer />
    </>
    
  )
}

export default App
