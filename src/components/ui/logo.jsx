import React from 'react'

export default function Logo({className}) {
  return (
    <div>
        <div className={`${className} flex w-full overflow-hidden`}>
            <img src="/PokeBall.png" alt="placeholder" className=' w-16 h-16' />
            <img src="PokeFinder-Logo.png" alt="placeholder" className='w-38 h-16'/>
        </div>
    </div>
  )
}
