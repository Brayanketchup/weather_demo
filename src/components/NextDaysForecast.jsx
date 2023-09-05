import React from 'react'

const NextDaysForecast = ({ dailyData }) => {
    if (!dailyData) {
        // If dailyData is not available, show a loading state or error message
        return <p className="w-full text-center">Loading...</p>;
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);

        const options = { month: 'short', day: 'numeric'};
        return date.toLocaleDateString(undefined, options);
    }
    function formatDay(dateStr) {
        const date = new Date(dateStr);

        const options = { weekday: 'long' };
        return date.toLocaleDateString(undefined, options);
    }

    function getWeatherIcon(condition) {

          switch (condition) {
            case 'Clear':
            case 'sunny':
              return `src/assets/icon-sun.png`; //day sunny weather icon
            case 'Partially cloudy':
              return 'src/assets/icons-partly-cloudy-day.png'; //day cloudy weather icon
            case 'Rain, Partially cloudy':
            case 'Rain, Overcast':
            case 'Rain':
              return 'src/assets/icons-heavy-rain.png'; //rainy weather icon
            default:
              return ''; // If no matching condition is found
        }
    }

    return (
        <div className='flex flex-col w-[280px] bg-[#1C1B1F] p-5 rounded-3xl justify-around'>
            {
                dailyData.slice(1, 8).map((dayData, index) => (
                    
                    <div className='flex flex-row place-content-between ' key={index}>
                        <div className='flex flex-row'>
                            <img className='h-5 pr-2 self-end' src={getWeatherIcon(dayData.conditions)} alt="icon" />
                            <h1 className='text-white'>{Math.round(dayData.temp)}°</h1>
                        </div>
                        <h5 className='text-zinc-500'>
                        {formatDate(dayData.datetimeStr)}
                        </h5>
                        <h5 className='text-zinc-500'>
                        {formatDay(dayData.datetimeStr)}
                        </h5>
                    </div>


                ))
            }
        </div>


    )
}

export default NextDaysForecast