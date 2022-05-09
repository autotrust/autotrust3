// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import {Auth, Hub} from 'aws-amplify';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Signin from './components/Psignin';
import Signup from './components/Psignup';
import CorpSignin from './components/Csignin';
import Pland from './components/Pland';
import PlandSi from './components/PlandSi';
import Cland from './components/Cland';
import Conland from './components/Conland';
import ConSales from './components/conSales';
import CustomerSupport from './components/customerSupport';
import Contact from './components/Navigation/Footer';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/components/Psignin" element={<Signin/>}/>
      <Route exact path="/components/Pland" element={<Pland/>}/>
      <Route exact path="/components/Cland" element={<Cland/>}/>
      <Route exact path="/components/Footer" element={<Contact/>}/>
      <Route exact path="/components/Conland" element={<Conland/>}/>
      <Route exact path="/components/PlandSi" element={<PlandSi/>}/>
      <Route exact path="/components/Psignup" element={<Signup/>}/>
      <Route exact path="/components/Csignin" element={<CorpSignin/>}/>
      <Route exact path="/components/conSales" element={<ConSales/>}/>
      <Route exact path="/components/customerSupport" element={<CustomerSupport/>}/>
      {/* <Redirect to="/" /> */}
      </Routes>
    </div>
  );
}


export default App;
