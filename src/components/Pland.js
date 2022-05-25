import React, {useState} from "react";
import "../styles/Pland.css";
import Contact from "./Navigation/Footer";
import {Link} from "react-router-dom";
import glimpse from "../assets/DesignImages/FeatureGlimpse.png"
import Navbar from "./Navbar";

function Pland(){
    
    const [chCount, setChCount] = useState(0);
    const [chCount1, setChCount1] = useState(0);
    
    function onSubmit() {
        
    if (chCount===0 || chCount1===0 ){
        alert("Please fill the field!")
    }
    if (chCount>0 && chCount1>0){
        window.location.href="/components/Psignup"
    }
    }   
    
    return(
            <div>
                <Navbar/>
                <div className="container2">
                    <div className="row">
                        <div id="Pl" className="col-7">
                            <img src={glimpse} id="pimg" alt = "glimpse" width="1000" height="450">
                            </img>
                        </div>
                        <div className="col-1"  id = "ac">
                           <p id="f">
                           nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur
                           egruuaue dduas dassbdas <span class="bolded">qwerty</span>
                           </p>
                           <p id="tt">
                               Get the AUTOTRUST report
                               <br/>
                               NOW!!
                           </p>
                           <Link to="/components/Psignup">
                           <button id ="lbt">
                               GET REPORT
                           </button>
                           </Link>
                        </div>
                    </div>
                </div>
                <div className="container-p">
            <div className="row">
                <div className="Box">
                    <h2 id="hd11">
                        Generate AUTOTRUST Report
                    </h2>
                    <input  id="iprp" placeholder="ENTER QUSBEN NUMBER" onChange={(e)=> setChCount(e.target.value.length)} required/>
                    <input  id="iprp" placeholder="ENTER KUBSOKA NUMBER" onChange={(e)=> setChCount1(e.target.value.length)} required/>
                    <ul id="rety">Report Type *</ul>
                    <div className="rep">
                    <input type="radio" id="rk" name="fav_language" value="CSS"/>
                    <label id="rt" for="css">{' '}BASIC</label><br/>
                    <br/>
                    <input type="radio" id="rk" name="fav_language" value="CSS" checked/>
                    <label id="rt" for="css">PREMIUM</label><br/><br/>
                    <button onClick={onSubmit} id="grbt" >Generate Report</button>
                    </div>
                </div>
            </div>
        </div>
                <Contact/>
            </div>
    )
                }

export default Pland;