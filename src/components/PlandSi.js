// The personal landing page after the user sigin to the account.

import React, {useState} from "react";
import '../styles/PlandSi.css';
// import PowerBi from './ATpowerbiReport';
import sli1 from '../assets/DesignImages/sli1.png';
import sli2 from '../assets/DesignImages/sli2.png';
import sli3 from '../assets/DesignImages/sli3.png';


export default function PlandSi(){

    // Here we are using useState to maintain the count of the inputs for input field validation purpose.

    const [chCount, setChCount] = useState(0);
    const [chCount1, setChCount1] = useState(0);

    function onSubmit(){
        const inputs={chCount}
        console.log("Inputs : ",inputs)
        // checking if the input fields are empty or not
        if(chCount===0 || chCount1===0){
            alert("Please fill the field!")
        }
        if(chCount>0 && chCount1>0){
            window.open('/components/ATpowerbiReport', "_blank")
        }
        
    }
    return(
        <div>
            <div className="container2">
                <div id="rpl" className="row">
                <div id="ks1" className="col">
                <div className="Box2">
  
                <div className="Box1">
                    <h2 id="hd11">
                        Generate AUTOTRUST Report
                    </h2>

                    <input  id="iprp" placeholder="ENTER QUSBEN NUMBER" onChange={(e) => setChCount(e.target.value)} required/>
                    <input  id="iprp" placeholder="ENTER KUBSOKA NUMBER" onChange={(e) => setChCount1(e.target.value)} required/>
                    <ul id="rety">Report Type *</ul>
                    <div className="rep">
                    <input type="radio" id="rk" name="fav_language" value="CSS"/>
                    <label id="rt" for="css">{' '}BASIC</label><br/><br/>
                    <input type="radio" id="rk" name="fav_language" value="CSS" checked/>
                    <label id="rt" for="css">PREMIUM</label><br/><br/>
                    <button onClick={onSubmit} id="bt2">Generate Report</button>
                    </div>
                    
                    </div>
                    
                </div>
                </div>

                {/* The below code generates the slider. */}
                <div id="ks2" className="col">
                        <div id="cl" class="container-lg my-3">
                        <div id="myCarousel" class="carousel slide">
                            {/* The below ordered list will highlight the active slide's bar.*/}
                            <ol class="carousel-indicators">
                                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                            </ol>
                            
                            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img id="slipic" src={sli1} alt="slider1pic"></img>
                                </div>
                                <div class="carousel-item">
                                    <img id="slipic" src={sli2} alt="slider2pic"></img>
                                </div>
                                <div class="carousel-item">
                                    <img id="slipic" src={sli3} alt="slider3pic"></img>
                                </div>
                            </div>

                            {/* The below piece of code is all about the previous and next icons in the slider. */}
                            <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a id="next" class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="container4">
            <div  className="row">
                <div id="roh" className="colmn">
                    <div className="block1">
                        </div>
            </div>
            <div className='colmn'>
                <div className="block2">
                    <h1 id="hd12">Feature section</h1><br/>
                    <br/>
                    <br/>

                    <p id="ks11">The <span class="bolded">feature</span> layout is built with <span class="bolded">flex</span>, like the <span class="bolded">hero</span> layout. Don't like our typsetting? You
            can update every detail in the typography section of thr Style panel.</p>
                    <p id="ks11">You can also ass spacing between the heading and paragragh, swap a video in for the image, or add a button. 
                    Just make sure to drop your button into the <span class="bolded">div block</span> that contains this content</p>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )
}