import React from 'react'
import { asserts } from '../assets/assets'

function NotFoundPage() {
  return (
    <>
        <div className='w-full h-[45vh]'>
                <img className='w-75 ms-[50%] transform -translate-x-1/2' src={asserts.error404} alt="404-img" />
        </div>
    </>
  )
}

export default NotFoundPage