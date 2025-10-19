import React, { useState } from 'react'

const Uptodate = () => {
    const [email,setEmail] = useState("");
    const [erorr,setErorr] = useState("");
    
    const validdata = (value) =>  {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value)
    }

    const handlesub = (e) => {
        e.preventDefault();

        if (!validdata(email)) {
            setErorr("Please enter a valid email");
            setEmail("");
        } else {
            setErorr("");
            setEmail("");
        }
    }

  return (
    <div className=' w-[1240px] h-[180px] m-auto bg-black rounded-3xl px-20 flex justify-between items-center content-center flex-wrap'>
        <h2 className='Theading text-white text-[40px] w-[551px]'>STAY UPTO DATE ABOUT OUR LASTEST OFFERS</h2>
        <form onSubmit={handlesub} className='w-[350px] flex flex-col items-center gap-5'>
            {erorr && <span className='text-white'>{erorr}</span>}
            <input 
            className=' w-[350px] h-[48px] bg-white rounded-3xl px-[20px]'
            type="name"
            name='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)
            }
            />
            <button type='submit' className='w-[350px] h-[48px] bg-white rounded-3xl hover:bg-[#8A8A8A]  transition-all duration-300 ease-in-out '>Subscribe to Newsletter</button>
        </form>
    </div>
  )
}

export default Uptodate