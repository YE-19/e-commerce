import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' h-[70px] min-w-full px-[100px] flex justify-between flex-wrap items-center content-center'>
      <span className=' text-[32px] Theading'>SHOP.CO</span>
      <ul className=' w-[321px] text-[16px] Tparg justify-between flex-wrap flex items-center content-center gap'>
        <NavLink className="barhover" to="/">Home</NavLink>
        <NavLink className="barhover" to="/About">About</NavLink>
        <NavLink className="barhover" to="/Man">Man</NavLink>
        <NavLink className="barhover" to="/Woman">Women</NavLink>
      </ul>
      <input 
      type="search" 
      name='search' 
      placeholder='Search for prodect'
      className=' w-[577px] h-[48px] bg-bg pl-2 rounded-3xl' 
       />
      <div className='flex gap-[10px] items-center content-center text-[24px]'>
        <a className="barhover" href="https://www.facebook.com/youssef.ehab.129558?mibextid=wwXIfr&rdid=RRw68WnKmWHGTwDb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D46cAqEqj%2F%3Fmibextid%3DwwXIfr#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a className="barhover" href="https://www.instagram.com/youssef_e19?igsh=MXMyY21wZnNpNzIzZQ%3D%3D&utm_source=qr" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a className="barhover" href="https://www.pinterest.com/search/pins/?q=t%20shirt&rs=ac&len=3&source_id=ac_2PCSF4Gg&eq=t-s&etslf=8060" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
      </div>
    </nav>
  )
}

export default Navbar