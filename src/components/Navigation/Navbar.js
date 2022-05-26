// The header component of the application

import React, {useState, useEffect} from 'react'
import '../../styles/Navbar.css';
import '../../styles/header.css';
import {Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/DesignImages/ATFullIcon3.png';
import {TiThMenuOutline} from 'react-icons/ti';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
  
    // here we are using useState and declaring state variables to store the window size and set the state whenever it resizes
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)  

    // we are setting up the resizing functionality inside useEffect, so that it can be performed even after the application is rendered

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

    return(
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2'>
          <Link to ="/"> <img className="logo" src={Logo} id='lg' height="40"></img></Link>
          </div>
          <div id='rpnav' className='col-10'>

        {/* When the screenwidth is above 1100 we have setup the navbar components to be visible. */}
         
        {(toggleMenu || screenWidth > 1100) && (
          
        <ul className="list">
            
        <li className="items"><NavLink id='nav' to='/components/Pland' >PERSONAL</NavLink></li>
        <li className="items"><NavLink id='nav' to='/components/Cland'>CORPORATE</NavLink></li>
        <li className="items"><a id='nav' href='' >GOVERNMENT</a></li>
        <li className="items"><NavLink id='nav' to='/components/Conland'>CONTACT</NavLink></li>
        <li className='dropdown'>
        <button class="dropbtn">SECURE SIGN IN</button>
                    <div class="dropdown-content">
        <NavLink class="dropdown-item" id='nav1' to='/components/Psignup'>Personal</NavLink>
        <div class="dropdown-divider"></div>
        <NavLink class="dropdown-item" id='nav1' to='/components/Csignin'>Corporate</NavLink>
        <div class="dropdown-divider"></div>
        <NavLink class="dropdown-item" id='nav1' to='#'>Government</NavLink>
        </div>
        </li>
        </ul>
        )}
        </div>

        {/* This piece of code renders when the screenwidth is lessthan 1100. */}
        {/* When the user clicks on the menu button the toggleNav function will be triggered. */}
        {/* The css has been changed accordingly to display the navbar components when a user clicks on the menu icon. */}
        <button onClick={toggleNav} className="bnt"><TiThMenuOutline/></button>
        </div>
          </div>
        )
        }