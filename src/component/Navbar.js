import React from 'react';
import { Link,} from 'react-router-dom';

const Navbar = () => {
  return <div className='NavbarStyle'>
         <Link className='link-style' to="/">Home</Link>
         <Link className='link-style' to="/About">About</Link>
         <Link className='link-style' to="/Contact">Contact</Link>
  </div>;
};

export default Navbar;

