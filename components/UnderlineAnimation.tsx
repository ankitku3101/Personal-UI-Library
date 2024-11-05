import React from 'react'

function UnderlineAnimation() {
  return (
    <div className='text-xs md:text-sm'>
        <div className="group relative">
            <div>Underline Animation (hover to see)</div>   
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#1E6AE1] group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#1E6AE1] group-hover:w-3/6"></span>
        </div>
    </div>
  )
}

export default UnderlineAnimation