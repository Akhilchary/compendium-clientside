import React from "react";
import Topbar from "../../components/Navbar/Navbar";
import Cofounderpic from "../../images/IMG_6045 1.png";
import "./Aboutus-individual.css";
import Cross from "../../images/Vector 35.png";
import { Link } from "react-router-dom";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import mailIcon from "../../images/mail.png";
function Cofounderbody(){
    return(
        <div>
            <div class="Cofounderbody">
                <Link to="/aboutus"><img class="Cross" src={Cross} alt="" /></Link>
                <img class="Cofounderpic" src={Cofounderpic} alt="" />
                <p class="teammembersname">Vennela Manmohan</p>
                <p class="foundername">Co founder</p>
                <p className="founderdescription">An achiever, dreamer and fine leader. Introducing to you the new President of The Compendium, Rahul (Sattarapu Rahul). He aims for perfection in all his ventures. An ordinary person with a skill to practise perfection is what he is. Previously, he had served tirelessly as the Vice President of the club. He is one with high spirits and never lets a teammate down. Always a sight for calm and composure, he leads the team with all his heart. He has proved multiple times that nothing is bigger than The Compendium to him. Otherwise, he is just an ordinary student with a weird combination of maturity and kiddish mentality which changes dynamically. He’s a person who knows exactly what he wants and almost always successfully can convey it to the team and get it done. </p>
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
function Cofounder(){
    return(
        <div>
            <Topbar />
            <Cofounderbody />
        </div>
    );
}
export default Cofounder;