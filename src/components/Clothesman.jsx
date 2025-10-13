import React from 'react'
import ClothesCard from './ClothesCard'
import shirt1 from '../assets/shirt1.png'
import jeans1 from '../assets/jeans1.png'
import tshirt1 from '../assets/tshirt1.png'
import tshirt2 from '../assets/tshirt2.png'
import FiveS from './stars/FiveS'
import FourhafS from './stars/FourhafS'
import FourS from './stars/FourS'
import { useNavigate } from 'react-router-dom'


const Clothesman = () => {
    const nava = useNavigate();
  return (
        <section className=' px-[100px] py-[70px] min-h-screen flex flex-col justify-between items-center content-center'>
            <h2 className='Theading text-[48px]'>Man Collection</h2>
            <div className='flex items-center content-center gap-8'>
                <ClothesCard 
                img={shirt1}
                name={"Black regular-fit shirt"}
                stares={<FourhafS/>}
                price={"$199"}
                dis={""}
                />
                <ClothesCard 
                img={jeans1}
                name={"Purple regular-fit jeans"}
                price={"$160"}
                dis={"$200"}
                pir={"20%"}
                pirs={"dis"}
                stares={<FourS/>}
                />
                <ClothesCard 
                img={tshirt1}
                name={"Black T-shirt without a print"}
                stares={<FiveS/>}
                price={"$120"}
                />
                <ClothesCard 
                img={tshirt2}
                name={"Black polo T-shirt"}
                stares={<FourS/>}
                price={"$90"}
                dis={"$120"}
                pir={"25%"}
                pirs={"dis"}
                />
            </div>
            <button onClick={() => nava("/Man")} className='btnW'>View All</button>
        </section>
  )
}

export default Clothesman