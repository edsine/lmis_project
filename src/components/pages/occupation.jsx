import React, { useState }  from 'react';

import {useEffect}  from 'react';
//import Bar from './Bar';
import { Link } from 'react-router-dom';
import { BiBuoy,BiCoinStack,BiBriefcase,BiLineChart,BiNews } from "react-icons/bi";
import { Polar } from 'react-chartjs-2';

import Script from 'react-load-script'
import "../../styles/bootstrap.min.css";
import "../../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/bootstrap-icons/bootstrap-icons.css";

import Common from '../inc/Common';



 function Occupation() {



    
  useEffect(() => {
    AOS.init();
  }, []);





    const [radar] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });

  return (
    <>

        <Common />
        <div className=''>




<script src="http://localhost:3000/bootstrap.bundle.js"></script>

<Script  url="http://localhost:3000/aos/aos.js" />
<Script  url="http://localhost:3000/swiper/swiper-bundle.min.js" />
<Script  url="http://localhost:3000/purecounter/purecounter_vanilla.js" />
<Script  url="http://localhost:3000/glightbox/js/glightbox.min.js" />
<Script  url="http://localhost:3000/isotope-layout/isotope.pkgd.min.js" />


<Script  url="http://localhost:3000/main.js" />




  <br />
       

        <div class="card card-margin">
           
          
            <div className='container'>
            <p style={{marginLeft: '20px', }}>Home || <b  style={{color: 'green'}}>Occupation</b></p>
            <div class="card-body" style={{backgroundColor: 'white', }}>
          <center> <h1 style={{color: 'black', fontStyle: 'bold'}}> <BiBriefcase size={58} color="black" className='pb-2'/> Browse by Occupations</h1></center> 
          <hr />
                <div className='row'>
                  
                    <div className='col-6'>
                     

                    <p style={{color: 'black'}}> Accommodation & food
        provision of short-stay accommodation for visitors and other travellers and of longer-term accommodation for students, workers and similar individuals, either including or excluding the provision of meals or recreational facilities. Excluded is the provision of long-term primary residences, typically leased on a monthly or annual basis, as these are classified under real estate.</p>
                    </div>
             
                <div className='col-6'>

           <p style={{color: 'black'}}>The food and beverage segment of the sector includes traditional restaurants and self-service or take-away restaurants, whether as permanent or temporary stands with or without seating. All meals must be fit for immediate consumption to be included in the sector.such as apartments </p> 
       </div>
       </div>
       </div>
       <div>

       </div>
       </div>
       </div>
       </div>
        
     <div className="container">

   


       <br />
         
     <div className="container">

<div className="row">
   
   <div className="col">
   <b>Occupations</b>

    <div>
     <div class="col text-center ">

     <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
         <option selected>
         Select Sectors
         </option>
          <option value="1">
          -Business Services
          </option>
         <option value="2">
         --Administrative Services
         </option>
         <option value="3">
         --Arts and Recreation
         </option>
         <option value="4">
          --Proffessional Services
          </option>
         <option value="5">
         -Construction
         </option>
         <option value="6">
         --Construction
         </option>
         <option value="7">
          --Distribution & transport
          </option>
         <option value="8">
         --Accommodation and food
         </option>
         <option value="9">
         --Transport & storage
         </option>

         <option value="10">
          --Wholesale & retail trade
          </option>
         <option value="11">
         Administrative Services
         </option>
         <option value="12">
         -Manufacturing
         </option>
         <option value="13">
          --Manufacturing
          </option>
         <option value="14">
         -Non-marketed services
         </option>
         <option value="15">
         --Education
         </option>
         <option value="16">
         -- health and Social care
          </option>
         <option value="17">
         -- Public sector & defence
         </option>
         <option value="18">
         -Primary sector & utilities
         </option>

         <option value="19">
         --Agriculture,forestry and fishing
         </option>

         <option value="20">
         -- Energy supply services
         </option>

         <option value="21">
         -- Mining and quarry 
         </option>

         <option value="21">
         -- Water and waste treatment 
         </option>


         
         
     </select>
         </div>
    </div>
   </div>

   
  <div className="col">
  <b>States</b>
  <div>
   <div class="col text-center ">

     <select class="form-select form-select-lg mb-3">
         <option selected>
         Select State
         </option>
          <option value="1">
          -Abia
          </option>
         <option value="2">
         -Adamawa
         </option>
         <option value="3">
         -Akwa Ibom
         </option>
         <option value="4">
          -Anambra
          </option>
         <option value="5">
         -Bauchi
         </option>
         <option value="6">
         -Bayelsa
         </option>
         <option value="7">
          -Benue
          </option>
         <option value="8">
         -Borno
         </option>
         <option value="9">
         -Cross River
         </option>

         <option value="10">
          -Delta
          </option>
         <option value="11">
         Ebonyi
         </option>
         <option value="12">
         -Edo
         </option>
         <option value="13">
          -Ekiti
          </option>
         <option value="14">
         -Enugu
         </option>
         <option value="15">
         -Gombe
         </option>
         <option value="16">
         -Imo
          </option>
         <option value="17">
         -Jigawa
         </option>
         <option value="18">
         -Kaduna
         </option>

         <option value="19">
         -Kano
         </option>

         <option value="20">
         -Katsina
         </option>

         <option value="21">
         -Kebbi
         </option>

         <option value="22">
         -Kogi 
         </option>

         <option value="23">
         -Kwara
         </option>

         <option value="24">
         -Lagos 
         </option>

         <option value="25">
         -Nasarawa 
         </option>

         <option value="26">
         -Niger 
         </option>

         <option value="27">
         -Ogun 
         </option>

         <option value="28">
         -Ondo 
         </option>

         <option value="29">
         -Osun
         </option>

         <option value="30">
         -Oyo 
         </option>

         <option value="30">
         -Plateau 
         </option>

         <option value="31">
         -Rivers 
         </option>

         <option value="32">
         -Sokoto 
         </option>

         <option value="30">
         -Sokoto 
         </option>

         <option value="31">
         -Taraba 
         </option>

         <option value="32">
         -Yobe 
         </option>

         <option value="33">
         -Sokoto 
         </option>

         <option value="34">
         -Yobe 
         </option>

         <option value="35">
         -Zamfara 
         </option>
         
         
     </select>
         </div>
  </div>
   
  </div>
  

</div>
</div>
<br></br>
<div style={{marginLeft: '10%', marginRight: '10%'}}>
<div class="bg-white card shadow p-4" style={{backgroundColor: 'white'}}>
    <h4 style={{color: '#0A6921'}}>Associate Professionals</h4>
    <br />
        <p className=''> Accommodation & food
          Included in the accommodation and food sector is the provision of accommodation and the provision of complete meals and drinks fit for immediate consumption. The accommodation category includes provision of short-stay accommodation for visitors and other travellers and of longer-term accommodation for students, workers and similar individuals, either including or excluding the provision of meals or recreational facilities. Excluded is the provision of long-term primary residences, such as apartments typically leased on a monthly or annual basis, as these are classified under real estate.
    
           <br />
           <br></br>
         <p>  Iconsumption. The accommodation category includes provision of short-stay accommodation for visitors and other travellers and of longer-term accommodation for students, workers and similar individuals, either including or excluding the provision of meals or recreational facilities. Excluded is the provision of long-term primary residences, such as apartments typically leased on a monthly or annual basis, as these are classified under real estate.</p>
           </p>
           </div>
           </div>
           <br />
           <br>
           </br>
 
         
         {/*
         <div class="row container-fluid">
            <h2>sectors</h2>
        <div class="col text-center d-box">
        
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>
                    
                    </option>
                     <option value="1">
                     -Business Services
                     </option>
                    <option value="2">
                    --Administrative Services
                    </option>
                    <option value="3">
                    --Arts and Recreation
                    </option>
                    <option value="4">
                     --Proffessional Services
                     </option>
                    <option value="5">
                    -Construction
                    </option>
                    <option value="6">
                    --Construction
                    </option>
                    <option value="7">
                     --Distribution & transport
                     </option>
                    <option value="8">
                    --Accommodation and food
                    </option>
                    <option value="9">
                    --Transport & storage
                    </option>

                    <option value="10">
                     --Wholesale & retail trade
                     </option>
                    <option value="11">
                    Administrative Services
                    </option>
                    <option value="12">
                    -Manufacturing
                    </option>
                    <option value="13">
                     --Manufacturing
                     </option>
                    <option value="14">
                    -Non-marketed services
                    </option>
                    <option value="15">
                    --Education
                    </option>
                    <option value="16">
                    -- health and Social care
                     </option>
                    <option value="17">
                    -- Public sector & defence
                    </option>
                    <option value="18">
                    -Primary sector & utilities
                    </option>

                    <option value="19">
                    --Agriculture,forestry and fishing
                    </option>

                    <option value="20">
                    -- Energy supply services
                    </option>

                    <option value="21">
                    -- Mining and quarry 
                    </option>

                    <option value="21">
                    -- Water and waste treatment 
                    </option>


                    
                    
                </select>
                    </div>

    <h2>States</h2>
     <div class="col text-center d-box">
     <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected></option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
     </div>
  
</div>
 */}

       

       


<div> 

<div className="card-group container-fluid">

<div class="row">
  <div class="col-8 mr-6">
  
<div className="row ">
  <div className="card col-4"style={{backgroundColor: 'rgba(116,166,39, 0.1)'}}>
          {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
          <div className="card-body">
          <div className="text-center">
          <div className='py-5'>
          <BiBuoy size={70} color="rgba(72, 129, 52, 1)"/>
          </div>
          </div>
          <center>
            <h6 className="card-title">
            Total employment</h6>
            </center>
            <center>
            <p style={{color: '#0A6921', fontSize: '25px', fontStyle: 'bold'}}>

            648.5%
        
            </p>
            </center>
            <p className="card-text">
            <center><small className="text-muted" style={{fontSize: '18px'}}>in <b>2020</b> NG</small> </center>
            </p>
          </div>
        </div>
     
    

        <div className="card col-4 zoom">
          {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
          <div className="card-body ">
          <div className="text-center">
          <div className='py-5'>
          <BiBriefcase size={70} color="rgba(72, 129, 52, 1)"/>
          </div>
          </div>
          <center>
            <h6 className="card-title">
            Share of  employment</h6>
            </center>
            <center>
            <p style={{color: '#0A6921', fontSize: '25px', fontStyle: 'bold'}}>

            73.5%
        
            </p>
            </center>
            <p className="card-text">
            <center><small className="text-muted" style={{fontSize: '18px'}}>in <b>2022</b> NG</small> </center>
            </p>
          </div>
        </div>

        <div className="card col-4" style={{backgroundColor: 'rgba(116,166,39, 0.1)'}}>
          {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
          <div className="card-body">
          <div className="text-center">
          <div className='py-5'>
          <BiLineChart size={70} color="rgba(72, 129, 52, 1)"/>
          </div>
          </div>
          <center>
            <h6 className="card-title">
            Share of Women in employment</h6>
            </center>
            <center>
            <p style={{color: '#0A6921', fontSize: '25px', fontStyle: 'bold'}}>

            48.5%
        
            </p>
            </center>
            <p className="card-text">
            <center><small className="text-muted" style={{fontSize: '18px'}}>in <b>2022</b> NG</small> </center>
            </p>
          </div>
        </div>

      
</div>
<div className="my-5 col-12 ">
                            <div className="col-md-1 float-start">
                                <div className=""></div>
                            </div>
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="">Future prospects of Associate professionals in EU27 in 2020-2030</h3>
                                    <br />
                                    <Polar data={radar} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div> 


<div className="">
<canvas id="myChart" ></canvas>
</div>
  </div>
  <div class="col-3">

  <div className=" container card  mb-5" style={{}}>
  <div class="card-header">
  <span className="fw-bolder" style={{fontSize: '23px'}}>Data insights</span>
    <BiNews size={40} color="#0A6921" className="float-end"/>
  </div>
        

         
          
          <span className="" style={{fontSize: '12px'}}>
            <center>
          LIST ALL 116
                       
Occupations Associate professionals
</center>
</span>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
         <b style={{color: '#0A6921'}}> Legal, social and cultural professionals and associate professionals: (2019 update)</b>
         <br />
         <small>
         Manufacturing and construction sustain massive jobs losses, but employment is growing in health care, social work and education
         </small>
          </li>
          <li className="list-group-item">
          
          <b style={{color: '#0A6921'}}> kills developments and trends in the tourism sector</b>
          <br></br>
          <p>
          Tourism is a very complex industry made up of a number of different businesses and economic activities. It can be defined with reference to the goods and services tourists consume, where a tourist might be defined as a person who is travelling or visiting a place for a variety of purposes. This…
          </p>
          </li>
          <b style={{color: '#0A6921'}}> Office associate professionals: skills opportunities and challenges (2019 update)</b>
          <br></br>
        <p>The office, or business administration associate professionals perform mostly technical tasks connected with the practical application of knowledge relating to financial accounting and transaction matters,</p>
        </ul>
      
      </div>
  </div>
</div> 

    
        
        
      </div>
      {/*from here for 1*/}
</div>






     </div>
    </>
  )
}

export default Occupation;
