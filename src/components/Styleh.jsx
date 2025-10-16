import React from 'react';
import Scard1 from './Staylescard/Scard1';
import Scard2 from './Staylescard/Scard2';
import casule from '../assets/casule.png';
import formal from '../assets/formal.jpg';
import gym from '../assets/gym.jpg';
import party from '../assets/party.jpg';

const Styleh = () => {
  return (
    <section className=' h-screen'>
        <div className=' h-[860px] w-[1239px] bg-bg rounded-3xl m-auto'>
            <h2 className='Theading text-[48px] text-center py-[70px]'>BROWSE BY DRESS STYLE</h2>
            <div className=' px-[64px]'>
                <div className='flex justify-between pb-3'>
                  <Scard1 
                  texts={"Casule"}
                  imgs={casule}
                  />
                  <Scard2
                  texts={"Formal"}
                  imgs={formal}
                  />
                </div>
                <div className='flex justify-between pt-3'>
                  <Scard2
                  texts={"Party"}
                  imgs={party}
                  />
                  <Scard1
                  texts={"Gym"}
                  imgs={gym}
                  />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Styleh