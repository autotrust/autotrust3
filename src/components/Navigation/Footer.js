import React from "react";
import '../../styles/Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
// import fcGoogle from "react-icons/fc"
// import IoIosCall from "react-icons/io";
// import BsFacebook from 'react-icons/bs';
const date = new Date();
const dateyear = date.getFullYear();
export default function Contact(){
    return(
        <div className="footer">
            <div className="row">
                <div className="col" id="foot1">
                    <ul>Contact Us</ul>
                    <div className="det">
                    <ul>Call Us</ul><br/>
                    <ul>Have us Contact u</ul><br/>
                    <ul>Email or Drop in</ul><br/>
                    </div>
                </div>
                <div className="col" id="foot">
                    <ul>More</ul>
                    <div className="det">
                    <ul>Join Us</ul><br/>
                    <ul>The Team</ul>
                    </div>
                </div>
                <div className="col" id="foot2">
                    <h6>Find us on</h6>
                    <div className="det">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>{' '}
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>{' '}
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>{' '}
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </div>
                </div>
            </div>
            <div className="row">
          <div className="col-lg-12 main-footer-copyright">
            <p id="copy">Copyright &copy; {dateyear} AutoTrust India Ltd. All Right reserved.</p>
            <hr />
          </div>
        </div>
        </div>
    )
}