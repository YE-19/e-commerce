import React from 'react'
import Cstomercard from './Cstomercard'

const Customersh = () => {
  return (
        <section className=' h-[70vh] p-[100px]'>
            <h2 className='Theading text-[48px]'>OUR HAPPY CUSTOMERS</h2>
            <div className='flex justify-between'>
                <Cstomercard
                name={"Ayah M."}
                fedback={"Great experience overall! The clothes fit perfectly and look just like the pictures. Prices are reasonable for the quality you get. The customer service is also excellent — very polite and responsive."}
                />
                <Cstomercard
                name={"Youssef E."}
                fedback={"I really love this clothing store! The quality of the fabrics is amazing, and the designs are always trendy. The staff are super friendly and helpful, making every shopping visit enjoyable and easy. Highly recommend!"}
                />
                <Cstomercard
                name={"Ziad M."}
                fedback={"I’ve shopped here several times, and I’m always satisfied. The material feels premium, and the styles are unique. Delivery was fast, and everything arrived neatly packed. Definitely one of my favorite clothing stores!"}
                />
            </div>
        </section>
  )
}

export default Customersh