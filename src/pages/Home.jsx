import React from 'react'
import Heroh from '../components/Heroh'
import Clothesman from '../components/Clothesman'
import Clotheswoman from '../components/Clotheswoman'
import Styleh from '../components/Styleh'

const Home = () => {
  return (
    <>
    <Heroh/>
    <Clothesman/>
    <div className='w-[1300px] m-auto h-[2px] bg-bg'></div>
    <Clotheswoman/>
    <Styleh/>
    </>
  )
}

export default Home