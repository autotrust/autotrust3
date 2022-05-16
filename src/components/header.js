import React from "react";
// import {BiLock} from 'react-icons/bi';
import '../styles/header.css';
import Logo from '../assets/DesignImages/ATFullIcon3.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from "react-router-dom";
// import useWindowSize from "./useWindowSize";

export default function Header(){

    // const {width} = useWindowSize();
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                   <Link to ="/"> <img className="logo" src={Logo} height="35"></img></Link>
                </div>
                {/* {width> 500 && ( */}
                <div id="middle" class ="col-6">
                <ul>
                    <NavLink exact activeClassName="active" to='/components/Pland'>PERSONAL</NavLink>
                    <NavLink exact activeClassName="active" to='/components/Cland'>CORPORATE</NavLink>
                    <button id="gvbt" class="button buttons">GOVERNMENT</button>
                    <NavLink exact activeClassName="active" to='/components/Conland'>CONTACT</NavLink>
                </ul>
                {/* <a href="/components/Pland" class="button buttons">PERSONAL</a>
                <Link to="/components/Cland" class="button buttons">CORPORATE</Link>
                <button class="button buttons">GOVERNMENT</button>
                <Link to="/components/Conland" class="button buttons">CONTACT</Link> */}

                </div>
                {/* )} */}
                {/* {width < 500 && ( */}
                    <div id="dd" class ="col-2">
                    <li class="dropdown">
                    <button class="dropbtn">MENU</button>
                    <div class="dropdown-content">
                            <a class="dropdown-item" href="/components/Pland">PERSONAL</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/components/Cland">CORPORATE</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">GOVERNMENT</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/components/Cland">CONTACT</a> 
                    </div>
                    </li>
                </div>
                {/* )
                    
                } */}

                <div id="dd" class ="col-2">
                    <li class="dropdown">
                    <button class="dropbtn">SECURE SIGN IN</button>
                    <div class="dropdown-content">
                            <a class="dropdown-item" href="/components/Psignup">Personal</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/components/Csignin">Corporate</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Government</a> 
                    </div>
                    </li>
                </div>
            </div>
        </div>
    )
}