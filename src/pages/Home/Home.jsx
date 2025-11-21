import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExMenu from '../../components/ExMenu/ExMenu'
import FoodDis from '../../components/FoodDis/FoodDis'
import App from '../../components/AppDown/App'

const Home = () => {
    const [category , setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExMenu category={category} setCategory={setCategory} />
      <FoodDis category={category} />
      <App />
    </div>
  )
}

export default Home
