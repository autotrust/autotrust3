import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import Imgslider from '../components/poster'
import Section from '../components/section';
import Middle from '../components/middle';
import Contact from '../components/Navigation/Footer';
import axios from 'axios';
import Navbar from '../components/Navbar';
 
export default function Home(){


    const [Data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://2e8z6qommd.execute-api.us-east-1.amazonaws.com/testing/getdata')
        .then((res)=>setData(JSON.parse(res.data.body)))
        .catch((err)=>console.log(err))
    }, [])

    return(
        <div>
            <Navbar />
            <Imgslider/> 
            
             <Section/>
            <Middle/>
            {/* <div>
                {Data.map(info => {
                    return<div className='table'>
                        <div className="c1"><h2>{info.at_vehicleid} {info.vin_number} {info.engine_number} {info.reg_number}</h2></div>
                        </div>
                })}
            </div> */}
            <Contact/>
        </div>
    )
}