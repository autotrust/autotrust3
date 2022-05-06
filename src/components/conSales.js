import React, {useState} from 'react';
import Header from "../components/header";
import Contact from "../components/Navigation/Footer";
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
            <Header/>
        <div className="container6">
            <img id="abcd" src={bgi} alt="image" height={200} width="900"/>    
        </div>
        
        <div id="k4r" className="col-4">
        <h3>Contact Sales</h3>
        <form onSubmit={handleSubmit}>
            <input id="ipb" type="text" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)}/><br/>
            <input id="ipb" type="email" value={email} placeholder="Your Email Id" onChange={(e) => setEmail(e.target.value)}/><br/>
            <input id="ipb"  value={mobileNumber} placeholder="Your Mobile Number" onChange={(e) => setMobileNumber(e.target.value)}/><br/>
            {/* <input id="desc" type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/><br/> */}
            <textarea id="desc" value={description} name="subject" placeholder="Description.." onChange={(e) => setDescription(e.target.value)}></textarea>
    
            <button id="bt2" type="submit">SUBMIT</button>

            <h3 className="message">{message ? <p>{message}</p> : null}</h3>
        </form>
        </div>
        <Contact/>
        </div>
    );
    }


export default ConSales;