import axios from 'axios';

const apiKey = 'f3dbd004bcb4be0212c1d9851f14f739';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const metric = 'metric';

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: metric
      },
    });

    return response?.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // You might want to handle this error in your component
  }
};

export default getWeatherData;
