import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' h-[80px] min-w-full px-[100px] flex justify-between flex-wrap items-center content-center'>
      <span className=' text-[32px] Theading'>SHOP.CO</span>
      <ul className=' w-[321px] text-[16px] Tparg justify-between flex-wrap flex items-center content-center gap'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Man">Man</NavLink>
        <NavLink to="/Women">Women</NavLink>
      </ul>
      <input 
      type="search" 
      name='search' 
      placeholder='Search for prodect'
      className=' w-[577px] h-[48px] bg-bg pl-2 rounded-3xl' 
       />
      <div className='flex gap-[10px] items-center content-center text-[24px]'>
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-pinterest"></i></a>
      </div>
    </nav>
  )
}

export default Navbar