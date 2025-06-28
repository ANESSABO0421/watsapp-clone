import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex fixed justify-between p-2 bg-green-500 text-white h-[80px] items-center w-full z-1'> 
            <div className='logo p-5 text-white'>
                <img src="watsapp.png" alt="" className='w-[100px]'/>
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
                <button className='bg-amber-50  text-black w-[120px] h-[50px] rounded-full '>Download</button>
                <button className='bg-amber-50  text-black w-[120px] h-[50px] rounded-full'>Log in</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar