import React from 'react'
import Spinner from './Spinner';

const Home = (props) => {
    // used to fetch data based on user input 
    const handlesubmit=(e)=>{
        if(e.key==='Enter'){
            e.preventDefault();
        props.display()
        props.setLocation('')
    }
    }
  return (
    <>
        <div className='home'>
            {props.data.name===undefined?<Spinner/>:""}{/* only uses loading screen when data is being fetched */}
        {props.data.name!==undefined&&
            <div className="container">
            
                <div className="search">
                <form action="">
                    <input type="text" placeholder='search' value={props.location} onChange={e=>props.setLocation(e.target.value)} onKeyDown={(e) => handlesubmit(e)} autoFocus={'on'}/>
                </form>
                </div>
         
            
                <div className="top">
                    <div className="location">
                        <p>{props.data.name}</p>
                    </div>
                    <div className="temp">
                        {props.data.main?<h1>{((props.data.main.temp-32)*5/9).toFixed()}°C</h1>:null}
                    </div>
                    
                    <div className="description">
                        {props.data.weather?<p>{props.data.weather[0].main}</p>:null}
                    </div>
                </div>
                
                {props.data.name!==undefined&&
                                    <div className="bottom">
                                    <div className="feels">
                                        {props.data.main?<p className='bold'>{props.data.main.feels_like.toFixed()}°F</p>:null}
                                        <p><i className="fa-solid fa-temperature-high fa-lg"></i></p>
                                    </div>
                                    <div className="humidity">
                                        {props.data.main?<p className='bold'>{props.data.main.humidity}%</p>:null}
                                        <p><i className="fa-solid fa-snowflake fa-lg"></i></p>
                                    </div>
                                    <div className="wind">
                                        {props.data.wind?<p className="bold">{props.data.wind.speed.toFixed()}MPH</p>:null}
                                        <p><i className="fa-solid fa-wind fa-lg"></i></p>
                                    </div>
                                </div>
                }
            </div>
               }
        </div>
    </>
  )
}

export default Home