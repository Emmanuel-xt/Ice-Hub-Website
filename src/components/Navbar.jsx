import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import * as Icon from "react-bootstrap-icons";
import {FaBars, FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare} from "react-icons/fa";
import {ImCross} from "react-icons/im";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const toggleDrop = () => {
    setDrop(!drop);
  };

  const [display , setDisplay] = useState(false)

  const [Scrolled , setScroll] = useState(false)

  const toggledisplay = () => {
    setDisplay(!display)
  }
  useEffect(() => {
    // Update display based on screen width
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on initial load
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrolled = () => {
    setScroll(true)
    console.log(window.scrollY)
  }
  window.addEventListener("scroll" ,  () => {
    if(window.scrollY >= 48){
      console.log("yes")
      setScroll(true)
    }else{
      console.log("no")
      setScroll(false)
    }
    });
  return (
    <>
      <div className="navbg">
        <div className="navbar-con">
          <div className="loc-con">
            <div className="nav-location">
              <FontAwesomeIcon icon={faLocationDot} />
              No 270 Old Onitsha Road, bethel building Opp. Anglican Girls Sec.
              School junction Nnewi
            </div>

            <div className="nav-contact">
              <div className="phone">
                <FontAwesomeIcon icon={faPhone} />
                +2347045375814
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                Contacticehub@gmail.com
              </div>
            </div>
          </div>
          <div className="nav-social">
            <FaFacebookF  className="facebook"/>
            <Icon.Twitter className="facebook"/>
            <FaInstagram className="facebook"/>
          </div>
        </div>
      </div>

      <div className={`nav ${Scrolled? "scrolling" : ""}`}>
        <h1 className="brand">ICE HUB</h1>
              <span className="navbar-icon" onClick={toggledisplay}>
                {
                  display ? <ImCross /> :<FaBars/>
                }
                </span>

       
        <div className={`routes  ${!display ? "none" : ""}  `}>

          <Link to="/" className="Link">
            <span className={`route ${Scrolled? "scrollinglink" : ""}`}>Home</span>
          </Link>
          <Link to="/about" className="Link">
            <span className={`route ${Scrolled? "scrollinglink" : ""}`}>About</span>
          </Link>

          <div
            className="route"
            onMouseEnter={toggleDrop}
            onMouseLeave={toggleDrop}
          >
            <span className={`route ${Scrolled? "scrollinglink" : ""}`}>Learnings</span>
            {drop ? (
              <div className="lesson-types-con">
                <Link to="/essentialclass" className="Link">
                  <span className={` lesson-types scrollinglink ${Scrolled ? "scrollinglink" : ""}`}>Essential CLass</span>
                </Link>
                <Link to="/advancedclass" className="Link">
                  <span className={` lesson-types scrollinglink ${Scrolled ? "scrollinglink" : ""}`}>Advanced CLass</span>
                </Link>
                <Link to="/skit" className="Link">
                  <span className={` lesson-types scrollinglink ${Scrolled ? "scrollinglink" : ""}`}>Skit </span>
                </Link>
                <Link to="/exhibition" className="Link">
                  <span className={` lesson-types scrollinglink ${Scrolled ? "scrollinglink" : ""}`}>Exibition Class</span>
                </Link>
              </div>
            ) : (
              ""
              )}
          </div>

          <Link to="/Contact" className="Link">
            <span className={`route ${Scrolled? "scrollinglink" : ""}`}>Contact</span>
          </Link>
        </div>
      </div>
      {/* <hr style={{position:"absolute" , top:"-100px"}}/> */}
    </>
  );
};
export default Navbar;
