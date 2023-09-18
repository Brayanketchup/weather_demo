
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import NextDaysForecast from './NextDaysForecast';
import Highlights from './Highlights';
import TodayAt from './TodayAt';
import fetchWeatherData from '../utils/fetchWeatherFromAPI';
import fetchCurrentLocation from '../utils/fetchCurrentLocation';


const Feed = () => {

  const [cityData, setCityData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [hourlyData, sethourlyData] = useState(null);

  useEffect(() => {
    currentLocationWheather();
  }, []);


  const currentLocationWheather = () => {
    fetchCurrentLocation()
      .then((stateName) => {

        fetchWeatherData(stateName, 24)
          .then((data) => {
            if (data.errorCode != null) {
              console.log("Error:", data.message);
            } else {

              setCityData(data.locations[stateName]);
              setDailyData(data.locations[stateName].values);
            }
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });

        //every 3 hours for "today at"
        fetchWeatherData(stateName, 1)
          .then((data) => {


            sethourlyData(data.locations[stateName].values);

          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });

      })
      .catch((error) => {
        console.error('Error getting current location:', error);
      });

  }



//calling the debounce function and passing the parameters
  const updateDebounceText = debounce(searchData => {

    fetchWeatherData(searchData, 24)
      .then((data) => {
        if (data.errorCode != null) {
          console.log("Error:", data.message);
        } else {
          console.log(data);

          setCityData(data.locations[searchData]);
          setDailyData(data.locations[searchData].values);
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

    //every 3 hours for "today at"
    fetchWeatherData(searchData, 1)
      .then((data) => {


        sethourlyData(data.locations[searchData].values);

      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

  }, 1000)

//dec of debounce function
  function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args);
      }, delay)

    }
  }

  return (
    <>
      <NavBar currentLocationWheather={currentLocationWheather}/>
      <SearchBar onSearchChange={updateDebounceText} />
      <div className='w-full'>
        <div className='flex justify-center lg:items-start items-center lg:flex-row flex-col'>
          <div className='md:m-3 md:mb-3'>
            <CurrentWeather
              cityData={cityData}
              dailyData={dailyData}
            />
            <h3 className='text-white mt-2 mb-2'>5 Days Forecast</h3>
            <NextDaysForecast
              dailyData={dailyData}
            />
          </div>
          <div className='m-3 sm:flex flex-col items-center lg:items-start'>
            <Highlights
              cityData={cityData}
            />
            <h3 className='text-white mt-2 mb-2'>Today At</h3>
            <TodayAt
              hourlyData={hourlyData}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed