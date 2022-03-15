import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Navbar";
import "../Aboutus/Aboutus.css";
import Logo from "../../images/Logo (1) 2.svg";
import Founder from "../../images/IMG_6045 1.png";
import Creativedirector from "../../images/IMG_5936 1.png"; 
import President from "../../images/_DSC0341 1.png";
import Managingdirector from "../../images/jacob1.jpg";
import cofounder from "../../images/cofounder1.png";
// import Line from "../../images/Vector 25.png";
// import Lines from "../../images/Group 71.svg";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import { Link } from "react-router-dom";
import instagram from "../../images/insta-icon-1.png";
import linkedin from "../../images/linkdin-icon-1.png";
import mail from "../../images/mail1.png";
import longarrow from "../../images/longarrow.png";
import mailIcon from "../../images/mail.png";
function Aboutusbody(){
    return (
        <div>
            <div class="body-1">
                <div className="social">
                    <img className="longarrow" src={longarrow}   alt="" />
                    <img className="linked-in" src={linkedin}   alt="" />
                    <img className="instagram" src={instagram}  alt="" />
                    <img className="mail" src={mail}  alt="" />
                </div>
                <h1 class="about">About</h1>
                <img class="logo" src={Logo} alt="" />
                <p className="about-text1">The Compendium (TC) is the News and Publication Society (NPS) of the Institute of Aeronautical Engineering. The Compendium was started in 2019, making it one of the earliest student clubs on campus. </p>
                <p className="about-text2">Awareness is all about restoring your freedom to choose what you want instead of what your past imposes on you. The Compendium provides an overall review and makes sure that everyone is informed about all that happens at IARE. From achievements of students and faculty, to events, workshops, and fests conducted; Departmental activities to providing a platform for exposure of talent for students; everything that happens in IARE, The Compendium covers it all for you. </p>
            </div>

            <div className="body-2">
                <p className="team">The Team</p>
                <hr  class="hr2"/>
                {/* <img className="lines" src={Lines} alt="" /> */}
                <Link to="/founder"><img className="Founder" src={Founder} alt="" /></Link>
                <div className="foundertextarea">
                    <p className="Foundertext">Founder</p>
                    <p className="name">Anusha Vajha</p>
                </div>
                <Link to="/cofounder"><img className="Cofounder" src={cofounder} alt="" /></Link>
                <div className="cofoundertextarea">
                    <p className="cofoundertext">Co-founder</p>
                    <p className="name">Anusha Vajha</p>
                </div>
            </div>

            <div className="body-3">
                <Link to="/creativedirector"><img class="Creativedirector" src={Creativedirector} alt="" /></Link>
                <div className="creativedirectortextarea">
                    <p className="CreativeDirectortext">Creative Director</p>
                    <p className="name">Sharwann Solanki</p>
                </div>
                <Link to="/president"><img className="president" src={President} alt="" /></Link>
                <div className="presidenttextarea">
                    <p className="Presidenttext">President</p>
                    <p className="name">Sachin Pisipati</p>
                </div>
                <Link to="/managingdirector"><img className="Managingdirector" src={Managingdirector} alt="" /></Link>
                <div className="managingdirectortextarea">
                    <p className="ManagingDirectortext">Managing Director</p>
                    <p className="name">Jacob Alex</p>
                </div>
            </div>

            <div className="footer-2">

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
function Aboutus(){
    return(
        <div>
            <Header />
            <Aboutusbody />
        </div>
    );
}
export default Aboutus;