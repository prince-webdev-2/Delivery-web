import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { asserts } from '../assets/assets'
import './components.css'
import {StoreContext} from '../context/StoreContext'

function Navbar({setShowLogin,searchBox,setSearchBox}) {
  const [menu,setMenu]=useState("Home");
  const [navtoggle,setNavToggle]= useState(false);
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <>
      <div className='fixed flex gap-3 w-[80%] z-50 h-[3rem] lg:w-[30%] left-1/2 transform -translate-x-1/2 bg-white rounded-sm' id={searchBox? 'search-show' : 'search-hide'}>
        <input className='w-full py-2 px-4 outline-none' type="search" placeholder='Search' />
        <span className='bg-[#ccc] rounded-r-sm cursor-pointer px-3 text-3xl' onClick={()=>{setSearchBox(false)}}>&times;</span>
      </div>
      <div className='w-full bg-white z-50 sticky top-0 '>
        <div className='py-3 w-[90%] ms-[5%] flex justify-between items-center'>
          <div>
            <Link to='/'><h1 className='text-2xl font-bold text-[orange] flex gap-1'>Foodish <img className='hidden sm:block' src={asserts.logo} alt='logo'></img></h1></Link>
          </div>
          <div className='hidden sm:block'>
            <ul className='flex gap-8'>
              <Link to='/' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Home"?"active":""}`} onClick={()=>{setMenu('Home')}} style={menu==="Home"?{borderBottom: '2px solid #0b0505'}:{}}>Home</Link>
              <a href='#menu' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Menu"?"active":""}`} onClick={()=>{setMenu('Menu')}} style={menu==="Menu"?{borderBottom: '2px solid #0b0505'}:{}}>Menu</a>
              <a href='#mobile-app' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Mobile-app"?"active":""}`} onClick={()=>{setMenu('Mobile-app')}} style={menu==="Mobile-app"?{borderBottom: '2px solid #0b0505'}:{}}>Mobile-app</a>
              <a href='#contact-us' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Contact-us"?"active":""}`} onClick={()=>{setMenu('Contact-us')}} style={menu==="Contact-us"?{borderBottom: '2px solid #0b0505'}:{}}>Contact-us</a>
            </ul>
          </div>
          <div className={`sm:hidden fixed bg-white top-[65px] w-[60%] px-4 py-7`} id={navtoggle?'mobile-nav-show' : 'mobile-nav-hide'}>
            <ul className='flex flex-col sm:gap-8 gap-6'>
              <Link to='/' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Home"?"active":""}`} onClick={()=>{setMenu('Home')}} style={menu==="Home"?{borderBottom: '2px solid #0b0505'}:{}}>Home</Link>
              <a href='#menu' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Menu"?"active":""}`} onClick={()=>{setMenu('Menu')}} style={menu==="Menu"?{borderBottom: '2px solid #0b0505'}:{}}>Menu</a>
              <a href='#mobile-app' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Mobile-app"?"active":""}`} onClick={()=>{setMenu('Mobile-app')}} style={menu==="Mobile-app"?{borderBottom: '2px solid #0b0505'}:{}}>Mobile-app</a>
              <a href='#contact-us' className={`text-[#402828] hover:cursor-pointer hover:text-[#0b0505] ${menu==="Contact-us"?"active":""}`} onClick={()=>{setMenu('Contact-us')}} style={menu==="Contact-us"?{borderBottom: '2px solid #0b0505'}:{}}>Contact-us</a>
            </ul>
          </div>
          <div className='flex gap-4 sm:gap-8 items-center'>
            <img className='w-[1.5rem] hover:scale-110 duration-300 hover:cursor-pointer' src={asserts.searchIcon} alt="search-icon" onClick={()=>{setSearchBox(!searchBox)}} />
            <div className='relative group'>
              <Link to='/cart'><img className='w-[1.5rem] group-hover:scale-110 duration-300 hover:cursor-pointer' src={asserts.shoppingCart} alt="shopping-cart" /></Link>
              {
                getTotalCartAmount()===0?<></>:<img className='w-3 group-hover:scale-110 duration-300 absolute top-[-10px] right-[-10px]' src={asserts.redDot} alt="red-dot" />
              }              
            </div>
            <button className='bg-transparent  border-1 rounded-3xl py-2 px-7 hover:bg-red-100 duration-300 hover:scale-110 hover:cursor-pointer' onClick={()=>{setShowLogin(true)}}>Sign in</button>
            <button className='sm:hidden text-2xl cursor-pointer' onClick={()=>{setNavToggle(!navtoggle)}}>{navtoggle? <span>&#10005; </span> : <span>&#9776;</span>}</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar