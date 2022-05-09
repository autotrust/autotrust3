import React from "react";
import '../../styles/Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
// import fcGoogle from "react-icons/fc"
// import IoIosCall from "react-icons/io";
// import BsFacebook from 'react-icons/bs';
const date = new Date();
const dateyear = date.getFullYear();
export default function Contact(){
    return(
        <div className="footer">
            <div className="row">
                <div className="col-8" id="foot1">
                    <ul id="fthd">Contact Us</ul>
                    <div>
                    <Link to="/components/customerSupport"><ul id="ftli">Call Us</ul></Link><br/>
                    <Link to="/components/conSales"><ul id="ftli">Have us Contact u</ul></Link><br/>
                    <Link to="/components/customerSupport"><ul id="ftli">Email or Drop in</ul></Link>
                    </div>
                </div>
                <div className="col-2" id="foot">
                    <ul id="fthd">More</ul>
                    <div>
                    <ul id="ftli">Join Us</ul><br/>
                    <ul id="ftli">The Team</ul>
                    </div>
                </div>
                <div className="col-2" id="foot2">
                    <h6 id="fthd">Find us on</h6>
                    <br/>
                    <div id="ftli" className="det">
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