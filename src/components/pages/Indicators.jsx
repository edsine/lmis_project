import React,{useEffect} from 'react';

import { Link } from 'react-router-dom';



import Script from 'react-load-script'
import "../../styles/bootstrap.min.css";
import "../../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/bootstrap-icons/bootstrap-icons.css";
import Ndd from '../images/rice.jpg'
import Act from '../images/GettyImages-1194981768.webp'
import Neds from '../images/NEDS.jpg'
import Nmis from '../images/NMIS.jpg'
import Nurhi from '../images/NURHI.jpg'
import Nship from '../images/lmis_welcome.png'
import Vacs from '../images/VACS.jpg'
import Chea from '../images/unsplash_h5xEHzfepNk.png'
import Im from '../images/rice.jpg'
import Nur from '../images/Logo-skills-intelligence.png'
import Bac from '../images/back.jpg'
import Pov from '../images/ndd.jpg'
import Cta from '../images/cta-bg.jpg'
import Common from '../inc/Common';

function Indicators() {



    
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



<Common />

  <section id="team" className="team">
    
    <div className="container" data-aos="fade-up">
        <p>Home || <b  style={{color: 'green'}}>Indicators</b></p>
      <div className="row gy-4">
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="member">
            
            <img src={Nurhi}  style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Population</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <Link  to={'/search/6'}><div className="social">
            <small style={{color: 'red'}}>Read more</small> 
            </div></Link>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="member">
            <img src={Ndd}  className="img-fluid" style={{height: '280px', width: '350px', objectFit: 'cover'}} alt="" />
            <h4>Labour Force</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Nmis} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Employment</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Chea} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Informal sector and informal employment</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Nur} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Public Sector Employment</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Neds} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Employees</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Bac} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Time-related underemployment</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Act} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Working Un-employment</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        '<div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Pov} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Poverty</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src={Cta} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Strikes and lockouts</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
            <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
          <div className="member">
            <img  src={Vacs} style={{height: '280px', width: '350px', objectFit: 'cover'}} className="img-fluid" alt="" />
            <h4>Hours of Work</h4>
            <p>Databse, charts and all teh data needed for the sector of the page</p>
            <div className="social">
              <small style={{color: 'red'}}>Read more</small>
            </div>
          </div>
        </div>{/* End Team Member */}
        
      </div>
    </div>
  </section>{/* End Our Team Section */}

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


    //     <>
    //     <Common />
        
    //     <div className='bg' style={{ backgroundImage: `url(${unsplash})`,backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',/* 
    //     width: '100vw',
    //     height: '100vh' */ }}>
    //     <div className="container">
    //     <div className="row" style={{ display: 'flex',  justifyContent:'center', alignItems:'center', }}>
        
    //  <div style={{ width: "50%",marginBottom: 30,marginTop: 30,backgroundColor: 'white' }}>
    //             <div className="row" style={{ margin: 30 }}>
    //             <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Population </Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour force</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Employment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Informal sector and informal employment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Public sector employment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Employees</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Working poverty</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Unemployment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Time-related underemployment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Other measures of labour underutilization</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>School-to-work transition</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Hours of work</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Earnings</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour income</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour cost</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour productivity</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Social protection</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Occupational injuries</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour inspection</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Trade union membership</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Collective bargaining</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Strikes and lockouts</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Unpaid work</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>International migrant stock</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>International migrant flow</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Nationals abroad</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Child labour</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Consumer prices</Link>
    //     </div>
                   
    //             </div>
                
    //         </div>    
    //     </div>

    //     </div> </div>  
    //     </> 
    )
}
export default Indicators;
