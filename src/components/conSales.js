// The contact sales page of the application
// The main functionality of this page is to send an email to the company with the details filled by the user.
// In order to achieve this functionality we have used some aws services namely, AWS SES, API Gateway, AWS Lambda.
// In the SES service an identity need to be cretaed with an email that will be used to send/recieve emails.


// The basic flow of this functionality is as follows
// 1. When the user submits the form, the response is sent to the API Gateway.
// 2. The API Gateway send it as an event to the lamda function.
// 3. The lambda function triggers the AWS SES.
// 4. At last the AWS SES will send the response to the company's email.


import React, {useState} from 'react';
import Contact from "../components/Navigation/Footer";
import Navbar from '../components/Navigation/Navbar';
import bgi from "../assets/DesignImages/ContactPageImg_Green.png";
function ConSales(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // The below url is the endpoint url of the API Gateway which is added as a trigger to the lambda function.
            // Here we are making a post request with the data entered by the user.
            // The API Gateway will validate this request and then it will trigger the lambda function.
            // The lambda function will extract the data from the event body and send a request to the SES.
            // When the SES gets the sendEmail request, it will send the response to the company's email.
        let res = await fetch("https://t4p4fob25e.execute-api.us-east-1.amazonaws.com/default/sendContactEmail", {
            method: "POST",
            body: JSON.stringify({
            senderName: name,
            senderEmail: email,
            mobileNumber: mobileNumber,
            description: description,
            }),
        });
        let resJson = await res.json();

        // When the response status is successful we are setting out all the state variables back to null, except the message one.
        if (res.status === 200) {
            setName("");
            setEmail("");
            setMobileNumber("");
            setDescription("");
            setMessage("Response submitted successfully");
        } else {
            setMessage("Some error occured");
        }
        } catch (err) {
        console.log(err);
        }
    };

    return (
        <div>
            <Navbar/>
        <div className="container6">
            <img id="abcd" src={bgi} alt="image" height={200} width="900"/>    
        </div>
        
        <div id="k4r" className="col-4">
        <h3 id='cus'>Contact Us</h3>
        <p id='cxt'>Let's get this conversation started. Tell us
            a bit about yourself, and we'll get in touch
            as soon as we can.
        </p>
        <form onSubmit={handleSubmit}>
            {/* In the input field whenever there is a change in the value we are setting up it's state to the new value. */}
            <input id="ipb1" type="text" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)}/><br/>
            <input id="ipb1" type="email" value={email} placeholder="Your Email Id" onChange={(e) => setEmail(e.target.value)}/><br/>
            <input id="ipb1"  value={mobileNumber} placeholder="Your Mobile Number" onChange={(e) => setMobileNumber(e.target.value)}/><br/>
            <textarea id="desc" value={description} name="subject" placeholder="Additional Info . . . ." onChange={(e) => setDescription(e.target.value)}></textarea>
    
            <button id="bt6" type="submit">SUBMIT</button>
            {/* Here we are calling out the message object and displaying the message. */}
            <h3 id='msg' className="message">{message ? <p>{message}</p> : null}</h3>
        </form>
        </div>
        <Contact/>
        </div>
    );
    }


export default ConSales;