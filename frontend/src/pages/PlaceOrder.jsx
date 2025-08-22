import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

function PlaceOrder() {
  const {getTotalCartAmount}= useContext(StoreContext)
  return (
    <>
      <div className='grid sm:grid-cols-[50%_20%_30%] w-[90%] ms-[5%] lg:my-[2rem] sm:my-[5rem]'>
        <div className='shadow-xl p-4'>
          <h2 className='text-2xl font-bold'>Delivery Information</h2>
          <form action="" className='mt-2'>
            <div className='sm:flex gap-2'>
              <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none sm:w-1/2 w-full my-1' type="text" placeholder='First name' required />
              <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none sm:w-1/2 w-full my-1' type="text" placeholder='Last name (Optional)' />
            </div>
            <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none w-full my-1' type="email" placeholder='Email address' required />
            <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none w-full my-1' type="text" placeholder='Street' required />
            <div className='sm:flex gap-2'>
              <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none sm:w-1/2 w-full my-1' type="text" placeholder='City' required />
              <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none sm:w-1/2 w-full my-1' type="text" placeholder='State' required />
            </div>
            <div className='sm:flex gap-2'>
              <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none sm:w-1/2 w-full my-1' type="text" placeholder='Zip code' required />
              <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none sm:w-1/2 w-full my-1' type="text" placeholder='Country' required />
            </div>
            <input className='border-2 border-[#ccc] rounded-sm p-2 outline-none w-full my-1' type="email" placeholder='Phone' required />
          </form>
        </div>
        <div></div>
          <div>
            <div className='shadow-xl p-4'>
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
              <button className='w-full p-2 cursor-pointer text-white font-semibold' onClick={()=>navigate('/order')} disabled={getTotalCartAmount()===0?true : false} style={{backgroundColor: getTotalCartAmount() === 0 ? '#cccccc90' : 'tomato'}}>PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaceOrder