import '../styles/poster.css'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import source from "./img.json";
import pic1 from '../assets/DesignImages/Picture15.png';
import pic2 from '../assets/DesignImages/Picture1.png';
import pic3 from '../assets/DesignImages/Picture3.png';
import pic4 from '../assets/DesignImages/pic1.png';
import pic5 from '../assets/DesignImages/Picture5.png';
export default function Imgslider(){

  return(
      <div id ="co" class="container-lg my-2">
      <div id="myCarousel" class="carousel slide">
          
          <ol class="carousel-indicators">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>
          
          
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
  
          
          <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
          </a>
      </div>
  </div>
  );
  }