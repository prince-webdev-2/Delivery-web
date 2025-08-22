import React, { useContext } from 'react'
import { asserts } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

function FoodItem({ _id, name, price, description, image }) {
    const { cartItem, removeFromCart, addToCart } = useContext(StoreContext)

    return (
        <div className="flex flex-col z-10 items-center my-3 p-2 shadow-lg rounded-lg bg-white hover:scale-103 duration-300 hover:bg-[#cccccc62] cursor-pointer">
            <div>
                <img className='w-[250px] h-[250px] rounded-2xl' src={image} alt="food" />
            </div>
            <div className='flex items-center'>
                <p className='mx-2 text-xl font-bold text-[#000000c7]'>{name}</p>
                <img className='w-[50px] mx-2' src={asserts.star} alt="rating-star" />
            </div>
            <div>
                <p className='text-[1.2rem] font-semibold text-[#00000096]'>{description}</p>
                <p className='text-2xl text-center font-bold text-red-700 my-3'>$ {price}</p>
            </div>
            <div className='my-1 sm:my-4'>
                {!cartItem[_id] ? (
                    <img src={asserts.addIcon} onClick={() => addToCart(_id)} alt="add-icon" />
                ) : (
                    <div className='flex bg-[#ffff007c] px-4 py-3 rounded-2xl'>
                        <img src={asserts.remove} onClick={() => removeFromCart(_id)} alt="remove-icon" />
                        <p className='px-3 text-xl font-bold'>{cartItem[_id]}</p>
                        <img src={asserts.addIcon2} onClick={() => addToCart(_id)} alt="add-icon-2" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodItem
