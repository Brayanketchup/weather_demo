import React from 'react'

const Highlights = ({cityData}) => {
    if (!cityData) {
        // If dailyData is not available, show a loading state or error message
        return <p className="w-full text-center">Loading...</p>;
    }

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      }

    let {
        address: cityAddress,
        currentConditions: {
            icon: weatherIcon,
            wdir: windDirection,
            visibility,
            precip: precipitation,
            sealevelpressure: pressure,
            heatindex: feelsLike,
            wspd: windSpeed,
            humidity,
            sunrise,
            sunset,
        },
    } = cityData;

    return (
        <div className='flex flex-col w-[300px] md:w-fit lg:w-fit h-fit bg-[#1C1B1F] p-5 rounded-3xl justify-around'>
            <h1 className='text-white'>
                Todays Highlights
            </h1>
            <div>
                <div className='flex flex-col lg:flex-row '>
                    <div className=' flex flex-col bg-[#1b191d]  p-5 m-2 rounded-3xl justify-around text-white'>
                        <h1 className=''>Sunrise & Sunset</h1>
                        <div className='flex flex-row'>
                            <div className='w-[150px] flex flex-row'>
                                <img className='h-6 self-center md:self-end' src="src\assets\icons-sunrise.png" alt="icon" />
                                <div className='flex flex-col'>
                                    <p className='text-xs text-zinc-500'>Sunrise</p>
                                    <h1 className='pl-2 text-xl'>{formatTime(sunrise)}</h1>
                                </div>
                            </div>
                            <div className='w-[150px] flex flex-row'>
                                <img className='h-6 self-center md:self-end' src="src\assets\icons-sunset.png" alt="icon" />
                                <div className='flex flex-col'>
                                    <p className='text-xs text-zinc-500'>Sunset</p>
                                    <h1 className='pl-2 text-xl'>{formatTime(sunset)}</h1>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white'>
                        <h1 className=''>Wind</h1>
                        <div className='flex flex-row'>
                            <div className='w-[150px] flex flex-row'>
                                <img className='h-6 self-center md:self-end' src="src\assets\icons-wind.png" alt="icon" />
                                <div className='flex flex-col'>
                                    <p className='text-xs text-zinc-500'>Wind Speed</p>
                                    <h1 className='pl-2 text-xl'>{windSpeed} mph</h1>
                                </div>
                            </div>
                            <div className='w-[150px] flex flex-row'>
                                <img className='h-6 self-center md:self-end' src="src\assets\icons-wind-rose.png" alt="icon" />
                                <div className='flex flex-col'>
                                    <p className='text-xs text-zinc-500'>Wind direction</p>
                                    <h1 className='pl-2 text-xl'>{windDirection} deg</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='flex flex-col lg:flex-row'>
                    
                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Humidity</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-wet.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>{humidity === null ? 'N/A' : `${humidity} %`}</h1>
                        </div>
                    </div>
                    

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>pressure</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-wave-lines.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>{pressure === null ? 'N/A' : `${pressure} mb`}</h1>
                        </div>
                    </div>

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Visibility</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-visibility.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>{visibility === null ? 'N/A' : `${visibility} miles`}</h1>
                        </div>
                    </div>

                    <div className=' flex flex-col bg-[#1b191d] p-5 m-2 rounded-3xl justify-around text-white' >
                        <h3 className='text-xs text-zinc-500'>Precipitation</h3>
                        <div className='flex flex-row place-content-between'>
                            <img className=' h-6 self-end' src="src\assets\icons-umbrella.png" alt="Icon" />
                            <h1 className='pl-2 text-xl'>{precipitation === null ? 'N/A' : `${precipitation} In`}</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Highlights