import React from 'react'
import heroH from '../assets/heroH.png';

const Heroh = () => {
  return (
    <>
    <header className=' px-[100px] w-auto h-[663px] bg-bg flex justify-between '>
        <div className=' w-[550px] pt-[60px]'>
          <h1 className='Theading text-[70px] leading-none py-3'>
          FIND CLOTHES
          THAT MATCHES
          YOUR STYLE
          </h1>
          <p className='Tparg text-[16px] text-black/60 py-3'>
          Browse through our diverse range of meticously crafted garments, designed
          to bring out your individuality cater to your sense of style
          </p>
          <button className='btnB'>Shop Now</button>
          <div className='flex py-5 justify-between content-center items-center'>
            <div>
              <h2 className='Theading text-[40px] font-semibold'>200+</h2>
              <p className='text-black/60'>Internatoinal brands</p>
            </div>
            <span className=' w-[1px] h-[50px] bg-black/10'></span>
            <div>
              <h2 className='Theading text-[40px] font-semibold'>2,000+</h2>
              <p className='text-black/60'>High-Quality Products</p>
            </div>
            <span className=' w-[1px] h-[50px] bg-black/10'></span>
            <div>
              <h2 className='Theading text-[40px] font-semibold'>30,000+</h2>
              <p className='text-black/60'>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className=''>
          <img className=' w-[664px] h-[664px]' src={heroH} alt="Hero" />
        </div>
    </header>
    <nav className=' w-auto h-[92px] bg-black text-white flex justify-between items-center content-center px-[100px] text-[50px]'>
      <h3>VERSACE</h3>
      <h3>ZARA</h3>
      <h3>GUCCI</h3>
      <h3>PRADA</h3>
      <h3>Calvin Klein</h3>
    </nav>
    </>
  )
}

export default Heroh