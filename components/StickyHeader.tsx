import React from 'react'

function StickyHeader() {
  return (
    <div className='text-center text-xs md:text-base'>
      <header className='sticky top-0 backdrop-blur-sm z-20'>
          <nav className='gap-6 flex text-white/75 items-center bg-black rounded-full shadow-lg px-6 py-2'>
            <p className='cursor-pointer hover:text-white'>Home</p>
            <p className='cursor-pointer hover:text-white'>About</p>
            <p className='cursor-pointer hover:text-white'>Features</p>
            <p className='cursor-pointer hover:text-white'>Contact</p>
            <p className='cursor-pointer hover:text-white'>Profile</p>
          </nav>
      </header>
      <p className='p-2 tracking-tight'>Sticky Header/Navbar</p>
    </div>
  )
}

export default StickyHeader