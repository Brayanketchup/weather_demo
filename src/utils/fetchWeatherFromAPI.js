import axios from 'axios';

export default async function fetchWeatherData(CityName, hours) {


    const BASE_URL = 'https://visual-crossing-weather.p.rapidapi.com/forecast';

    const options = {
        method: 'GET',
        url: BASE_URL,
        params: {
            aggregateHours: hours,
            location: CityName,
            contentType: 'json',
            unitGroup: 'us',
            shortColumnNames: '0'
        },
        headers: {
            'X-RapidAPI-Key': '77e0ba7236mshcff3b078dc3937cp1d8eefjsnb04d71d3088c',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }

}

