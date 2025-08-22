import React from 'react'
import { asserts } from '../assets/assets'

function AppDownload() {
  return (
        <>
                <div className='bg-white my-[3rem]' id='mobile-app'>
                        <h1 className=' text-center text-3xl font-bold'>For Better Experience Download Foodish App</h1>
                        <div className='w-[90%] ms-[5%] flex justify-center gap-5 my-6'>
                                <img className='bg-black py-2 px-4 rounded-sm cursor-pointer' src={asserts.appstore} alt="app-store" />
                                <img className='bg-black py-2 px-4 rounded-sm cursor-pointer' src={asserts.googleplay} alt="gppgle-paly" />
                        </div>
                </div>
        </>
  )
}

export default AppDownload