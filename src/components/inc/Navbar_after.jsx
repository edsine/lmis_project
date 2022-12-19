import React, {Stylesheet} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartArea, FaHome, FaInfo, FaMap, FaPoll, FaVoteYea } from 'react-icons/fa';


function Navbarbefore() {
    const location = useLocation();
    return (
        <section className='bg-white shadow'>
            <div className="container container1 col-md-12" >
                <center>
            <nav className="collapse navbar-collapse" id="navbarSupportedContent" role="navigation" >
                    <div className="top-bar-right">
                      <ul className="menu vertical bg_light" style={{listStyle: 'none'}} data-responsive-menu="drilldown" data-parent-link="true">
                      <li style={{ backgroundColor: location.pathname == '/' ? '#0A6921' : '' }} class="nav-item col-md-2" role="presentation">
                        <Link  to="/" style={{}} class="nav-link "> <FaHome style={{ fontSize: '25px' }} /> <br /><br /> Introduction</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/Indicators' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link  to="/Indicators" style={{ color: location.pathname == '/Indicators' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false" > <FaMap style={{ fontSize: '25px' }}/> <br /><br /> Indicators</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/sector' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/sector' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-3" to="/sector" role="tab"
                            aria-controls="ex-with-icons-tabs-3" aria-selected="false"><FaVoteYea style={{ fontSize: '25px' }}/> <br /><br /> Sectors </Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/Occupations' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/Occupations' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" to="/Occupations" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaInfo style={{ fontSize: '25px' }}/> <br /><br /> Occupations</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/country' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/country' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" to="/country" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaPoll style={{ fontSize: '25px' }}/> <br /><br /> States</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/Data' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/Data' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" to="/Data" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaChartArea style={{ fontSize: '25px' }}/> <br /><br /> Data Insight</Link>
                    </li>
                      </ul>
                    </div>
                  </nav>
                {/* <!-- Tabs navs --> */}
                <ul style={{  }} class="nav nav-tabs show-for-large" id="ex-with-icons" role="tablist">
                    <li style={{ backgroundColor: location.pathname == '/' ? '#0A6921' : '' }} class="nav-item col-md-2" role="presentation">
                        <Link to="/" style={{ color: location.pathname == '/' ? 'white' : '' }}  class="nav-link "> <FaHome style={{ fontSize: '25px' }} /> <br /><br /> Introduction</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/Indicators' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link  to="/Indicators" style={{ color: location.pathname == '/Indicators' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false" > <FaMap style={{ fontSize: '25px' }}/> <br /><br /> Indicators</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/sector' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/sector' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-3" to="/sector" role="tab"
                            aria-controls="ex-with-icons-tabs-3" aria-selected="false"><FaVoteYea style={{ fontSize: '25px' }}/> <br /><br /> Sectors </Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/Occupation' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/Occupation' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" to="/Occupation" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaInfo style={{ fontSize: '25px' }}/> <br /><br /> Occupations</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/country' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/country' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" to="/country" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaPoll style={{ fontSize: '25px' }}/> <br /><br /> States</Link>
                    </li>
                    <li style={{backgroundColor: location.pathname == '/Data' ? '#0A6921' : ''}} class="nav-item col-md-2" role="presentation">
                        <Link style={{ color: location.pathname == '/Data' ? 'white' : '' }} class="nav-link" id="ex-with-icons-tab-2" to="/Data" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaChartArea style={{ fontSize: '25px' }}/> <br /><br /> Data Insight</Link>
                    </li>
                </ul>
                
                {/* <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">Navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li style={{  }} class="nav-item col-md-2" role="presentation">
                                    <a style={{  }} class="nav-link active" id="ex-with-icons-tab-1" data-bs-toggle="tab" href="#ex-with-icons-tabs-1" role="tab"
                                        aria-controls="ex-with-icons-tabs-1" aria-selected="true"> <FaHome /> <br /> <p>Home</p></a>
                                </li>
                                <li style={{  }} class="nav-item col-md-2" role="presentation">
                                    <a style={{  }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"> <FaMap /> <br /> <p>Population</p></a>
                                </li>
                                <li style={{  }} class="nav-item col-md-2" role="presentation">
                                    <a style={{  }} class="nav-link" id="ex-with-icons-tab-3" data-bs-toggle="tab" href="#ex-with-icons-tabs-3" role="tab"
                                        aria-controls="ex-with-icons-tabs-3" aria-selected="false"><FaVoteYea /> <br /> <p>Voters</p> </a>
                                </li>
                                <li style={{  }} class="nav-item col-md-2" role="presentation">
                                    <a style={{  }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaInfo /> <br /> Information</a>
                                </li>
                                <li style={{  }} class="nav-item col-md-2" role="presentation">
                                    <a style={{  }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaPoll /> <br /> Analysis</a>
                                </li>
                                <li style={{  }} class="nav-item col-md-2" role="presentation">
                                    <a style={{  }} class="nav-link" id="ex-with-icons-tab-2" data-bs-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><FaChartArea /> <br /> Infographics</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
                </center>
            </div>
        </section>
    );
}

export default Navbarbefore;
