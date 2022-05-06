import React, {useState, useEffect} from 'react';
import car from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import Header from '../components/header';
import Contact from '../components/Navigation/Footer';
import {BiLock} from 'react-icons/bi';
import {Auth, Hub} from 'aws-amplify';
import {IoMdContact} from 'react-icons/io';
import Logo from '../assets/DesignImages/ATFullIcon2.png';
import {Link} from 'react-router-dom';
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

    async function authHandler(){
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                    case 'signIn':
                        console.log('user signed in', data);
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
                        alert(data.payload.data.message)
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
            // updateUser(user)
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
        await Auth.signIn({email, password})
        updateFormState(()=>({...formState, formType:"signedIn" }))
    }
        return(
            <div className='div-login'>
                
                {
                   formType==='signIn' && (
                <div id="logo">
                    <div className="row">
                    <Header/>
                    <div id="k" className="col-4">
                    <h3>Corporate Sign In</h3>
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
                    {/* </form> */}
                {/* </div> */}
                </div>
                <div className="col-7">
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
                   <Link to ="/components/Psignup"> <img className="logo" src={Logo} height="40"></img></Link>
                </div>
                <div id="middle1" class ="col-6"> 
                <button onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}  class="button buttons">DASHBOARD</button>          
                <button id="butn3" class="button buttons">GENERATE REPORT</button>
                <button onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))} id='butn3' class="button buttons">ALL REPORTS</button>
                </div>
                <div id="dd" class ="col-2">
                    <li class="dropdown">
                    <a id='uname' href="javascript:void(0)" class="dropbtn"><IoMdContact/>{' '} {user.attributes.name}</a>
                    <div  class="dropdown-content">
                            <a id='usdd' class="dropdown-item" onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</a>
                            <div class="dropdown-divider"></div>
                            <button id='usdd' class="dropdown-item" onClick={ ()=>Auth.signOut()}>Sign Out</button>
                    </div>
                    </li>
                </div>
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
                                    <img onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))} className="logo" src={Logo} height="40"></img>
                                    </div>
                                    <div id="middle1" class ="col-6">  
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))}  class="button buttons">DASHBOARD</button>         
                                    <button id="butn3" class="button buttons">GENERATE REPORT</button>
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))} id='butn3' class="button buttons">ALL REPORTS</button>
                                    </div>
                                    <div id="dd" class ="col-2">
                                        <li class="dropdown">
                                        <a id='uname' href="javascript:void(0)" class="dropbtn"><IoMdContact/>{' '} {user.attributes.name}</a>
                                        <div  class="dropdown-content">
                                                <a id='usdd' class="dropdown-item" onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</a>
                                                <div class="dropdown-divider"></div>
                                                <button id='usdd' class="dropdown-item" onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                        </div>
                                        </li>
                                    </div>
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
                                    <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40"></img>
                                    </div>
                                    <div id="middle1" class ="col-6">  
                                    <button class="button buttons">DASHBOARD</button>         
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))} id="butn3" class="button buttons">GENERATE REPORT</button>
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))} id='butn3' class="button buttons">ALL REPORTS</button>
                                    </div>
                                    <div id="dd" class ="col-2">
                                        <li class="dropdown">
                                        <a id='uname' class="dropbtn"><IoMdContact/>{' '} {user.attributes.name}</a>
                                        <div  class="dropdown-content">
                                                <a id='usdd' class="dropdown-item" onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</a>
                                                <div class="dropdown-divider"></div>
                                                <button id='usdd' class="dropdown-item" onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                        </div>
                                        </li>
                                    </div>
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
                                    <img onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} className="logo" src={Logo} height="40"></img>
                                    </div>
                                    <div id="middle1" class ="col-6">  
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'signedIn'}))} class="button buttons">DASHBOARD</button>         
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'generateReport'}))} id="butn3" class="button buttons">GENERATE REPORT</button>
                                    <button onClick={() => updateFormState(()=>({...formState, formType:'myreports'}))} id='butn3' class="button buttons">ALL REPORTS</button>
                                    </div>
                                    <div id="dd" class ="col-2">
                                        <li class="dropdown">
                                        <a id='uname' class="dropbtn"><IoMdContact/>{' '}{user.attributes.name}</a>
                                        <div  class="dropdown-content">
                                                <a id='usdd' class="dropdown-item" onClick={() => updateFormState(()=>({...formState, formType:'account'}))}>My Account</a>
                                                <div class="dropdown-divider"></div>
                                                <button id='usdd' class="dropdown-item" onClick={ ()=>Auth.signOut()}>Sign Out</button>
                                        </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        <div className='container1'>
                            <h1>COMPANY CODE : {user.attributes.name}</h1>
                            <h1>USERNAME : {user.username}</h1>
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









