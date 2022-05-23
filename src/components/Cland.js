import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Cland.css';
import barchart from '../assets/DesignImages/barchart.png';
import kpic1 from '../assets/DesignImages/Dashboard_3.jpg';
import img1 from '../assets/DesignImages/img1.png';
import img2 from '../assets/DesignImages/img2.png';
import img3 from '../assets/DesignImages/img3.png';
import Contact from "./Navigation/Footer";
import Navbar from "./Navbar";
import cpic from '../assets/DesignImages/carpic.png';
export default function Cland(){
    return(
        <div>
        <Navbar/>
        <div className="container3">
            <div className="c1">
            
        <p id="xx">You can also add <span class="bolded">spacing</span> between the heading and <span class="bolded">paragragh</span>, swap a video in for the image, or add a button.
                    Just make sure to drop your button into the div block that contains this content. </p>
        
        </div>
        </div>
        <div className="containernew">
            {/* <div className="col-4"> */}
            <div  className="row">
                <div id="clm" className="col-6">
                <div className="block4"></div>
            {/* <img src={kpic} alt="picture" height="400" width="400"/> */}
            </div>
            <div id="Jblk" className='col-6'>
                <div className="block">
                <h1 id="hd13">Jumdye Ujekmsqkch</h1>
                <br/>
                    <p id="kss">The <span class="bolded">feature</span> layout is built with <span class="bolded">flex</span>, like the <span class="bolded">hero</span> layout. Don't like our typsetting? You
            can update every detail in the typography section of thr Style panel.</p>
                    <p id="kss">You can also ass spacing between the heading and paragragh, swap a video in for the image, or add a button. 
                    Just make sure to drop your button into the <span class="bolded">div block</span> that contains this content</p>
                    <Link to="/components/conSales" ><button id="bt1">GET IN TOUCH</button></Link>
                  
                    </div>

                    </div>
            
                </div>
        </div>

        <div className="container3">
            <div className="row">
            <div className="ch1">
            <img src={cpic} id="clandcar" alt="car-image" height="200" width="200"/>
            </div>
            <div className="cnew">   
        <p>You can also add spacing between the heading and paragragh, swap a video in for
            the image, or add a button. Just make sure to drop your button into the div block
            that contains this content.
        </p>
        </div>
        </div>
        </div>

        <div className="containernew1">
            <div className="row">
            <div id="cland4con" className="col">
                <div className="block3">
                <div id="clandcont" className='coln'>
                <h2 id="hd1">A cuwmslwicvedd Ujkeuf on jwqkxy</h2>

                   <div className="ksss">
                       <p>JIK
                           <br/>
                           Isquaxkie <br/> Mkudhow Qjudks <br/>  Mkudhow Qjudks <br/> Juiqkzhsy

                       </p>
                    {/* <ul>JIK</ul>
                    <ul>Isquaxkie</ul>
                    <ul>Mkudhow Qjudks</ul>
                    <ul>Mkudhow Qjudks</ul>
                    <ul>Juiqkzhsy</ul> */}
                    </div>
                    <div className="btcon">
                    <Link to="/components/Csignin"><button id="bt3">GET REPORT NOW</button></Link>
                    </div>
                    </div>
                    
                    <div id="chart" className="col-6">
                <img src={kpic1} id="anlypic" alt="image" width="400" height="250"/>
                    </div>
                    </div>
                    </div>
            
                </div>
        </div>
        
        <div className="container3">
            <div className="row">
            <div className="c2">
                <p>You can also add spacing between the heading and paragragh, swap a video in for
                    the image, or add a button. Just make sure to drop your button into the div block
                    that contains this content.
                </p>
            </div>
            <div className="ch">
                <img id="barpic" src={barchart} alt="car-image" height="200" width="200" />
            </div>
            </div>
        </div>

        <div className="containernew">
            {/* <div className="col-4"> */}
            <div  className="row">
                <div id="clm" className="col-6">
                <div className="block5"></div>
            {/* <img src={kpic2} alt="picture" height="400" width="400"/> */}
            </div>
            <div id="Jblk" className='col-6'>
                <div className="nblock">
                <h1 id="hd13">Ujwwbjaux Liwhqand</h1>
                    <p id="kss">The <span class="bolded">feature</span> layout is built with <span class="bolded">flex</span>, like the <span class="bolded">hero</span> layout. Don't like our typsetting? You
            can update every detail in the typography section of thr Style panel.</p>
                    <p id="kss">You can also ass spacing between the heading and paragragh, swap a video in for the image, or add a button. 
                    Just make sure to drop your button into the <span class="bolded">div block</span> that contains this content</p>
                    <Link to="/components/conSales" ><button id="bt1">GET IN TOUCH</button></Link>
                    </div>
                    </div>
            
                </div>
        </div>
        <div className="piccontainer">
            <div className="row">
                <div id="cland5con" className="col">
                    <img id="ba" src={img3} alt="phone" height="100" width="100"/>
                </div>
                <div id="cland5con" className="col">
                    <img id="dc" src={img1} alt="phone" height="100" width="100"/>
                </div>
                <div id="cland5con" className="col">
                    <img id="da" src={img2} alt="phone" height="100" width="100"/>
                </div>
            </div>
        </div>
        <Contact/>
        </div>
    )
}