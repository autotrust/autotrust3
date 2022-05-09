import React, {useState} from "react";
import Header from './header';
// import {BiLock} from 'react-icons/bi';
import "../styles/Pland.css";
import Contact from "./Navigation/Footer";
import {Link} from "react-router-dom";
import glimpse from "../assets/DesignImages/FeatureGlimpse.png"
// import {NavLink} from 'react-router-dom';

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
                <Header/>
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
                           {/* <br/> */}
                           <p id="tt">
                               Get the AUTOTRUST report
                               <br/>
                               NOW!!
                           </p>
                           {/* <br/> */}
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
                    {/* <form> */}
                    <input  id="iprp" placeholder="ENTER QUSBEN NUMBER" onChange={(e)=> setChCount(e.target.value.length)} required/>
                    <input  id="iprp" placeholder="ENTER KUBSOKA NUMBER" onChange={(e)=> setChCount1(e.target.value.length)} required/>
                    <ul id="rety">Report Type *</ul>
                    {/* <input type="radio"></input><label id="rt">{' '}BASIC</label><br/>
                    <input type="radio"/><label id="rt">{' '}PREMIUM</label> */}
                    <div className="rep">
                    <input type="radio" id="rk" name="fav_language" value="CSS"/>
                    <label id="rt" for="css">{' '}BASIC</label><br/>
                    <br/>
                    <input type="radio" id="rk" name="fav_language" value="CSS" checked/>
                    <label id="rt" for="css">PREMIUM</label><br/><br/>
                    {/* <button id="grbt">Generate Report</button> */}
                    <button onClick={onSubmit} id="grbt" >Generate Report</button>
                    </div>
                    {/* </form> */}

                </div>
            </div>
        </div>
                <Contact/>
            </div>
    )
                }

export default Pland;