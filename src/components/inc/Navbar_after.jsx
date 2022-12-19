import React, {Stylesheet} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartArea, FaHome, FaInfo, FaMap, FaPoll, FaVoteYea } from 'react-icons/fa';


function Navbarbefore() {
    const location = useLocation();
    return (
        <header id="header" className="header d-flex align-items-center" >
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between" >
    <a href="index.html" className="logo d-flex align-items-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1>LMIS<span>.</span></h1>
    </a>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li> <Link  to="/Indicators">Indicators</Link></li>
        <li><a href="#services">Sectors</a></li>
        <li><Link  to="/Occupation">Occupation</Link></li>
        <li><a href="#team">States</a></li>
        <li><Link  to="/Data">Data Insights</Link></li>
        <li className="dropdown"><a href="#"><span>More Tools</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
          <ul>
            <li><a href="#">Find Jobs</a></li>
            <li className="dropdown"><a href="#"><span>Online Tools</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
              <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">National Plan</a></li>
                <li><a href="#">Budget</a></li>
                <li><a href="#">Summary</a></li>
             
              </ul>
            </li>
            <li><a href="#">Jobs Statistics</a></li>
            <li><a href="#">Infographs</a></li>
            <li><a href="#">Contact NLMIS</a></li>
          </ul>
        </li>
        <li><a href="#contact">About LMIS</a></li>
      </ul>
    </nav>{/* .navbar */}
    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
  </div>
</header>

    );
}

export default Navbarbefore;
