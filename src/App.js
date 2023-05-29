import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  // HashRouter,
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// import Spinner from './components/Spinner';
import About from './components/About';

// import axios from 'axios';

function App() {
  // const url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=970541b761efccad1c87f58b3012d312'
  const [data, setData] = useState([])
  const [location, setLocation] = useState('udupi')
  const api='7491bada11271bec6f79c2530fa0f58e'
  // const api=''
  const geo=`https://api.openweathermap.org/geo/1.0/direct?q=${location},3166-2:INlimit={limit}&appid=${api}`
  
  
  const display=async()=>{
      let weather=await fetch(geo)
      let parsedData=await weather.json();
      parsedData.map((d)=>{
      // console.log(d.lat,d.lon)
      return coordinates(d.lat,d.lon)
    })
    
  }
  // display();
  useEffect(() => {
   display();
    // eslint-disable-next-line
  }, [])
  const coordinates=async(lat,lon)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`
    let weather=await fetch(url)
    let parsedData=await weather.json();
    // console.log(parsedData)
    setData(parsedData)
    console.log(parsedData)
  }

  // display();
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      {/* <Spinner/> */}
      <Routes>
      <Route exact path='/'element={<Home location={location} setLocation={setLocation} display={display} data={data}/>}/>
      <Route exact path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
