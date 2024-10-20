import React, { useState, useRef } from 'react';
import './Weather.css';
import { IoSunny, IoCloud, IoRainy, IoSnow } from "react-icons/io5"; // Import icons for weather conditions

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  // Static weather data for multiple cities in India
  const staticWeatherData = {
    "Indore": {
      humidity: 75,
      windSpeed: 10,
      temperature: 22,
      icon: <IoSunny size={50}/>,
    },
    "Mumbai": {
      humidity: 80,
      windSpeed: 15,
      temperature: 28,
      icon: <IoRainy size={50}/>,
    },
    "Delhi": {
      humidity: 60,
      windSpeed: 12,
      temperature: 30,
      icon: <IoSunny size={50}/>,
    },
    "Bangalore": {
      humidity: 65,
      windSpeed: 8,
      temperature: 25,
      icon: <IoCloud size={50}/>,
    },
    "Chennai": {
      humidity: 70,
      windSpeed: 10,
      temperature: 32,
      icon: <IoSunny size={50}/>,
    },
    "Kolkata": {
      humidity: 78,
      windSpeed: 12,
      temperature: 29,
      icon: <IoCloud size={50}/>,
    },
    "Hyderabad": {
      humidity: 72,
      windSpeed: 14,
      temperature: 27,
      icon: <IoSunny size={50}/>,
    },
    "Ahmedabad": {
      humidity: 65,
      windSpeed: 11,
      temperature: 33,
      icon: <IoSunny size={50}/>,
    },
    "Pune": {
      humidity: 68,
      windSpeed: 9,
      temperature: 26,
      icon: <IoCloud size={50}/>,
    },
    "Jaipur": {
      humidity: 55,
      windSpeed: 10,
      temperature: 34,
      icon: <IoSunny size={50}/>,
    },
    "Surat": {
      humidity: 73,
      windSpeed: 13,
      temperature: 30,
      icon: <IoSunny size={50}/>,
    },
    "Lucknow": {
      humidity: 65,
      windSpeed: 8,
      temperature: 28,
      icon: <IoSunny size={50}/>,
    },
    "Kanpur": {
      humidity: 60,
      windSpeed: 10,
      temperature: 27,
      icon: <IoCloud size={50}/>,
    },
    "Nagpur": {
      humidity: 72,
      windSpeed: 12,
      temperature: 29,
      icon: <IoSunny size={50}/>,
    },
    "Visakhapatnam": {
      humidity: 78,
      windSpeed: 15,
      temperature: 26,
      icon: <IoCloud size={50}/>,
    },
    "Vadodara": {
      humidity: 66,
      windSpeed: 11,
      temperature: 31,
      icon: <IoSunny size={50} />,
    },
    "Bhopal": {
      humidity: 70,
      windSpeed: 9,
      temperature: 24,
      icon: <IoRainy size={50} />,
    },
    "Coimbatore": {
      humidity: 68,
      windSpeed: 10,
      temperature: 26,
      icon: <IoSunny size={50} />,
    },
    "Nashik": {
      humidity: 62,
      windSpeed: 12,
      temperature: 29,
      icon: <IoCloud size={50}/>,
    },
    "Madurai": {
      humidity: 65,
      windSpeed: 10,
      temperature: 34,
      icon: <IoSunny size={50}/>,
    },
    "Rajkot": {
      humidity: 58,
      windSpeed: 9,
      temperature: 32,
      icon: <IoSunny size={50}/>,
    },
    "Agra": {
      humidity: 65,
      windSpeed: 8,
      temperature: 30,
      icon: <IoSunny size={50}/>,
    },
    "Amritsar": {
      humidity: 60,
      windSpeed: 10,
      temperature: 28,
      icon: <IoSunny size={50}/>,
    },
    "Gurgaon": {
      humidity: 70,
      windSpeed: 12,
      temperature: 29,
      icon: <IoCloud size={50}/>,
    },
    "Ranchi": {
      humidity: 75,
      windSpeed: 10,
      temperature: 22,
      icon: <IoRainy size={50}/>,
    },
    "Varanasi": {
      humidity: 72,
      windSpeed: 11,
      temperature: 27,
      icon: <IoSunny size={50} />,
    },
    "Dehradun": {
      humidity: 68,
      windSpeed: 9,
      temperature: 26,
      icon: <IoCloud size={50}/>,
    },
    "Kota": {
      humidity: 63,
      windSpeed: 12,
      temperature: 33,
      icon: <IoSunny size={50} />,
    },
    "Kochi": {
      humidity: 80,
      windSpeed: 15,
      temperature: 27,
      icon: <IoRainy  size={50}/>,
    },
    "Thiruvananthapuram": {
      humidity: 75,
      windSpeed: 14,
      temperature: 28,
      icon: <IoSunny  size={50}/>,
    },
  };

  const search = (city) => {
    if (city === '') {
      alert('Enter City Name');
      return;
    }

    const cityData = staticWeatherData[city];
    if (cityData) {
      setWeatherData(cityData);
    } else {
      alert('City not found. Please try another city.');
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search City" />
        <img
          src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg"
          height="50vh"
          alt="Search Icon"
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      {weatherData ? (
        <>
          <div className="weather-icon">{weatherData.icon}</div>
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{inputRef.current.value}</p>

          <div className="weather-data">
            <div className="col">
              <IoSunny />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <IoRainy />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
