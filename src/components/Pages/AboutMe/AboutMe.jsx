import React from "react";
import './AboutMe.css';
import profileImage from '../../../assets/headshot.jpg'
import resume from '../../../assets/Sofia_Katzman_Design.pdf'
import CurrentActivities from "./CurrentActivities/CurrentActivities";

function AboutMe(){
    return(
        <div className="about-me-container">
        <div className="about-me-card">
        <div className="profile-image">
            <img src={profileImage} alt="Profile" />
         </div>
        <div className="about-me-content">
            <p>
                Uruguay born and New Jersey raised, my life has been a thrilling adventure from the start.
                I currently call Jersey City home; sharing it with my amazing husband, Harrison, and my charmingly mischievous pup, Fuzz. <br/><br/>

                My journey has been anything but conventional. With a background that spans operations, event planning, graphic design, and illustration, I've cultivated a unique blend of skills and experiences. I'm a firm believer in seizing every opportunity and leveraging my diverse skill set to the fullest. I thrive in dynamic, fast-paced environments, and I'm always eager to embrace new challenges.<br/><br/>

                One of my core values is building meaningful relationships—with clients, colleagues, and collaborators. I believe that strong connections are the foundation of successful ventures and personal growth.<br/><br/>

                When I'm not immersed in work or furthering my skills, you'll find me gliding through life on roller-skates, experimenting with new recipes, or immersing myself in the world of games. <br/><br/>

                If you're interested in connecting or exploring potential opportunities, please don't hesitate to reach out. Let's chat and create something extraordinary together!<br/><br/> </p>
                <a href={resume} download className="resume">Download My Resume</a><br/><br/><br/>
        </div>
        <CurrentActivities /> 
        </div>
        <br/>
        
       
      <br/><br/><br/><br/><br/><br/>
    </div>
    )
}

export default AboutMe