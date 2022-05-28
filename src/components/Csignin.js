// The Corporate SignIn components of the application
// The authentication of a user has been acheived through AWS Cognito Service.
// Firstly we have configured aws through the terminal.
// While adding the authorization we have created a userpool which will store the user details.
// While creating the userpool we add added the required attributes and also have setup an identity pool.
// We can find the userpool id, web client id, identity pool id in the aws-exports.js file located in the src folder.

import React, {useState, useEffect} from 'react';
import car from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import Contact from '../components/Navigation/Footer';
import Navbar from '../components/Navigation/Navbar';
import {Link} from 'react-router-dom';
import {BiLock} from 'react-icons/bi';
import {Auth, Hub} from 'aws-amplify';
import {IoMdContact} from 'react-icons/io';
import Logo from '../assets/DesignImages/ATFullIcon3.png';
import dashboard from '../assets/DesignImages/dashboard.png';
import {TiThMenuOutline} from 'react-icons/ti';
import PlandSi from './PlandSi';

// At the beginning we have created a form state object and updated it whenever we changed the formType.
const initialFormState = {
    username:'',
    password:'',
    email:'',
    name:'',
    // authCode:'',
    formType:'signIn'
  }
  

function CorpSignin(){

    const [formState, updateFormState]= useState(initialFormState)
    const [user, updateUser] = useState(null)

    useEffect(()=>{
        // Here we check for the currently authenticated user
        checkUser()
        // In the autheHandler function we handle multiple cases.
        authHandler()
    }, [])

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

    async function authHandler(){
        //  We have used hub(inbuilt aws functionality) to share data between modules and components in our application.
        // Here we handled multiple cases like signin, signout, signin_failure etc, and put out alerts in some cases
        // where ever they were required.
        // For error checking we also added console.log to have a better understanding of the issue.
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                    case 'signIn':
                        console.log('user signed in', data);
                        window.location.reload(false);
                        break;
                    
                    case 'signOut':
                        console.log('user signed out', data);
                        updateFormState(()=>({...formState, formType:"signIn" }))
                        break;
                    case 'signIn_failure':
                        console.log('user sign in failed');
                        if(data.payload.data.message==="Custom auth lambda trigger is not configured for the user pool."){
                            alert("Password is required!")
                        }
                        else{
                            alert(data.payload.data.message)
                        }
                        break;
                    case 'configured':
                        console.log('the Auth module is configured');
            }
          });
    }

    // Here we check for the currently authenticated user
    async function checkUser(){
        try{
            const user = await Auth.currentAuthenticatedUser()
            updateUser(user)
            console.log('user:', user)
            console.log("email:", user.attributes.email)
            updateUser(user)
            updateFormState(()=>({...formState, formType:"signedIn" }))
        }catch(err){

        }
    }

    // whenever there is change in the input values we are updating the state
    function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value }))
    }

    const{formType}=formState
    // Here we wrote function for signup with the required attributes.
    // Since this is a corporate login the user wouldn't be able to signup,change his/her password by themselves.
    // In order to signup or change thier password the users need to contact the customer support. 
    async function signIn(){
        const {email, password} = formState
        await Auth.signIn(email, password)
        updateFormState(()=>({...formState, formType:"signedIn" }))
    }
        return(
            <div className='div-login'>
                
                {/* The Corporate signin formtype */}
                {
                   formType==='signIn' && (
                <div id="logo">
                    <div className="row">
                    <Navbar/>
                    <div id="k" className="col-4">
                    <h3 id='sgin'>Corporate Sign In</h3>
                    {/* <label>COMPANY CODE</label>
                    <input id='ipb' onChange={onChange} name='name' placeholder="Enter your Company code" required/><br/> */}
                    <label>EMAIL</label>
                    <input id='ipb' type="email" name='email' onChange={onChange} placeholder='Enter your email Id' required/>
                    <label>PASSWORD</label>
                    <input name='password' id='ipb' type='password' onChange={onChange} placeholder='Enter password' required/>
                    <label id ="para">Forgot Password?</label><br/><br/>
                    {/* When the user clicks on the Secure Sign In button it will trigger the signin function.
                        Next the form will update to signedin */}
                    <button onClick={signIn}id="bt"><BiLock/>{' '}Secure Sign In</button>
                    <p id='cxt'>Haven't registered your company with us yet?{' '}
                    <Link id='csiginiss' to="/components/consales"><span id="gitbold" class="bolded">Get in touch</span></Link>
                    </p>
                </div>
                <div id="k3" className="col-7">
                            <img id="cp" src={car} alt="car" width="500" height="250"/>
                            <div className="cartxt">
                            <h2 id ="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                            </div>
                        </div>
                </div>
                </div>
                   )}

                {/* The generate report form type */}
                {
                    formType=='generateReport' && (
                        <div>
                            <div class="container-fluid">
                                <div class="row">

                                <div class="col-3">
                                <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40" id='lg'></img>
                                </div>
                                <div id='rpnav' className='col-9'>
                                {(toggleMenu || screenWidth > 500) && (

                                <ul id="dpdli1" className="list">
                                <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}>DASHBOARD</button></li>
                                <li className="items"><button className='bnt1' id='nav3'>GENERATE REPORT</button></li>
                                <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))}>MY REPORTS</button></li>
                                
                                <li id='dpbtn1' className='dropdown'>
                                    {/* We assigned the current authenticated user to user state and called out the name attribute */}
                                <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                            <div id="dpct" class="dropdown-content">
                                <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                <div class="dropdown-divider"></div>
                                {/* When the user clicks on the Sign Out button it will trigger the signout function, and redirect back to the main landing page. */}
                                <button class="dropdown-item" id='nav1' onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                </div>
                                </li>
                                
                                </ul>
                                )}
                                </div>
                                <button onClick={toggleNav} className="bnt"><TiThMenuOutline/></button>
                                </div>
                            </div>
                            <PlandSi/>
                        </div>
                    )
                }

                {
                    formType==='myreports' &&(
                        <div>
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-3">
                                    <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40" id='lg'></img>
                                    </div>
                                    <div id='rpnav' className='col-9'>
                                    {(toggleMenu || screenWidth > 500) && (

                                    <ul id="dpdli1" className="list">
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}>DASHBOARD</button></li>
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))}>GENERATE REPORT</button></li>
                                    <li className="items"><button className='bnt1' id='nav3'>MY REPORTS</button></li>
                                    
                                    <li id='dpbtn1' className='dropdown'>
                                        {/* We assigned the current authenticated user to user state and called out the name attribute */}
                                    <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                                <div id="dpct" class="dropdown-content">
                                    <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                    <div class="dropdown-divider"></div>
                                    {/* When the user clicks on the Sign Out button it will trigger the signout function, and redirect back to the main landing page. */}
                                    <button class="dropdown-item" id='nav1' onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                    </div>
                                    </li>
                                    
                                    </ul>
                                    )}
                                    </div>
                                    <button onClick={toggleNav} className="bnt"><TiThMenuOutline/></button>
                                </div>
                            </div>
                            <div className='container1'>
                                <h2>TODAY'S REPORT</h2>
                            </div>
                            <div className='container1'>
                                <h2>SEARCH FORM</h2>    
                            </div>
                        </div>
                    )
                }

                {
                    formType==='signedIn' &&(
                        <div>
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-3">
                                    <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40" id='lg'></img>
                                    </div>
                                    <div id='rpnav' className='col-9'>
                                    {(toggleMenu || screenWidth > 500) && (

                                    <ul id="dpdli1" className="list">
                                    <li className="items"><button className='bnt1' id='nav3'>DASHBOARD</button></li>
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))}>GENERATE REPORT</button></li>
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))}>MY REPORTS</button></li>
                                    
                                    <li id='dpbtn1' className='dropdown'>
                                        {/* We assigned the current authenticated user to user state and called out the name attribute */}
                                    <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                                <div id="dpct" class="dropdown-content">
                                    <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                    <div class="dropdown-divider"></div>
                                    {/* When the user clicks on the Sign Out button it will trigger the signout function, and redirect back to the main landing page. */}
                                    <button class="dropdown-item" id='nav1' onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                    </div>
                                    </li>
                                    
                                    </ul>
                                    )}
                                    </div>
                                    <button onClick={toggleNav} className="bnt"><TiThMenuOutline/></button>
                                </div>
                            </div>
                            
                            <img className="dashboard" src={dashboard} id='db'></img>
                            
                            
                        </div>
                    )
                }

                {
                    formType==="account" && (
                        <div>
                        <div class="container-fluid">
                                <div class="row">
                                <div class="col-3">
                                    <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40" id='lg'></img>
                                    </div>
                                    <div id='rpnav' className='col-9'>
                                    {(toggleMenu || screenWidth > 500) && (

                                    <ul id="dpdli1" className="list">
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}>DASHBOARD</button></li>
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))}>GENERATE REPORT</button></li>
                                    <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))}>MY REPORTS</button></li>
                                    
                                    <li id='dpbtn1' className='dropdown'>
                                        {/* We assigned the current authenticated user to user state and called out the name attribute */}
                                    <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                                <div id="dpct" class="dropdown-content">
                                    <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                    <div class="dropdown-divider"></div>
                                    {/* When the user clicks on the Sign Out button it will trigger the signout function, and redirect back to the main landing page. */}
                                    <button class="dropdown-item" id='nav1' onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                    </div>
                                    </li>
                                    
                                    </ul>
                                    )}
                                    </div>
                                    <button onClick={toggleNav} className="bnt"><TiThMenuOutline/></button>
                                </div>
                            </div>
                        <div id="accCon" className='container1'>
                            <h1>USERNAME : {user.attributes.name}</h1>
                            <h1>EMAIL : {user.attributes.email}</h1>
                        </div>
                        </div>
                    )
                }

                <Contact/>
                </div>
        )
    }

export default CorpSignin;









