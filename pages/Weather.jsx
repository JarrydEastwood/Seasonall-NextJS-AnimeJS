import React, { useEffect, useState } from 'react';


const weather = () => {

  // const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array
  const [newSunrise, setSunrise] = useState([]);
  const [newSunset, setSunset] = useState([]);
  const [newMaxTemp, setMaxTemp] = useState([]);
  const [newMinTemp, setMinTem] = useState([]);
  const [newRainfall, setRainfall] = useState([]);
  const [newSnowfall, setstoreSnowfall] = useState([]);
  const [datacheck, setDataCheck] = useState(false);
  
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
    console.log("This is weather Response");
    console.log(weatherResponse);

    var item = weatherResponse.daily;
        
    var calcMaxTemp = item.temperature_2m_max;
    var calcMinTemp = item.temperature_2m_min;
    var calcRainfall = item.rain_sum;
    var calcSnowfall = item.snowfall_sum;
    var calcSunrise = item.sunrise;
    var calcSunset = item.sunset;


    var avgMaxTemp = calcMaxTemp.reduce((a, b) => a + b) / calcMaxTemp.length;
    var avgMinTemp = calcMinTemp.reduce((a, b) => a + b) / calcMinTemp.length;
    var avgRainfall = calcRainfall.reduce((a, b) => a + b) / calcRainfall.length;
    var avgSnowfall = calcSnowfall.reduce((a, b) => a + b) / calcSnowfall.length;


    const avgSunrise = calcSunrise[45].slice(-5);
    const avgSunset = calcSunset[45].slice(-5);
    const storeMaxTemp = avgMaxTemp.toFixed(1);
    const storeMinTemp = avgMinTemp.toFixed(1);
    const storeRainfall = avgRainfall.toFixed(2);
    const storeSnowfall = avgSnowfall.toFixed(2);

    setSunrise(avgSunrise)
    setSunset(avgSunset)
    setMaxTemp(storeMaxTemp)
    setMinTem(storeMinTemp)
    setRainfall(storeRainfall)
    setstoreSnowfall(storeSnowfall)
    setDataCheck(true);
  
    console.log("sunrise = ", avgSunrise);
    console.log("sunset = ",avgSunset);
    console.log("Max Temp= ",storeMaxTemp);
    console.log("Min Temp = ",storeMinTemp);
    console.log("Rainfall = ",storeRainfall);
    console.log("Snowfall = ",storeSnowfall);
    console.log(datacheck);
    
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

      {datacheck ? 
      <div>
        <h1> This shouldnt show until there is data </h1>
            <h4>Sunrise = <span className='font-bold'>{newSunrise}</span></h4>
            <h4>Sunset = <span className='font-bold'>{newSunset}</span></h4>
            <h4>MaxTemp = <span className='font-bold'>{newMaxTemp}</span></h4>
            <h4>MinTemp = <span className='font-bold'>{newMinTemp}</span></h4>
            <h4>Rainfall = <span className='font-bold'>{newRainfall}</span></h4>
            <h4>Snowfall = <span className='font-bold'>{newSnowfall}</span></h4>
      </div>
      : ''}
    </>
  )
};

  export default weather;