// The main landing page of the application.

import React, { useEffect, useState } from 'react';
import Imgslider from '../components/poster'
import Section from '../components/section';
import Middle from '../components/middle';
import Contact from '../components/Navigation/Footer';
import axios from 'axios';
import Navbar from '../components/Navigation/Navbar';
 
export default function Home(){

    // Here we are connecting the appliction with a relational database.
    // In order to achieve this functionality we have used some aws services namely, AWS RDS, API Gateway, AWS Lambda,
    // pgadmin(postgresql rds database).

    // The architecture of this functionality is as follows
    // 1. Here we are making a get request to the endpoint URL specified by AWS API Gateway.
    // 2. The API Gateway will validate this request and then it will trigger the lambda function.
    // 3. On the other hand we have created a database in the RDS and connected it with the postgresql database using the
    // endpoint of the database in the RDS.
    // 4. Using the same endpoint we connected the RDS to the lambda function.
    // 5. In the lambda function we specified a query which extracts the data from the database.
    // 6. Below in the return block using map functionality we are extracting the required data from the database.

    
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