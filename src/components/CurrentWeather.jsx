import React from 'react'

const CurrentWeather = () => {
  return (
    <div className='text-white flex flex-col w-[300px] md:w-[280px] lg:w-[280px] h-[240px] bg-[#1C1B1F] p-5 rounded-3xl justify-around'>
        <p>
            Now
        </p>
        <div className='inline-flex justify-between w-10/12'>
            <h1 className='text-6xl inline-flex'>5°<p className=' text-4xl '>c</p></h1>
            <img className=' h-16' src="src/assets/icons-cloud.png" alt="clouds logo" />
        </div>

        <h3>Message Here</h3>
        <div className=' h-[1px] w-full bg-zinc-600 mt-1 mb-1'></div>


        <div className=' inline-flex'>
            <img className='h-5 w-5 mr-2 self-end' src="src/assets/icons-cloud.png" alt="logo" />
            <h5 className=' text-zinc-500' >date 1,mar</h5>
        </div>

        <div className=' inline-flex'>
            <img className='h-5 w-5 mr-2 self-end' src="src/assets/icons-cloud.png" alt="logo" />
            <h5 className=' text-zinc-500' >loc london</h5>
        </div>
    </div>
  )
}

export default CurrentWeather