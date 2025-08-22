import React from 'react'
import { menuItems } from '../assets/assets'
import './components.css'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='w-[90%] ms-[5%]' id='menu'>
        <div className='w-full lg:w-[50%]'>
                <h3 className='text-xl sm:text-2xl text-center sm:text-start font-bold pt-[2rem] pb-[1rem]'>Hungry? See What We’re Serving</h3>
                <p className='text-sm sm:text-[1rem] font-semibold'>Indulge in a wide variety of mouthwatering dishes crafted to satisfy every craving. We're here to turn every meal into a memorable dining experience — one bite at a time.</p>
        </div>
        <div className='flex gap-6 lg:overflow-x-hidden overflow-x-auto my-8 pb-4 justify-between'>
        {menuItems.map((item, index) => (
          <div key={index} className='flex flex-col items-center min-w-[80px]' onClick={()=>{setCategory(prev=>prev===item.menuName?"All":item.menuName)}}>
            <img src={item.menuImage} alt="menuImage" className='sm:w-50 sm:h-25 rounded-full object-cover border-2 p-1 border-gray-300 hover:cursor-pointer hover:scale-110 duration-300' style={category===item.menuName? {border: "4px solid orange"}:{}} />
            <p className='text-center text-sm font-medium mt-2'>{item.menuName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu