// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Navbarbefore from "./Navbarbefore";
import NavbarAfter from "./Navbar_after";

function Common() {
  
  return (
    <>
      <Navbarbefore />
      {/* <Navbar /> */}
      <NavbarAfter />
      </>
  );
}

export default Common;
