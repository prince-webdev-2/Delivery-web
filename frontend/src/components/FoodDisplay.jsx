import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

function FoodDisplay({category}) {
    const { food_list } = useContext(StoreContext)

    return (
        <div className='w-[90%] ms-[5%]'>
            <h2 className='text-3xl text-center sm:text-start sm:text-4xl font-bold my-5 text-[#000000ec]'>Top dishes near you!</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3'>
                {
                    food_list.map((item) => {
                        if(category==="All" || category===item.category){
                                return(
                                        <FoodItem key={item._id} _id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                                )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay
