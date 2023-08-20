import React from 'react';
import SearchBar from './searchbar';
import Currentloc from './CurrentLoc';
import NavLogo from './NavLogo';

import fetchWeatherData from "../utils/fetchWeatherFromAPI";
import fetchCurrentLocation from "../utils/fetchCurrentLocation";


//search bar response
const updateDebounceText = debounce(searchData => {

    fetchWeatherData(searchData)
      .then((data) => {
        if (data.errorCode != null) {
          console.log("Error:", data.message);
        } else {
          console.log(data);

          setCityData(data.locations[searchData]);
          setDailyData(data.locations[searchData].values);
          setIsCityActive(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

  }, 500)


  function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args);
      }, delay)

    }
  }





const NavBar = () => {
  return (

    <div className=' flex flex-row items-center w-full p-5'>
        <NavLogo/>
        <SearchBar onSearchChange={updateDebounceText}/>
        <Currentloc/>
    </div>
  )
}

export default NavBar