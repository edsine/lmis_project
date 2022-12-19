import React,{useEffect} from 'react';

import { Link } from 'react-router-dom';




import Script from 'react-load-script'
import "../../styles/bootstrap.min.css";
import "../../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/bootstrap-icons/bootstrap-icons.css";
import Ndd from '../images/rice.jpg'
import Act from '../images/gr.jpg'
import Neds from '../images/NEDS.jpg'
import Nmis from '../images/NMIS.jpg'
import Nurhi from '../images/NURHI.jpg'
import Nship from '../images/lmis_welcome.png'
import Vacs from '../images/VACS.jpg'
import Chea from '../images/unsplash_h5xEHzfepNk.png'
import Im from '../images/rice.jpg'
import Nur from '../images/stats-img.svg'



// import "../../styles/aos.css";

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


    return (

        
        

<div>

    



<script src="http://localhost:3000/bootstrap.bundle.js"></script>

<Script  url="http://localhost:3000/aos/aos.js" />
<Script  url="http://localhost:3000/swiper/swiper-bundle.min.js" />
<Script  url="http://localhost:3000/purecounter/purecounter_vanilla.js" />
<Script  url="http://localhost:3000/glightbox/js/glightbox.min.js" />
<Script  url="http://localhost:3000/isotope-layout/isotope.pkgd.min.js" />


<Script  url="http://localhost:3000/main.js" />





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
        <li><Link  to="/Occupation">Data Insights</Link></li>
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
</header>{/* End Header */}
{/* End Header */}
{/* ======= Hero Section ======= */}
<section id="hero" className="hero" style={{backgroundImage: `url(${Chea})`, backgroundColor:'green', backgroundSize: 'cover', display: 'block', opacity: '0.9'}}>
  <div className="container position-relative">
    <div className="row gy-5" data-aos="fade-in">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
        <h2>Welcome to <span>Nigeria Labour Market Informatio System</span></h2>
        <p style={{fontSize: '23PX'}}>We provide facts, studies and statistics</p>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#about" className="btn-get-started">Search our database</a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2">
      </div>
    </div>
  </div>
  <div className="icon-boxes position-relative">
    <div className="container position-relative">
      <div className="row gy-4 mt-5">
        <div className="col-xl-3 col-md-6 card-white" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon-box zoom">
            <div className="" style={{fontSize: '23px', color: 'lightgrey'}}>200M Approximately</div>
            <hr />
            <h4 className="title"><a href className="stretched-link">National Population 2022</a></h4>
          </div>
        </div>
        {/*End Icon Box */}
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon-box zoom">
            <div className style={{fontSize: '23px', color: 'lightgrey'}}>120M Approximately</div>
            <hr />
            <h4 className="title"><a href className="stretched-link">Employment Population</a></h4>
          </div>
        </div>
        {/*End Icon Box */}
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="icon-box zoom">
            <div className style={{fontSize: '23px', color: 'lightgrey'}}>7.79%</div>
            <hr />
            <h4 className="title"><a href className="stretched-link">Employment Rate Macro trends</a></h4>
          </div>
        </div>
        {/*End Icon Box */}
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
          <div className="icon-box zoom">
            <div className style={{fontSize: '23px', color: 'lightgrey'}}>35,987</div>
            <hr />
            <h4 className="title"><a href className="stretched-link">Number of Registered Business</a></h4>
          </div>
        </div>
        {/*End Icon Box */}
      </div>
    </div>
  </div>
</section>
{/* End Hero Section */}
<main id="main">
  {/* ======= About Us Section ======= */}
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Welcome</h2>
        <p>The Labour Market Information System (LMIS) is a solution that uses artificial intelligence, adaptive intuition, and recognition from all labor data sources to populate labour market information</p>
      </div>
      <div className="row gy-4">
        <div className="col-lg-6">
          <h3>Recent Publications</h3>
          <img  src={Im} className="img-fluid rounded-4 mb-4" alt="" />
          <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
          <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
        </div>
        <div className="col-lg-6">
          <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle-fill" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
            <div className="position-relative mt-4">
              <img src={Nship} className="img-fluid rounded-4" alt="" />
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End About Us Section */}
  {/* ======= Stats Counter Section ======= */}
  <section id="stats-counter" className="stats-counter">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4 align-items-center">
        <div className="col-lg-6">
          <img src={Nur} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="stats-item d-flex align-items-center">
            <span data-purecounter-start={0} data-purecounter-end={1} data-purecounter-duration={1} className="purecounter" />
            <p><strong>Nigeria Employment</strong> Statistics by sector 2021</p>
          </div>{/* End Stats Item */}
          <div className="stats-item d-flex align-items-center">
            <span data-purecounter-start={0} data-purecounter-end={2} data-purecounter-duration={1} className="purecounter" />
            <p><strong>Unemployment rate</strong> in Nigeria 1991-2022</p>
          </div>{/* End Stats Item */}
          <div className="stats-item d-flex align-items-center">
            <span data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={1} className="purecounter" />
            <p><strong>43.9% Of working Population</strong> 18 &amp; older NBS, 2022</p>
          </div>{/* End Stats Item */}
        </div>
      </div>
    </div>
  </section>{/* End Stats Counter Section */}
  {/* ======= Call To Action Section ======= */}
  <section id="call-to-action" className="call-to-action" style={{backgroundImage: `url(${Act})`,backgroundSize: 'cover', marginLeft: '10%', marginRight: '10%', padding: '10px 40px', borderRadius: '15px', overflow:'hidden'}}>

    <div className="container text-center" data-aos="zoom-out">
      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox command-btn" />
      <h3>Introduction </h3>
      <p> The LMIS queries in real-time the databases of the actors with a shared understanding that interventions in the labor market are far-ranging. The LMIS Portal provides information on drivers, barriers, needs and aspirations of Nigerians (home and abroad) through data and insights. The main purpose of a Labor Market Information System (LMIS) is the production of information and analysis for policy makers and other labor market stakeholders. LMIS assists in job matching, job searching, and providing information about market needs, developing job profiles, and improving application skills.</p>
      <a className="cta-btn" href="#">Explore More</a>
    </div>
  </section>{/* End Call To Action Section */}
  {/* ======= Our Services Section ======= */}
  <section id="services" className="services sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Our Services</h2>
      </div>
      <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <div className="icon" >
              <i className="bi bi-activity" style={{marginLeft: '15PX', marginBottom: '10px'}} />
            </div>
            <h3>Explore Data</h3>
            <p>Over 2.3 million observations to explore</p>
            <a href="#" className="readmore stretched-link" >Read more <i className="bi bi-arrow-right"   /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-broadcast" style={{marginLeft: '15PX', marginBottom: '10px'}} />
            </div>
            <h3>Browse Data Sectors</h3>
            <p>browse numerous data over 23 different sectors</p>
            <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles" style={{marginLeft: '15PX', marginBottom: '10px'}} />
            </div>
            <h3>Browse Occupation Data</h3>
            <p>Browse data across 48 different Occupations</p>
            <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles" style={{marginLeft: '15PX', marginBottom: '10px'}} />
            </div>
            <h3>Online Tools</h3>
            <p>Non et tem ea fuga sit provident adipisci neque.</p>
            <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-calendar4-week" style={{marginLeft: '15PX', marginBottom: '10px'}} />
            </div>
            <h3>LMIS Budget</h3>
            <p>Cumque et suscipit saepe. Est maiores autem  ut</p>
            <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-chat-square-text" style={{marginLeft: '15PX', marginBottom: '10px'}} />
            </div>
            <h3>Key Data</h3>
            <p>Hic molestias ea quibusdam eos. Fugiat enim.</p>
            <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>{/* End Our Services Section */}
  {/* ======= Our Team Section ======= */}
  <section id="team" className="team">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Upcoming Events</h2>
      </div>
      <div className="row gy-4">
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="member">
            <img src={Nurhi}  style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Eco Voluntary Walks</h4>
            <span>Lagos State</span>
            <div className="social">
            view more 
              <a href><i className="bi bi-eye" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="member">
            <img src={Ndd}  className="img-fluid" style={{height: '280px', width: '350px', objectFit: 'cover'}} alt="" />
            <h4>Creativity &amp; Knowledge Conference</h4>
            <span>Enugu State</span>
            <div className="social">
            view more
              <a href><i className="bi bi-eye" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Nmis} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>WOLEX Skills aquistion training</h4>
            <span>Kaduna</span>
            <div className="social">
            view more
              <a href><i className="bi bi-eye" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
          <div className="member">
            <img  src={Vacs} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Ministry of famers Agriculture Development</h4>
            <span>Benue State</span>
            <div className="social">
            view more
              <a href><i className="bi bi-eye" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
      </div>
    </div>
  </section>{/* End Our Team Section */}
</main>{/* End #main */}
{/* ======= Footer ======= */}
<footer id="footer" className="footer" style={{backgroundColor: 'rgba(242, 243, 232, 1)', color: 'rgba(72, 129, 52, 1)'}}>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-info">
        <a href="index.html" className="logo d-flex align-items-center">
          <span style={{color: 'rgb(46, 93, 29)'}}>LMIS</span>
        </a>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div className="social-links d-flex mt-4">
          <a href="#" className="twitter" style={{color: 'rgba(72, 129, 52, 1)'}}><i className="bi bi-twitter" /></a>
          <a href="#" className="facebook" style={{color: 'rgba(72, 129, 52, 1)'}}><i className="bi bi-facebook" /></a>
          <a href="#" className="instagram" style={{color: 'rgba(72, 129, 52, 1)'}}><i className="bi bi-instagram" /></a>
          <a href="#" className="linkedin" style={{color: 'rgba(72, 129, 52, 1)'}}><i className="bi bi-linkedin" /></a>
        </div>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul style={{color: 'rgba(72, 129, 52, 1)'}}>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Home</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Indicators</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Database</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Terms of service</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Privacy policy</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Real database</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Online tools</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>National Budget</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Summary</a></li>
          <li><a href="#" style={{color: 'rgba(72, 129, 52, 1)'}}>Data Insights</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          A108 Adam Street <br />
          Abuja <br />
          Nigeria <br /><br />
          <strong>Phone:</strong> 09023814800<br />
          <strong>Email:</strong> lmis@gmail.com<br />
        </p>
      </div>
    </div>
  </div>
  <div className="container mt-4">
    <div className="copyright">
      © Copyright <strong><span>LMIS</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
    
    </div>
  </div>
</footer>{/* End Footer */}
{/* End Footer */}
<a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>

</div>
    )
}
export default Home;
