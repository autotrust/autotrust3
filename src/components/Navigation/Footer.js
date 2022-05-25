import React from "react";
import '../../styles/Footer.css'
import { Link } from "react-router-dom";
import fb from "../../assets/DesignImages/facebook.png";
import insta from "../../assets/DesignImages/Instagram.png";
import twitter from "../../assets/DesignImages/Twitter.png";
import linkedin from "../../assets/DesignImages/Linkedin.png";

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
                    <ul id="fthd">Find us on</ul>
                    <br/>
                    <br/>
                    <div id="ftli" className="det">
                    <img id="sicon" src={fb} alt="fb" width="35" height="35"/>
                    <img id="sicon" src={insta} alt="fb" width="35" height="35"/>
                    <img id="sicon" src={twitter} alt="fb" width="35" height="35"/>
                    <img id="sicon" src={linkedin} alt="fb" width="35" height="35"/>
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