import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import Header from '../components/header'
import Imgslider from '../components/poster'
import Section from '../components/section';
import Middle from '../components/middle';
import Contact from '../components/Navigation/Footer';
import axios from 'axios';
import Navbar from '../components/Navbar';
 
// import {API, graphqlOperation} from 'aws-amplify';
// import {listVehicleDetails} from '../graphql/queries';
export default function Home(){

    // const[vehicles, setVehicles] = useState([])

    // useEffect(()=>{
    //     fetchData()
    // }, []);

    // const fetchData = async () => {
    //     try{
    //         const vehicleData = await API.graphql(graphqlOperation(listVehicleDetails));
    //         const vehcileList = vehicleData.data.listVehicleDetails.items;
    //         console.log("vehicle list", vehcileList);
    //         setVehicles(vehcileList)
    //     } catch(error){
    //         console.log("error on fetching", error);
    //     }
    // }


    const [Data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://2e8z6qommd.execute-api.us-east-1.amazonaws.com/testing/getdata')
        .then((res)=>setData(JSON.parse(res.data.body)))
        .catch((err)=>console.log(err))
    }, [])

    return(
        <div>
            <Navbar />
            {/* <Header/> */}
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
            {/* <div className='vehicleList'>
                {vehicles.map(vehicle => {
                    return <div className='vehicleCard'>
                        <div className='vehicleName'>{vehicle.name}</div>
                        <div className='vehicleOwner'>{vehicle.owner}</div>
                        <div className='vehicleDescription'>{vehicle.description}</div>
                        </div>
                })}
            </div> */}
            <Contact/>
        </div>
    )
}