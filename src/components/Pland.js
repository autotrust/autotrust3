// The personal landing page before the user sign in to his/her account.

import React, {useState} from "react";
import "../styles/Pland.css";
import Contact from "./Navigation/Footer";
import {Link} from "react-router-dom";
import glimpse from "../assets/DesignImages/FeatureGlimpse.png"
import Navbar from "../components/Navigation/Navbar";

function Pland(){
    
    // Here we are using useState to maintain the count of the inputs for input field validation purpose.

    const [chCount, setChCount] = useState(0);
    const [chCount1, setChCount1] = useState(0);
    
    function onSubmit() {
        // checking if the input fields are empty or not
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
                    {/* When the user enters a value we are setting up it's state to the new value.*/}
                    <input  id="iprp" placeholder="ENTER QUSBEN NUMBER" onChange={(e)=> setChCount(e.target.value.length)} required/>
                    <input  id="iprp" placeholder="ENTER KUBSOKA NUMBER" onChange={(e)=> setChCount1(e.target.value.length)} required/>
                    <ul id="rety">Report Type *</ul>
                    <div className="rep">
                    <input type="radio" id="rk" name="fav_language" value="CSS"/>
                    <label id="rt" for="css">{' '}BASIC</label><br/>
                    <br/>
                    <input type="radio" id="rk" name="fav_language" value="CSS" checked/>
                    <label id="rt" for="css">PREMIUM</label><br/><br/>
                    {/* When the user clicks on the generate report button, the onSubmit function triggers and the validation
                    takes place and a warning pops up if the input is empty. If not it will be redirected to a report.*/}
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