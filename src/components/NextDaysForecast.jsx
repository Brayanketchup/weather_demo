import React from 'react'

const NextDaysForecast = () => {
  return (
    <div className='flex flex-col w-[300px] bg-[#1C1B1F] p-5 rounded-3xl justify-around'>
        <div className='flex flex-row place-content-between '>
            <div className='flex flex-row'>
                <img className='h-5 pr-2 self-end' src="src/assets/icons-cloud.png" alt="icon"/>
                <h1 className='text-white'>7°</h1>
            </div>
            <h5 className='text-zinc-500'>
                5 Mar
            </h5>
            <h5 className='text-zinc-500'>
                thursday
            </h5>
        </div>
    </div>
  )
}

export default NextDaysForecast