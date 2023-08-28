import React from 'react'

const TodayAt = ({ hourlyData }) => {
    if (!hourlyData) {
        // If dailyData is not available, show a loading state or error message
        return <p className="w-full text-center">Loading...</p>;
    }
    
    const filteredData = hourlyData.filter((hourData, index) => index % 3 === 0).slice(0, 8);

    

    function getWeatherIcon(condition, hour) {

        switch (condition) {
          case 'Clear':
          case 'sunny':
            return `src/assets/icon-sun.png.png`; // Replace with the sunny weather icon
          case 'Partially cloudy':
            return 'src/assets/icons-partly-cloudy-day.png'; // Replace with the cloudy weather icon
          case 'Rain, Partially cloudy':
          case 'Rain, Overcast':
          case 'Rain':
            return 'src/assets/icons-heavy-rain.png'; // Replace with the rainy weather icon
          default:
            return ''; // If no matching condition is found, display a question mark
        }
      }

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      }


    return (
// md:w-fit lg:w-fit
        <div className='flex flex-row w-[300px] lg:w-fit flex-wrap'>
            {filteredData.map((hourData, index) => (
              

                <div className='bg-[#1C1B1F] rounded-3xl flex flex-col text-center text-white text-md justify-center h-[120px] w-[85px] mt-2 mr-3' key={index}>
                    <h1 className='m-1 '>{formatTime(hourData.datetimeStr)}</h1>
                    <h1 className='m-1 '>{hourData.conditions}</h1>\
                    <img className='m-1 w-6 self-center' src={getWeatherIcon(hourData.conditions, hourData.datetimeStr)} alt="icon" />
                    <h2 className='m-1 '>{Math.round(hourData.temp)}°</h2>
                </div>
            ))
            }
        </div>
    )
}

export default TodayAt



