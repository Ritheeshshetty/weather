import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {
  const [data, setData] = useState([])  //useState hook and state management
  const [location, setLocation] = useState('udupi')  //useState hook and state management
  const api='7491bada11271bec6f79c2530fa0f58e'
  const geo=`https://api.openweathermap.org/geo/1.0/direct?q=${location},3166-2:INlimit={limit}&appid=${api}`
  
  //Reverse geolocation --> this part of code takes fetches api data and returns latitude, longitude.
  const display=async()=>{
      let weather=await fetch(geo)
      let parsedData=await weather.json();
      parsedData.map((d)=>{
      return coordinates(d.lat,d.lon)
    })
    
  }

  // it runs the display() function for on reloading the page 
  useEffect(() => {
   display();
    // eslint-disable-next-line
  }, [])

  // Fetches the weather data from api by the help of latitude and longitude
  // and returns parsedData, which will be later on passed to home.jsx component.
  const coordinates=async(lat,lon)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`
    let weather=await fetch(url)
    let parsedData=await weather.json();
    setData(parsedData)
    console.log(parsedData)
  }

  return (
    <>
    {/* Basic router is implemented using react-router-dom */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home location={location} setLocation={setLocation} display={display} data={data}/>}/>
      {/* Route is used to navigate through different componets 
      and in element we will pass data as props to prefered components */}
      <Route exact path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
