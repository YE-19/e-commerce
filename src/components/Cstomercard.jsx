import React from 'react'
import FiveS from './stars/FiveS'

const Cstomercard = ({name,fedback}) => {
  return (
    <div className=' w-[420px] h-[240px] p-[20px] flex flex-col gap-2 mt-16 border-solid border-black/10 border-[2px] rounded-3xl'>
        <FiveS/>
        <div className='flex items-center content-center gap-2'>
        <span className='text-[20px] font-semibold'>{name}</span>
        <span className='bg-green-600 w-6 rounded-full text-center text-white'>
        <i className="fa-solid fa-check"></i>
        </span>
        </div>
        <p className='text-black/60'>
            {fedback}
        </p>
    </div>
  )
}

export default Cstomercard