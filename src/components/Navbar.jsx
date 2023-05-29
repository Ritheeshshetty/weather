import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><i className="fa-brands fa-react fa-spin fa-xl" style={{color:"#00a0f0"}}></i> Weather-App</li>
        <li className='right'><Link className="nav-link " aria-current="page" write to="/">Home</Link></li>
        <li className='right'><Link className="nav-link" write to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar