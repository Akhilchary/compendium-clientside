import React from "react";
//import { Link } from 'react-router-dom';
import "./Footer.css";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import mailIcon from "../../images/mail.png";

function Footer(){

    return(
        <>
        <div className="footer">

            <p className="soc-p-art">Social.</p>
            <img className="linkdin-ic" src={linkedIcon} alt="" />
            <img className="insta-ic" src={instaIcon} alt=""  />
            <img className="insta-ic" src={mailIcon} alt=""  />

            <div className="footer-nav">
                <h3>Navigate</h3>
                <div className="footNav-content">
                    <p>About us</p>
                    <p>Articles</p>
                    <p>Gallery</p>
                    <p>Spotlight</p>
                    <p>Placements</p>
                </div>
            </div>

            <p className="copyright">&copy;2021 TheCompendium  </p>
            
        </div> 
        </>
    );
}

export default Footer;