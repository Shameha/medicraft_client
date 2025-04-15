// import React from 'react';
import { Link } from "react-router-dom";
import image from "../../../assets/png-transparent-hospital-logo-clinic-health-care-physician-business-thumbnail.png"


const Navbar = () => {
    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/article">Article</Link></li>
        
    </>
    return (
        <div>

<div className="navbar bg-blue-400 text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-blue-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
  {navOptions}

      </ul>
    </div>
  <img className="rounded-full" src={image} width={50} height={50} alt="" />
  <a className="btn btn-ghost font-bold text-white text-2xl">
  Medicraft
  </a>     
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

        </div>
    );
};

export default Navbar;