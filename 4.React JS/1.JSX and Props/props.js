import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
<nav>
    <ul className='flex gap-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><a to="#pricing">contact</a></li>
    </ul>

    <form>
        <input type="text" placeholder="Search"/>
        <button type="submit">Search</button>
    </form>

    <br/>

    <link to="#get-started">
        <button>Start</button>
    </link>
<nav/>
    )
}
