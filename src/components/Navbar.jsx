import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex fixed justify-between p-2  text-black h-[80px] items-center w-full z-1 backdrop-blur-md bg-[#FCF5EB]/50'> 
            <div className='logo p-5 text-white'>
                <img src="whatsapp.svg" alt="" className='w-[100px]'/>
            </div>
            <div className='flex gap-8'>
                <a href="#">features</a>
                <a href="#">Privacy</a>
                <a href="#">Help Center</a>
                <a href="#">Blog</a>
                <a href="#">For Buisness</a>
                <a href="#">Apps</a>
            </div>
            <div className='buttons flex gap-2'>
                <button className='bg-white text-black w-[120px] h-[50px] rounded-full outline-2 outline-black'>Download</button>
                <button className='bg-green-500  text-black w-[120px] h-[50px] rounded-full outline-2 outline-black'>Log in</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar