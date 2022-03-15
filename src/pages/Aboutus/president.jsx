import React from "react";
import Topbar from "../../components/Navbar/Navbar";
import Managingdirectorpic from "../../images/_DSC0341 1.png";
import "./Aboutus-individual.css";
import Cross from "../../images/Vector 35.png";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import { Link } from "react-router-dom";
import mailIcon from "../../images/mail.png";
function Managingdirectorbody(){
    return(
        <div>
        <div class="Managingdirectorbody">
            <Link to="/aboutus"><img class="Cross" src={Cross} alt="" /></Link>
            <img class="managingdirectorpic" src={Managingdirectorpic} alt="" />
            <p class="teammembersname">Sachin Pisipati</p>
            <p class="managingdirectorname">President</p>
            <p className="managingdirectordescription">Introducing to you the Managing Director of The Compendium, Sachin Pisipati. He is a strong believer in working hard, no matter what. He is someone who believes in learning even from losses. He never lets anyone down and carries us all as one big family. He makes his mark not by words, but by his actions. His hard work speaks volumes for himself. Majoring in Mechanical Engineering, he is exploring his interests in the field but his true passion lies in acting. He is a cinephile with numerous short films already released and a few in the making. He is also an active member in Eco Crew and NSS IARE, and SAE India and is currently competing, with his team, in AEROTHON ‘21.</p>
        </div>
        <div className="footer-3">

            <p className="soc-p1">Social.</p>
            <img className="linkdin-ic1" src={linkedIcon} alt="" />
            <img className="insta-ic1" src={instaIcon} alt="" />
            <img className="mail-ic1" src={mailIcon} alt="" />
            
            <div className="footer-nav1">
                <h3>Navigate</h3>
                <div className="footNav-content1">
                    <p>About us</p>
                    <p>Articles</p>
                    <p>Gallery</p>
                    <p>Spotlight</p>
                    <p>Placements</p>
                </div>
            </div>

            <p className="copyright">&copy;2021 TheCompendium  </p>
            
        </div> 
        </div>
    );
}
function Managingdirector(){
    return(
        <div>
            <Topbar />
            <Managingdirectorbody />
        </div>
    );
}
export default Managingdirector;