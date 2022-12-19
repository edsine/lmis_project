// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css';
import './Header.css';
import Navbar from "./components/inc/Navbar";
import Navbarbefore from "./components/inc/Navbarbefore";
import NavbarAfter from "./components/inc/Navbar_after";
import Home from "./components/pages/Home";
import Indicators from './components/pages/Indicators';
import Contactus from "./components/pages/Contact";
import Aboutus from "./components/pages/About";
//import DataPage from "./components/pages/Data";
import Infographs from "./components/pages/Infograph";
import StoryPage from "./components/pages/inc/Storypage";
import Sector from "./components/pages/Sector";
import Occupation from "./components/pages/occupation";
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Footer from './components/inc/Footer';
import SingleSearch from './components/pages/SingleSearch';
import Nelex from './components/pages/Nelex';
import SearchIndicators from './components/pages/SearchIndicators';
import DataPage from "./components/pages/Data";
import Viewdetails from './components/pages/viewdetails';
import ToolsPage from "./components/pages/tools";
import Viewtools from "./components/pages/viewtools";
import Country from './components/pages/country';
import Summary from './components/pages/summary';
import Trends from './components/pages/trends';

import EmpStats from "./components/pages/empstats";
import SkillBank from "./components/pages/SkillBank";




function App() {
  
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/contact" component={Contactus} />
          <Route exact path="/Infographs" component={Infographs} />
          <Route exact path="/story" component={StoryPage} />
          <Route exact path="/Indicators" component={Indicators} />
          <Route exact path="/job-statistics" component={Nelex} />
          <Route exact path="/search/:id" component={props => (<SearchIndicators {...props} key={window.location.pathname} />)} />
          <Route exact path="/single-search/:id" component={props => (<SingleSearch {...props} key={window.location.pathname} />)} />
          <Route exact path="/Data" component={DataPage} />
          <Route exact path="/Sector" component={Sector} />
          <Route exact path="/tools" component={ToolsPage} />
          <Route exact path="/viewtools" component={Viewtools} />
          <Route exact path="/occupation" component={Occupation} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/viewdetails" component={Viewdetails} />
          <Route exact path="/Employment-Stats" component={EmpStats} />
          <Route exact path="/SkillBank" component={SkillBank} />

          <Route exact path="/trends" component={Trends} />
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
