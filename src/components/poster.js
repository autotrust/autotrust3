// The slider component in the main landing page.

import '../styles/poster.css'
import React, {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/DesignImages/Picture15.png';
import pic2 from '../assets/DesignImages/Picture1.png';
import pic3 from '../assets/DesignImages/Picture3.png';
import pic4 from '../assets/DesignImages/pic1.png';
import pic5 from '../assets/DesignImages/Picture5.png';


export default function Imgslider(){

    // here we are using useState and declaring state variables to store the window size and set the state whenever it resizes
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)  

    // we are setting up the resizing functionality inside useEffect, so that it can be performed even after the application is rendered

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

  return(
    <>

      {/* When the screen width is above 500 we are displaying the slider. */}
    {(screenWidth > 500) && (
      <div id ="co" class="container-lg">
      <div id="myCarousel" class="carousel slide">
          {/* The below ordered list will highlight the active slide's bar.*/}
          <ol class="carousel-indicators">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>
          
          {/* The below piece of code contains the inner pictures and text of the slider. */}
          <div class="carousel-inner">
              <div id='rr' class="carousel-item active">
                <div id="slr" className='row' >
                <div id="txt" className='col-2'>
                <h4 id='spar'>a diam sollicitudin tempor id eu nisl</h4>
                </div>
                <div id='fp' className='col-2'>
                  <img src={pic1}  alt="image" height="160" width="60"></img>
                </div>
                <div id="sp" className='col-8'>
                  <img id='pr' src={pic2}  alt="image" height="300" width="500"></img>
                </div>
                </div>
              </div>
              <div id='rr' class="carousel-item">
                
              <div id="txt2" className='col'>
              <h4 id='spar'>massa vitae tortor condimentum lacinia quis vel eros</h4>
              </div>
              <div id="sp1" className='col'>
                  <img src={pic3} alt="image" height="300" width="100"></img>
                  </div>
              <div id="sp1" className='col'>
                  <img src={pic4} alt="image" height="300" width="100"></img>
              </div>
              </div>
              <div id='rr' class="carousel-item">
                <div id="txt1" className='col'>
              <h4 id='spar'>lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc</h4>
              </div>   
              <div id="sp2" className='col'>

                <img src={pic5} alt="image" height="300" width="100"></img>
              </div>
              </div>
              
          </div>
  
          {/* The below piece of code is all about the previous and next icons in the slider. */}
          <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
          </a>
      </div>
  </div>
    )}

  {/* This piece of code works when the windowsize shrinks lessthan 500 basically a mobile version. */}
  {/* In this version we are breaking down the slider and placing each conatiner one after the other. */}
  {(screenWidth < 500) && (
    <>
    <div id="c1" className='container'>
    <div id="slr1" className='row' >
    <div id="txt" className='col-4'>
    <h4 id='spar1'>a diam sollicitudin tempor id eu nisl</h4>
    </div>
    <div id='fp' className='col-4'>
      <img id="c1pic" src={pic1}  alt="image" height="50" width="50"></img>
    </div>
    <div id="sp1" className='col-4'>
      <img id='pr1' src={pic2}  alt="image" height="100" width="175"></img>
    </div>
    </div>
    </div>


    <div id="c1" className='container'>
    <div id="slr1" className='row' >
    <div id="txt3" className='col-4'>
    <h4 id='spar1'>massa vitae tortor condimentum lacinia quis vel eros</h4>
    </div>
    <div  className='col-4'>
        <img id="c2pic" src={pic3} alt="image" height="110" width="100"></img>
        </div>
    <div  className='col-4'>
        <img id='pr2' src={pic4} alt="image" height="110" width="100"></img>
    </div>
    </div>
    </div>


    <div id="c1" className='container'>
    <div id="slr1" className='row' >
      <div id="txt4" className='col-4'>
    <h4 id='spar1'>lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc</h4>
    </div>   
    <div className='col-7'>
      <img id="pr3" src={pic5} alt="image" height="110" width="100"></img>
    </div>
    </div>
    </div>
    </>
  )}
    </>
  );
  }