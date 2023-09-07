import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const weather = () => {

  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array
  const [weatherData, setWeatherData] = [
    {maxTemp: String},
    {minTemp: String},
    {rainfall: String},
    {snowfall: String},
    {sunrise: String},
    {sunset: String},
  
    //  ^^^ Trying to set the values of an array of objects
  ];
  
    const getData = async () => {
      const travelLat = "34.337306";
      const travelLong = "-118.6681779";
      const weatherDateStart = "2020-12-01";
      const weatherDateEnd = "2021-02-28";

      const weatherQuery = await fetch("https://archive-api.open-meteo.com/v1/era5?latitude=" +
      travelLat +
      "&longitude=" +
      travelLong +
      "&start_date=" +
      weatherDateStart +
      "&end_date=" +
      weatherDateEnd +
      "&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum"
      );
      const weatherResponse = await weatherQuery.json();
      console.log(weatherResponse);


      var item = weatherResponse.daily;
          
      var calcMaxTemp = item.temperature_2m_max;
      var calcMinTemp = item.temperature_2m_min;
      var calcRainfall = item.rain_sum;
      var calcSnowfall = item.snowfall_sum;
      var calcSunrise = item.sunrise;
      var calcSunset = item.sunset;

      var avgSunrise = calcSunrise[45].slice(-5);
      var avgSunset = calcSunset[45].slice(-5);
      var avgMaxTemp = calcMaxTemp.reduce((a, b) => a + b) / calcMaxTemp.length;
      var avgMinTemp = calcMinTemp.reduce((a, b) => a + b) / calcMinTemp.length;
      var avgRainfall = calcRainfall.reduce((a, b) => a + b) / calcRainfall.length;
      var avgSnowfall = calcSnowfall.reduce((a, b) => a + b) / calcSnowfall.length;
      
      var storeMaxTemp = avgMaxTemp.toFixed(1);
      var storeMinTemp = avgMinTemp.toFixed(1);
      var storeRainfall = avgRainfall.toFixed(2);
      var storeSnowfall = avgSnowfall.toFixed(2);
      
      const storage = [
        {maxTemp: storeMaxTemp}, 
        {minTemp: storeMinTemp}, 
        {rainfall: storeRainfall}, 
        {snowfall: storeSnowfall}, 
        {sunrise: avgSunrise}, 
        {sunset: avgSunset},
      ];

      setWeatherData(storage);
    //    trying to set the values of an array of objects
      console.log(weatherData);
    //   show the objects!!
    };
    
  return(
    <>
    <div className="w-1/2 m-16 xl:w-2/5 justify-center overflow-y-hidden">
      <h1 className="text-xl">test component for weather Data</h1>

      <button onClick={() => getData("Memphis")}      
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 my-4 mx-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Get Weather Data
      </button>
    </div>

  {/* <div className="flex flex-col w-full m-16 xl:w-2/5 justify-center overflow-y-hidden">
    

            <h4 id="maxTemp">Max Temp = <span className='font-bold'>{weatherData.maxTemp}</span></h4>
            <h4 id="minTemp">Min Temp = <span className='font-bold'>{weatherData.minTemp}</span></h4>
            <h4 id="rainfall">Rainfall = <span className='font-bold'>{weatherData.rainfall}</span></h4>
            <h4 id="snowfall">Snowfall = <span className='font-bold'>{weatherData.snowfall}</span></h4>
            <h4 id="sunrise">Sunrise = <span className='font-bold'>{weatherData.sunrise}</span></h4>
            <h4 id="sunset">Sunset = <span className='font-bold'>{weatherData.sunset}</span></h4>
    
// This part doesnt work yet...

  </div> */}

    </>
  )
};

  export default weather;