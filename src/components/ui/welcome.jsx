import React from 'react';

export default function Welcome({className}) {
  return (
    <div className={`${className} self-center text-center text-white`}>
      <h1 className='text text-4xl font-bold '>Welcome to</h1>
      <div className="flex w-full overflow-hidden">
        <img src="/PokeBall.png" alt="placeholder" className=' w-16 h-16' />
        <img src="PokeFinder-Logo.png" alt="placeholder" className='w-38 h-16'/>
      </div>
      <p className='text-lg font-bold'>Search to get started!</p>
    </div>
  );
}
    
  

