import React, {useState, useEffect} from 'react'
import '../styles/Navbar.css';
import {Link, NavLink } from 'react-router-dom';
import Logo from '../assets/DesignImages/ATFullIcon3.png';
import {TiThMenuOutline} from 'react-icons/ti';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
      
        {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
            <Link to ="/"> <img className="logo" src={Logo} id='lg' height="35"></img></Link>
        <li className="items"><NavLink id='nav' to='/components/Pland' >PERSONAL</NavLink></li>
        <li className="items"><NavLink id='nav' to='/components/Cland'>CORPORATE</NavLink></li>
        <li className="items"><NavLink id='nav' to='#'>GOVERNMENT</NavLink></li>
        <li className="items"><NavLink id='nav' to='/components/Conland'>CONTACT</NavLink></li>
        <li className='dropdown'>
        <button class="dropbtn">SECURE SIGN IN</button>
                    <div class="dropdown-content">
        <NavLink class="dropdown-item" id='nav1' to='/components/Psignup'>PERSONAL</NavLink>
        <div class="dropdown-divider"></div>
        <NavLink class="dropdown-item" id='nav1' to='/components/Csignin'>CORPORATE</NavLink>
        <div class="dropdown-divider"></div>
        <NavLink class="dropdown-item" id='nav1' to='#'>GOVERNMENT</NavLink>
        </div>
        </li>
        </ul>
        )}
    <button onClick={toggleNav} className="btn"><TiThMenuOutline/></button>
      
      </div>
    )
        }