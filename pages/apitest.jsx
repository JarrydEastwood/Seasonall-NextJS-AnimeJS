import { set } from 'animejs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const apiPage = () => {

  const [location, setLocation] = useState([]); //useState hook to initialize the state to an empty array
  const [weatherData, setWeatherData] = useState([]); //useState hook to initialize the state to an empty array
  
  useEffect(() => {
    const getData = async () => {
      const geoKey = '234979e2ff9e423095e4b2c869c1c97b'; //Move this to secure location
      const travelLocation = 'Marrakesh';
      const query = await fetch('https://api.geoapify.com/v1/geocode/search?text='+ travelLocation +
      "&limit=1&format=json&apiKey=" +
      geoKey);
      const response = await query.json();
      console.log(response);
      setWeatherData(response.results);
    }
    getData();
  
  }, []);
  return(
    <>

 <h1>test page for API Data</h1>

 <h4>Results go below here</h4> 
    
  <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
  {
  weatherData && weatherData.length && weatherData.map((result, i) => {
    return(
      <div key={i}>
        <h4 id="city">{result.city}</h4>
        <h4 id="country">{result.country}</h4>
        <h4 id="Timezone">{result.timezone.name}</h4>
      </div>
    )
    })
  }
  <Link href="/demo">
  <a href="/demo"
      className="px-4 md:px-8 py-2 md:py-3 rounded-full bg-blue-400 text-white font-bold uppercase border-blue-500 border hover:bg-blue-600"
      >
      Go back to Animation Demo Page        
      
    </a>
  </Link>
  </div>

    </>
  )
};

  
  export default apiPage;
  