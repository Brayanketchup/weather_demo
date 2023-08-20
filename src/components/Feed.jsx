
import React from 'react'
import NavBar from './navbar';
import CurrentWeather from './CurrentWeather';
import NextDaysForecast from './NextDaysForecast';
import Highlights from './Highlights';
import TodayAt from './TodayAt';



const Feed = () => {
  return (
    <>
      <NavBar />
      <div className='w-full'>
        <div className='flex sm:flex-row justify-center flex-wrap '>
          <div className='md:m-3 sm:mb-3'>
            <CurrentWeather />
            <h3 className='text-white mt-2 mb-2'>5 Days Forecast</h3>
            <NextDaysForecast />
          </div>
          <div className='m-3'>
            <Highlights/>
            <h3 className='text-white mt-2 mb-2'>Today At</h3>
            <TodayAt/>
          </div>

        </div>
      </div>



    </>
  )
}

export default Feed