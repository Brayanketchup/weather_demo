import React from 'react'

const CurrentWeather = ({ cityData, dailyData }) => {
  if (!cityData || !dailyData) {
    // If cityData is not available, show a loading state or error message
    return <p className="w-full text-center text-white">Loading...</p>;
  }

  const formattedDate = formatDate(new Date());

  let {
    address: cityAddress,
    currentConditions: {
      temp: temperature,
      humidity,
      visibility,
      icon: weatherIcon,
      wspd: windSpeed,
      precip: precipitation,
      sunrise,
      sunset,
    },
  } = cityData;


  return (
    <div className='text-white flex flex-col w-[280px] md:w-[280px] lg:w-[280px] h-[240px] bg-[#1C1B1F] p-5 rounded-3xl justify-around'>
      <p>Now</p>
      <div className='inline-flex w-10/12'>
        <img className=' h-12 self-end' src='src\assets\icons-thermometer.png' alt="clouds logo" />
        <h1 className='text-6xl inline-flex'>{Math.round(temperature)}°<p className=' text-4xl '>c</p></h1>

      </div>

      <h3>{dailyData[0].conditions}</h3>
      <div className=' h-[1px] w-full bg-zinc-600 mt-1 mb-1'></div>


      <div className=' inline-flex'>
        <img className='h-5 w-5 mr-2 self-end' src="src/assets/icons-calendar.png" alt="logo" />
        <h5 className=' text-zinc-500' >{formattedDate}</h5>
      </div>

      <div className=' inline-flex'>
        <img className='h-5 w-5 mr-2 self-end' src="src/assets/icons-location.png" alt="logo" />
        <h5 className=' text-zinc-500' >{cityAddress}</h5>
      </div>
    </div>
  )
}


function formatDate(date) {
  const options = { month: 'short', day: 'numeric', weekday: 'short' };
  return date.toLocaleDateString(undefined, options);
}


export default CurrentWeather