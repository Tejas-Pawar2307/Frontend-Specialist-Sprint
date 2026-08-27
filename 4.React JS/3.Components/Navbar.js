import {Link} from 'react-router-dom';
import React from 'react';

export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <ul className='flex gap-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
    </ul>

    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light' }`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
    </div>
</nav>

  )
}
