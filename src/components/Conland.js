//The contact page of the application. 
// The Navbar and footer components have been imported and called on top and bottom of the page respectively.

import React from "react";
import Contact from "../components/Navigation/Footer";
import bgi from "../assets/DesignImages/ContactPageImg_Green.png";
import sale from "../assets/DesignImages/Sales.png";
import support from "../assets/DesignImages/support.png";
import "../styles/Conland.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";


export default function Conland(){

    return(
        <div>
        <Navbar/>
        <div className="container6">
            <img id="abcd" src={bgi} alt="image" height={200} width="900"/>    
        </div>
        <div className="container5">
            <div className="row">
                <div className="block6">
                <div className="row">
                    <div className="ncol">
                        <img id="tts" src={sale} alt="salesimg" height={100} width="100"/>
                    <h3 id="hed">Talk to Sales</h3>
                    <p id="para1">We'll help you leverage the power of AutoTrust in the right way - with solutions
                        specific to your business needs. Just pick up the phone and talk to a member of 
                        our Sales Team or simply drop in your details and we'll get back to you asap.
                    </p>
                    <br/>
                    </div>
                    <div className="ncol1">
                        <img id="cs" src={support} alt="supportimg" height={100} width="100"/>
                    <h3 id="hed">Contact Support</h3>
                    <p id="para2">Our help centre is always open for business. If you can't find the answer you're
                        looking for, we're here to lend a hand.
                    </p>
                    <br/>
                    
                    </div>
                    </div>
                    <div id="nrow" className="row">
                        {/* When the user clicks on the contact sales button he'll be redirected to another page where he/she
                        can fill out a form with their concerns */}
                    <div className="lacol">
                        <Link to="/components/conSales"><button id="csbt">Contact Sales</button></Link>
                    </div>
                    {/* When the user clicks on the customer support button he'll be redirected to another page where he/she
                        can find company's email and contact number.*/}
                    <div id="newline" className="lacol">
                    <Link to="/components/customerSupport"><button id="csbt1">Customer Support</button></Link>
                    </div>
                </div>
                </div>
                
            </div>    
        </div>
        <Contact/>
        </div>
    )
}