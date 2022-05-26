// The Personal SignIn and SignUp components of the application
// The authentication of a user has been acheived through AWS Cognito Service.
// Firstly we have configured aws through the terminal.
// While adding the authorization we have created a userpool which will store the user details.
// While creating the userpool we add added the required attributes and also have setup an identity pool.
// We can find the userpool id, web client id, identity pool id in the aws-exports.js file located in the src folder.

import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import "../styles/psignup.css";
import "../styles/Psignin.css"
import PlandSi from './PlandSi';
import car  from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import Contact from './Navigation/Footer';
import {BiLock} from 'react-icons/bi';
import {IoMdContact} from 'react-icons/io';
import Logo from '../assets/DesignImages/ATFullIcon3.png'
import '../styles/PlandSi.css';
import {Auth, Hub} from 'aws-amplify';
import Navbar from '../components/Navigation/Navbar';
import {TiThMenuOutline} from 'react-icons/ti';

// At the beginning we have created a form state object and updated it whenever we changed the formType.
const initialFormState = {
    username:'',
    password:'',
    email:'',
    authCode:'',
    name:'',
    code:'',
    new_password:'',
    formType:'signIn'
  }

function Signup() {
    
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
        // Here we handled multiple cases like signin, sigup, signout, signin_failure etc, and put out alerts in some cases
        // where ever they were required.
        // For error checking we also added console.log to have a better understanding of the issue.
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    console.log('user signed in', data.payload.message);
                    window.location.reload(false);
                    break;
                case 'signUp':
                    console.log('user signed up');
                    break;
                case 'signOut':
                    console.log('user signed out', data.payload.message);
                    updateFormState(()=>({...formState, formType:'main'}))
                    
                    break;
                case 'signIn_failure':
                    console.log('user sign in failed');
                    if(data.payload.data.message==="Custom auth lambda trigger is not configured for the user pool."){
                            alert("Password is required!")
                        }
                    alert(data.payload.data.message)
                    break;
                case 'signUp_failure':
                        console.log('user sign up failed : ', data.payload.data.message)
                        alert(data.payload.data.message)
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
            console.log('user:', user)
            console.log('userdata', user.data)
            console.log('data:', user.getUsername())
            updateUser(user)
            updateFormState(()=>({...formState, formType:"signedIn" }))
        }catch(err) {
        }
    }
    // whenever there is change in the input values we are updating the state
    function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value }))
    }
    const{formType}=formState

    // Here we wrote function for signup, confirmsignup, signin, forgotpassword, forgotpasswordsubmit with the required attributes
    // Below each function has the respective inbuilt aws methods.
    // we updated the forms in a chain process, signup->confirmsignup->signin->signedin, 
    // forgotpassword->forgotpasswordsubmit->signedin

    async function signUp(){
        const {email, name, username, password} = formState
        await Auth.signUp({email, username, password, attributes:{name}})
        updateFormState(()=>({...formState, formType:"confirmSignUp" }))
    }       
    async function confirmSignUp(){
        const {username, authCode} = formState
        await Auth.confirmSignUp(username, authCode)
        updateFormState(()=>({...formState, formType:"signIn" }))
    }
    async function signIn(){
        const {email, password} = formState
        await Auth.signIn(email, password)
        updateFormState(()=>({...formState, formType:"signedIn" }))
    }

    async function forgotPassword(){
        const {email} = formState
        await Auth.forgotPassword(email)
        updateFormState(()=>({...formState, formType:"forgotPasswordSubmit" }))
    }

    async function forgotPasswordSubmit(){
        const {email, code, new_password} = formState
        await Auth.forgotPasswordSubmit(email, code, new_password)
        alert("Password Changed Successfully")
        updateFormState(()=>({...formState, formType:"signIn" }))
    }

        return (
            <div className='div-login'>
                   {/* Here we have return each component in each formType */}
                    {
                        formType==='main'&&(
                            <Navigate to='/'></Navigate>
                        )
                    }

                    {/* The Signup form type */}
                    {
                        formType==='signUp' && (
                            
                            <div className='row'>
                                <Navbar/>
                            <div id="k" className="col-4">
                            <h3 id='sgin'>Sign Up</h3>
                                <div id="bd">
                                <div className='col' id ="spip">
                                        <label>FIRST NAME</label>
                                        <input name='name' id='ipb' onChange={onChange} placeholder='Enter your first name'/>
                                        </div>
                                        <div className='col' id ="spip">
                                        <label>LAST NAME</label>
                                        <input onChange={onChange} type="text" id="ipb" name="username" placeholder="Enter your last name" required /><br />
                                        </div>
                                        <label>EMAIL ADDRESS</label>
                                        <input onChange={onChange} id="ipb" name="username" placeholder="Enter your email Id" required /><br />
                                        <label>PASSWORD</label>
                                        <input onChange={onChange} type="password" id="ipb" name="password" placeholder="Choose a strong password" required minLength="8" /><br />
                                        <label id='agree'>
                                        <input  type="checkbox" onChange={onChange}/>
                                        {' '}I agree to the Terms and Privacy Policy
                                        </label>
                                        {/* When the user clicks on the CREATE MY ACCOUNT button it will trigger the signup function.
                                        Next the form will update to confirmsignup */}
                                        <button id="bt" onClick={signUp}><BiLock/>{' '}CREATE MY ACCOUNT</button>
                                        <button id='bt' onClick={() => updateFormState(()=>({...formState, formType:'signIn'}))}>Have an account? Sign In</button>
                                    
                                </div>
                            </div>
                            <div id="k2" className="col-7">
                            <img id="cp" src={car} alt="car" width="500" height="250"/>
                            <div className="cartxt">
                            <h2 id ="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                            </div>
                            </div>
                            </div>
                        )
                    }

                    {/* The confirmsignup form type */}
                    {
                        formType==='confirmSignUp' && (
                            <div className='row'>
                                <Navbar/>
                            <div id='cnfsp' className="col-4">
                            <h3 id='verf'>Verification</h3>
                            <input id='ipb' name='authCode' onChange={onChange} placeholder='Confirmation Code'/>
                            {/* When the user clicks on the Confirm Sign Up button it will trigger the confirmsignup function.
                                Next the form will update to signin */}
                            <button id= 'bt' onClick={confirmSignUp}>Confirm Sign Up</button>
                            </div>

                            <div id="k2" className="col-7">
                            <img id="cp" src={car} alt="car" width="500" height="250"/>
                            <div className="cartxt">
                            <h2 id ="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                            </div>
                            </div>
                            </div>
                        )
                    }

                    {/* The forgotpassword formtype */}
                    {
                        formType ==="forgotPassword"&&(
                            <div className='row'>
                                <Navbar/>
                                <div id="k" className="col-4">
                                    <h3 id='sgin'>Forgot Password</h3>
                                    <input id='ipb' onChange={onChange} name="email" type="email" placeholder='Enter your registered email ID'></input>
                                    {/* When the user clicks on the submit button it will trigger the forgotpassword function.
                                        Next the form will update to forgotpasswordsubmit */}
                                    <button id='bt' onClick={forgotPassword}>Submit</button>
                                </div>
                                <div id="k2" className="col-7">
                                    <img id="cp" src={car} alt="car" width="500" height="250"/>
                                    <div className="cartxt">
                                    <h2 id ="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                        <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                        <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                    </div>
                                </div>
                                <Contact/>
                            </div>
                        )
                    }

                    {/* The forgotpasswordsubmit formtype */}
                    {
                        formType==='forgotPasswordSubmit'&&(
                            <div className='row'>
                                <Navbar/>
                                <div id="k" className="col-4">
                                    <h3 id='sgin'>Forgot Password</h3>
                                    <input id='ipb' onChange={onChange} name="email" type="email" placeholder='Enter your email Id'></input>
                                    <input id='ipb' name='code' onChange={onChange} placeholder='verification code'></input>
                                    <input id='ipb' name='new_password' onChange={onChange} type="password" placeholder='new password'></input>
                                    {/* When the user enters the verificaion code that he/she recieved through the mail and enters a new password 
                                        and clicks on the submit button it will trigger the forgotpasswordsubmit function. Next the form will 
                                        update to signin */}
                                    <button id='bt' onClick={forgotPasswordSubmit}>Submit</button>
                                </div>
                                <div id="k2" className="col-7">
                                    <img id="cp" src={car} alt="car" width="500" height="250"/>
                                    <div className="cartxt">
                                    <h2 id ="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                        <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                        <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                    </div>
                                </div>
                                <Contact/>
                            </div>
                        )
                    }

                    {/* The personal signin form */}
                    {
                        formType==='signIn' &&(
                        <div className='row'>
                            <Navbar/>
                            <div id="k" className="col-4">
                                <h3 id='sgin' >Sign In</h3>
                                <label>EMAIL</label>
                                <input id='ipb' name='email' type="email" onChange={onChange} placeholder='Enter your registered email Id' required/>
                                <p id='par' onClick={() => updateFormState(()=>({...formState, formType:'signUp'}))}>Haven't registered? Sign Up Now </p>
                                <label>PASSWORD</label>
                                <input name='password' id='ipb' type="password" onChange={onChange} placeholder='Enter password' required/>
                                <p id="par" onClick={() => updateFormState(()=>({...formState, formType:'forgotPassword'}))} >Forgot Password?</p>
                                <input id='chbx' type="checkbox"/>
                                <label>Remember me on this browser</label>
                                {/* When the user clicks on the Secure Sign In button it will trigger the signin function.
                                    Next the form will update to signedin */}
                                <button onClick={signIn} id="bt"><BiLock/>{' '}Secure Sign In</button>
                            </div>

                            <div id="k2" className="col-7">
                                <img id="cp" src={car} alt="car" width="500" height="250"/>
                                <div className="cartxt">
                                <h2 id ="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                    <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                    <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                </div>
                            </div>
                        </div>
                        )
                    }

                    {/* After user signed in fromtype */}
                    {
                        formType==='signedIn' && (
                            <div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-3">
                                        <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40" id='lg'></img>
                                        </div>
                                        <div id='rpnav' className='col-9'>
                                            {(toggleMenu || screenWidth > 500) && (

                                            <ul id="dpdli" className="list">
                                            <li className="items"><button className='bnt1' id='nav2' to='#'>GENERATE REPORT</button></li>
                                            <li className="items"><button id='nav2' onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))}>MY REPORTS</button></li>
                                            
                                            <li id='dpbtn' className='dropdown'>
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
                                        {/* This piece of code renders when the screenwidth is lessthan 1100. */}
                                        {/* When the user clicks on the menu button the toggleNav function will be triggered. */}
                                        {/* The css has been changed accordingly to display the navbar components when a user clicks on the menu icon. */}
                                        <button onClick={toggleNav} className="bnt"><TiThMenuOutline/></button>
                                    </div>
                                </div>
                                <PlandSi/>
                            </div>    
                        )
                    }

                    {/* My reports form type */}
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

                                            <ul id="dpdli" className="list">
                                            <li className="items"><button id='nav2' onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}>GENERATE REPORT</button></li>
                                            <li className="items"><button className='bnt1' id='nav2' >MY REPORTS</button></li>
                                            
                                            <li id='dpbtn' className='dropdown'>
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
                                    <h2>REPORT 1 SNIPPET</h2>
                                </div>
                                <div id="accCon" className='container1'>
                                    <h2>REPORT 2 SNIPPET</h2>    
                                </div>
                                <div id="accCon" className='container1'>
                                    <h2>REPORT 3 SNIPPET</h2>    
                                </div>
                            </div>
                        )
                    }
                    
                    {/* My account formtype */}
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

                                            <ul id="dpdli" className="list">
                                            <li className="items"><button id='nav2' onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}>GENERATE REPORT</button></li>
                                            <li className="items"><button id='nav2' onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))} >MY REPORTS</button></li>
                                            
                                            <li id='dpbtn' className='dropdown'>
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
export default Signup;






