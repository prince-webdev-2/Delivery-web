import React from 'react'
import './components.css'
import { asserts } from '../assets/assets'

function Header() {
  return (
    <section>
        <div className='w-[90%] ms-[5%] p-4 rounded-md bg-cover bg-no-repeat' id="home-header-div" style={{ backgroundImage: `url(${asserts.homeHeaderBg})`}}>
                <div className='lg:w-[50%] text-center' id="home-header-inner-div">
                        <h3 className='text-white text-xl sm:text-4xl lg:pt-[7rem] sm:pt-[4rem] py-4 sm:px-7 sm:leading-[4rem] font-bold'>“Craving something delicious?We’ve got you covered! order yours today”</h3>
                        <p className='text-white text-sm sm:text-[1rem] py-4 sm:pt-[2rem] sm:px-7'>Dive into a one-of-a-kind menu packed with bold flavors, crafted with premium ingredients and culinary passion. At every bite, we’re here to thrill your taste buds and turn cravings into unforgettable experiences — one irresistible meal at a time.</p>
                        <button className='px-7 py-2 text-black bg-white rounded-3xl font-semibold my-3 lg:mb-[4rem] sm:mt-[4rem] hover:text-white hover:bg-[orange] duration-500 sm:mb-[1rem] cursor-pointer'>View Menu</button>
                </div>
        </div>
    </section>
  )
}

export default Header