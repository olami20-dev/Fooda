import React, { useContext } from 'react'
import './FoodDis.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDis = ({category}) => {

    const {food_list} = useContext(StoreContext);
  return (
    <div className='food-dis' id='food-dis'>
        <h2>Top dishes near you</h2>
        <div className="food-dis-list">
            {food_list.map((item , index) =>{
                if(category ==="All" || category === item.category){
                     return <FoodItem key={index} _id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />

                }
               
            })}
        </div>
    </div>
  )
}

export default FoodDis
