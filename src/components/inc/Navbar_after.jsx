import React, {Stylesheet} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartArea, FaHome, FaInfo, FaMap, FaPoll, FaVoteYea } from 'react-icons/fa';


function Navbarbefore() {
    const location = useLocation();
    return (
        <header id="header" className="header d-flex align-items-center" >
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between" >
    <Link href="index.html" className="logo d-flex align-items-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1>LMIS<span>.</span></h1>
    </Link>
    <nav id="navbar" className="navbar">
      <ul>
        <li><Link  to="/">Home</Link></li>
        <li> <Link  to="/Indicators">Indicators</Link></li>
        <li><Link to="/sector">Sectors</Link></li>
        <li><Link  to="/Occupation">Occupation</Link></li>
        <li><Link to="/country">States</Link></li>
        <li><Link  to="/Data">Data Insights</Link></li>
        <li className="dropdown"><Link href="#"><span>More Tools</span> <i className="bi bi-chevron-down dropdown-indicator" /></Link>
          <ul>
            <li><a href="https://www.nelexnigeria.com">Find Jobs</a></li>
            <li className="dropdown"><Link to="/tools"><span>Online Tools</span> <i className="bi bi-chevron-down dropdown-indicator" /></Link>
              <ul>
                <li><Link to='/'>Overview</Link></li>
                <li><Link to='/'>National Plan</Link></li>
                <li><Link to='/'>Budget</Link></li>
                <li><Link to='/'>Summary</Link></li>
             
              </ul>
            </li>
            <li><Link to='/job-statistics'>Jobs Statistics</Link></li>
            <li><Link to='/infographs'>Infographs</Link></li>
            <li><Link to='/'>Contact LMIS</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About LMIS</Link></li>
      </ul>
    </nav>{/* .navbar */}
    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
  </div>
</header>

    );
}

export default Navbarbefore;
