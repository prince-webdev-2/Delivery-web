import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { asserts } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartItem,food_list,removeFromCart,getTotalCartAmount}= useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <>
      <div className='sm:w-[90%] sm:ms-[5%] my-4 bg-[#cccccc90] pt-[4rem] pb-[1rem] px-2 sm:px-6 rounded-sm shadow-xl overflow-x-auto    sm:overflow-hidden'>
        <div className='grid grid-cols-6 text-center sm:text-xl font-semibold mb-2'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div> <hr />
        {
          food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return(
                <>
                  <div className='grid grid-cols-6 py-2 items-center text-center hover:scale-101 hover:bg-amber-50 duration-300'>
                    <img className='w-25 ms-[50%] transform -translate-x-1/2 rounded-full' src={item.image} alt={`${item.image}"-image`} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price*cartItem[item._id]}</p>
                    <p className='text-red-600 text-2xl cursor-pointer' onClick={()=>{removeFromCart(item._id)}}>&times;</p>
                  </div><hr />
                </>
              )
            }
          })
        }
      </div>
      <div className='w-[90%] ms-[5%] my-[2rem] flex flex-col-reverse sm:flex-row items-center justify-between'>
        <div className='lg:w-[30%] sm:w-[45%] w-full shadow-xl p-4'>
          <div className='my-2'>
            <p className='text-xl font-bold text-center'>Cart Total</p>
          </div>
          <div className='my-1 text-lg font-semibold text-gray-500 flex items-center justify-between'>
            <p>Subtotal</p>
            <p className='text-black'>$ {getTotalCartAmount()}</p>
          </div><hr />
          <div className='my-1 text-lg font-semibold text-gray-500 flex items-center justify-between'>
            <p>Delivery Fee</p>
            <p className='text-black'>$ {getTotalCartAmount()===0?0:2}</p>
          </div><hr />
          <div className='my-1 text-lg font-semibold text-gray-500 flex items-center justify-between'>
            <p>Total</p>
            <p className='text-[red]'>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <div className='bg-[tomato] mt-4 rounded-sm hover:scale-102 duration-300'>
            <button className='w-full p-2 cursor-pointer text-white font-semibold' onClick={()=>navigate('/order')} disabled={getTotalCartAmount()===0?true : false} style={{backgroundColor: getTotalCartAmount() === 0 ? '#cccccc90' : 'tomato'}}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className='lg:w-[30%] sm:w-[45%] shadow-xl p-4'>
          <p>if you have a promo code, Enter it here</p>
          <div className='bg-[#cccccc90] flex rounded-sm mt-2'>
            <input className='w-full p-2 outline-none bg-transparent' type="text" placeholder='Promo code' />
            <button className='bg-black text-white font-semibold w-[10rem] cursor-pointer hover:bg-[tomato] duration-300 rounded-r-sm'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart