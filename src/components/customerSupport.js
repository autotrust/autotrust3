import React from 'react';
import Header from "../components/header";
import Contact from "../components/Navigation/Footer";
import bgi from "../assets/DesignImages/ContactPageImg_Green.png";
import {BiPhoneCall} from 'react-icons/bi';
import {SiGmail} from 'react-icons/si';
import Navbar from './Navbar';

function CustomerSupport(){
    return(
        <div>
            <Navbar/>
            <div className="container6">
                <img id="abcd" src={bgi} alt="image" height={200} width="900"/>    
            </div>
            <div id="r4k" className="col-4">
                <h3 id='cusS'>Customer Support</h3>
                <h4 id='csup'><BiPhoneCall/>{" "} : 9876543210</h4>
                <h4 id='csup'><SiGmail/>{" "} : autotrust@gmail.com</h4>
            </div>
            <Contact/>
        </div>
    )
}

export default CustomerSupport;