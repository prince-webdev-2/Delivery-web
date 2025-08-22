import React from 'react'
import { asserts } from '../assets/assets'

function Footer() {
  return (
    <>
        <div className='bg-[black]' id='contact-us'>
                <div className='grid gap-7 sm:gap-[6rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] ms-[5%] pt-[4rem] pb-[2rem]'>
                        <div>
                                <h1 className='text-[orange] text-4xl font-bold cursor-default'>FOODISH !</h1>
                                <p className='py-4 text-sm text-[#ffffffa2]'>Foodish is a modern online food delivery website offering a wide variety of delicious meals from top restaurants. With a user-friendly interface, quick delivery, and secure payments, Foodish brings your favorite dishes to your doorstep. Enjoy hassle-free ordering and mouthwatering flavors anytime, anywhere with Foodish – your hunger, our priority!</p>
                                <div className='flex gap-4'>
                                        <img className='bg-[#ffffffa2] rounded-4xl cursor-pointer hover:bg-[white] duration-300' src={asserts.facebook} alt="facebook-logo" />
                                        <img className='bg-[#ffffffa2] rounded-4xl cursor-pointer hover:bg-[white] duration-300' src={asserts.twitter} alt="twitter-logo" />
                                        <img className='bg-[#ffffffa2] rounded-4xl cursor-pointer hover:bg-[white] duration-300' src={asserts.linkedin} alt="linkedin-logo" />
                                </div>
                        </div>
                        <div>
                                <h1 className='text-[white] text-3xl font-semibold cursor-default'>COMPANY</h1>
                                <ul className='py-4 text-sm'>
                                        <li className='py-[3px] text-[#ffffffa2] hover:text-white cursor-pointer duration-300'>Home</li>
                                        <li className='py-[3px] text-[#ffffffa2] hover:text-white cursor-pointer duration-300'>About Us</li>
                                        <li className='py-[3px] text-[#ffffffa2] hover:text-white cursor-pointer duration-300'>Delivery</li>
                                        <li className='py-[3px] text-[#ffffffa2] hover:text-white cursor-pointer duration-300'>Privacy policy</li>
                                </ul>
                        </div>
                        <div>
                                <h1 className='text-[white] text-3xl font-semibold cursor-default'>GET IN TOUCH</h1>
                                <p className='py-4 text-sm text-[#ffffffa2] hover:text-white cursor-pointer duration-300'>+91 1234567890</p>
                                <p className='text-sm text-[#ffffffa2] hover:text-white cursor-pointer duration-300'>foodish@gmail.com</p>
                        </div>
                </div> <hr className='w-[90%] ms-[5%] bg-white h-[2px]' />
                <div className='py-3 flex flex-col sm:flex-row gap-3 sm:gap-0 text-center sm:justify-between mx-[5%]'>
                        <p className='text-[#ffa600c7] hover:text-[orange] cursor-default duration-300'>FOODISH</p>
                        <p className='text-[#ffffffa2] hover:text-white cursor-default duration-300'>Copyright 2025 &copy; Foodish.com - All Right Reserved</p>
                        <p className='text-[#ffffffa2] hover:text-white cursor-default duration-300'>Devloped by Prince Kumar</p>
                </div>
        </div>
    </>
  )
}

export default Footer