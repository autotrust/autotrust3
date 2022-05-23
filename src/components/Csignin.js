import React, {useState, useEffect} from 'react';
import car from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import Contact from '../components/Navigation/Footer';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {BiLock} from 'react-icons/bi';
import {Auth, Hub} from 'aws-amplify';
import {IoMdContact} from 'react-icons/io';
import Logo from '../assets/DesignImages/ATFullIcon3.png';
import {TiThMenuOutline} from 'react-icons/ti';
import PlandSi from './PlandSi';

const initialFormState = {
    username:'',
    password:'',
    email:'',
    name:'',
    // authCode:'',
    // code:'',
    // new_password:'',
    formType:'signIn'
  }
  

function CorpSignin(){

    const [formState, updateFormState]= useState(initialFormState)
    const [user, updateUser] = useState(null)

    useEffect(()=>{
        checkUser()
        authHandler()
    }, [])

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

    async function authHandler(){
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                    case 'signIn':
                        console.log('user signed in', data);
                        window.location.reload(false);
                        break;
                    case 'signUp':
                        console.log('user signed up');
                        break;
                    case 'signOut':
                        console.log('user signed out', data);
                        updateFormState(()=>({...formState, formType:"signIn" }))
                        // <Navigate to="/components/home" />
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

    function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value }))
    }

    const{formType}=formState

    async function signIn(){
        const {email, password} = formState
        await Auth.signIn(email, password)
        updateFormState(()=>({...formState, formType:"signedIn" }))
    }
        return(
            <div className='div-login'>
                
                {
                   formType==='signIn' && (
                <div id="logo">
                    <div className="row">
                    <Navbar/>
                    <div id="k" className="col-4">
                    <h3 id='sgin'>Corporate Sign In</h3>
                    {/* <div id="bd"> */}
                    {/* <form onSubmit={onSubmit}> */}
                    {/* <label>COMPANY CODE</label>
                    <input id='ipb' onChange={onChange} name='name' placeholder="Enter your Company code" required/><br/> */}
                    <label>EMAIL</label>
                    {/* <input name='username' id='ipb' onChange={onChange} placeholder='username'/> */}
                    <input id='ipb' type="email" name='email' onChange={onChange} placeholder='Enter your email Id' required/>
                    <label>PASSWORD</label>
                    <input name='password' id='ipb' type='password' onChange={onChange} placeholder='Enter password' required/>
                    <label id ="para">Forgot Password?</label><br/><br/>
                    {/* <label id='para'>
                    <input type="checkbox" onChange={this.handleChange}/>
                    {' '}Remember me on this browser</label> */}
                    <button onClick={signIn}id="bt"><BiLock/>{' '}Secure Sign In</button>
                    <Link id='csiginiss' to="/components/consales"><p id='cxt'>Let us know if there is any issue regarding Signup or Signin, and we'll get in touch
                        as soon as we can.
                    </p></Link>
                    {/* </form> */}
                {/* </div> */}
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

                {
                    formType=='generateReport' && (
                        <div>
                            <div class="container-fluid">
                <div class="row">

                <div class="col-3">
                <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40" id='lg'></img>
                </div>
                {/* <div id="middle1" class ="col-6">*/}
                <div id='rpnav' className='col-9'>
                {(toggleMenu || screenWidth > 500) && (

                <ul id="dpdli1" className="list">
                <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}>DASHBOARD</button></li>
                <li className="items"><button className='bnt1' id='nav3'>GENERATE REPORT</button></li>
                <li className="items"><button id='nav3' onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))}>MY REPORTS</button></li>
                
                <li id='dpbtn1' className='dropdown'>
                <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                            <div id="dpct" class="dropdown-content">
                <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                <div class="dropdown-divider"></div>
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
                                    <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                                <div id="dpct" class="dropdown-content">
                                    <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                    <div class="dropdown-divider"></div>
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
                                    <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                                <div id="dpct" class="dropdown-content">
                                    <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                    <div class="dropdown-divider"></div>
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
                                <h2>DASHBOARD'S</h2>
                            </div>
                            <div className='container1'>
                                <h2>MORE DATA</h2>    
                            </div>
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
                                    <button id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</button>
                                                <div id="dpct" class="dropdown-content">
                                    <button class="dropdown-item" id='nav1' onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</button>
                                    <div class="dropdown-divider"></div>
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
                            {/* <h1>COMPANY CODE : {user.attributes.name}</h1> */}
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









