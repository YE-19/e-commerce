import React from 'react'
import ClothesCard from './ClothesCard'
import tshirtw from '../assets/tshirtw.png'
import jeansw from '../assets/jeansw.png'
import shirtw from '../assets/shirtw.png'
import shirtw2 from '../assets/shirtw2.png'
import FiveS from './stars/FiveS'
import FourhafS from './stars/FourhafS'
import FourS from './stars/FourS'
import { useNavigate } from 'react-router-dom'

const Clotheswoman = () => {
  const nava = useNavigate();
  return (
    <section className=' px-[100px] py-[70px] min-h-screen flex flex-col justify-between items-center content-center'>
    <h2 className='Theading text-[48px]'>Woman Collection</h2>
    <div className='flex items-center content-center gap-8'>
        <ClothesCard 
        img={tshirtw}
        name={"Black top"}
        price={"$120"}
        dis={""}
        stares={<FiveS/>}
        />
        <ClothesCard 
        img={jeansw}
        name={"Blue wide-leg jeans"}
        price={"$220"}
        dis={"$300"}
        stares={<FourhafS/>}
        pir={"26%"}
        pirs={"dis"}
        />
        <ClothesCard 
        img={shirtw}
        name={"White semi-formal shirt"}
        price={"$160"}
        dis={""}
        stares={<FourS/>}
        />
        <ClothesCard 
        img={shirtw2}
        name={"Beige top with black stripes"}
        price={"$199"}
        dis={"$230"}
        stares={<FourhafS/>}
        pir={"15%"}
        pirs={"dis"}
        />
    </div>
    <button onClick={() => nava("/Woman")} className='btnW'>View All</button>
</section>
  )
}

export default Clotheswoman