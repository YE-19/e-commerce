import React from 'react';
import casule from '../../assets/casule.png';

const Scard2 = ({ texts, imgs }) => {
  return (
    <div className=' w-[684px] h-[289px] flex bg-white rounded-3xl justify-between'>
        <h3 className=' text-[36px] font-bold p-[30px]'>{texts}</h3>
        <img src={imgs} alt="Casual" />
    </div>
  );
};

export default Scard2;