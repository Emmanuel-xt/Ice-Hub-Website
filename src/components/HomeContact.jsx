import { faPhone, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const HomeContact = () => {
    return ( 
        <>
        <div className="home-contact">
            <div className="contact-texts wow zoomIn">
                <h1>Please Feel Free to Contact us</h1>
                <div className="tofro"></div>

                <div className="customer-service">
                    <div className="icon-text wow zoomIn">
                        <FontAwesomeIcon icon={faReply} className="call-service" />
                        <span>Reply within 24 hours</span>
                    </div>
                    <div className="icon-text wow zoomIn">
                        <FontAwesomeIcon icon={faPhone}  className="call-service"/>
                        <span>24 hrs telephone support</span>
                    </div>
                </div>

                <div className="call wow zoomIn">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="call-number">
                    <span>Call to ask any question</span>
                    <span className="number">(+234) 7015815801</span>
                </div>
                </div>
            </div>
            <form className="form wow zoomIn">
                <input type="text" name="" id="" placeholder="Your Name" />
                <input type="text" name="" id="" placeholder="Your Email" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
        </>
     );
}
 
export default HomeContact;