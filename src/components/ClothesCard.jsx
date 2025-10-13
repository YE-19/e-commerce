import React from 'react'
import OneS from './stars/OneS'

const ClothesCard = ({img,name,stares,price,dis,pir,pirs}) => {
  return (
    <div className=' hover:translate-y-[-6px] transition-all duration-300 ease-in-out'>
        <img src={img} alt="" className=' w-[300px] h-[300px] bg-bg rounded-3xl my-2 ' />
        <h3 className=' py-1 text-[20px] font-sans font-bold tracking-tight'>{name}</h3>
        <p className=' py-1'>{stares}</p>
        <p className='py-1 text-[24px] font-semibold flex gap-[8px] items-center content-center'>
            <span>{price}</span>
            <span className='text-black/40 line-through'>{dis}</span>
            <span className={pirs}>{pir}</span>
        </p>
    </div>
  )
}

export default ClothesCard