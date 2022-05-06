import React from "react";
import Contact from "./Navigation/Footer";
import Header from "./header";
import '../styles/PlandSi.css';
// import npic from "/AT_Snapshots/DesignImages/Feature_Image.png"
export default function PlandSi(){

    return(
        <div>
            {/* <Header/> */}
            <div className="container2">
                <div id="rpl" className="row">
                <div id="ks1" className="col">
                <div className="Box2">
  
                <div className="Box1">
                    <h2 id="hd11">
                        Generate AUTOTRUST Report
                    </h2>
                    <form>
                    <input  id="iprp" placeholder="ENTER QUSBEN NUMBER" required/>
                    <input  id="iprp" placeholder="ENTER KUBSOKA NUMBER" required/>
                    <ul id="rety">Report Type *</ul>
                    {/* <input type="radio"></input><label id="rt">{' '}BASIC</label><br/>
                    <input type="radio"/><label id="rt">{' '}PREMIUM</label> */}
                    <div className="rep">
                    <input type="radio" id="rk" name="fav_language" value="CSS"/>
                    <label id="rt" for="css">{' '}BASIC</label><br/><br/>
                    <input type="radio" id="rk" name="fav_language" value="CSS" checked/>
                    <label id="rt" for="css">PREMIUM</label><br/><br/>
                    <button id="bt2">Generate Report</button>
                    </div>
                    </form>
                    </div>
                    
                </div>
                </div>
                <div id="ks1" className="col">
                        <div id="cl" class="container-lg my-3">
                        <div id="myCarousel" class="carousel slide">
                            
                            <ol class="carousel-indicators">
                                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                            </ol>
                            
                            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    
                                </div>
                                <div class="carousel-item">
                                    
                                </div>
                                <div class="carousel-item">
                                    
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
                </div>
                </div>
                </div>
                <div className="container4">
            {/* <div className="col-4"> */}
            <div  className="row">
                <div id="roh" className="colmn">
                    <div className="block1">
                        </div>
            {/* <img id="dlm" src={npic} alt="picture" height="300" width="300"/> */}
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
            {/* </div> */}
            {/* <div className="col-5">
                    
                </div> */}
                </div>
        </div>
            {/* <Contact/> */}
        </div>
    )
}