import React, {useState} from "react";
import '../styles/PlandSi.css';
export default function PlandSi(){

    const [chCount, setChCount] = useState(0);
    const [chCount1, setChCount1] = useState(0);

    function onSubmit(){
        // const inputs={
        //     'input1' : chCount,
        //     'input2' : chCount1
        // }
        // console.log(inputs)
        
        if(chCount===0 || chCount1===0){
            alert("Please fill the field!")
        }
        if(chCount>0 && chCount1>0){
            // alert("Success")
            window.location.href="/components/powerBi"
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

                    <input  id="iprp" placeholder="ENTER QUSBEN NUMBER" onChange={(e) => setChCount(e.target.value.length)} required/>
                    <input  id="iprp" placeholder="ENTER KUBSOKA NUMBER" onChange={(e) => setChCount1(e.target.value.length)} required/>
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
                <div id="ks2" className="col">
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