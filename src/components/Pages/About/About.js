import React from "react"
import './About.css'
import headshot from '../../../assets/headshot.jpg'
import resume from '../../../assets/Sofia_Katzman_Resume.pdf'
import Contact from '../../Layout/Contact/Contact'

function About(){

    return(
        <div className="about">
            <div className="about-container">
                <div className="about-headshot">
                    <img src={headshot} alt="Headshot" className="circle-image" />
                </div>
                <div className="about-blurb">
                    <h2>Full Stack Web Developer</h2>
                    <h3>New York, NY </h3>
                    <p>Hello! I'm Sofia - I build things.</p>
                    <p>Whether it's full stack applications or diverse creative projects, my background in operations, logistics, and design enables me to craft well-rounded solutions that consider every aspect of the development process.</p>  
                    <br/><br/><br/>
                    <a href={resume} download className="resume">Download My Resume</a>
                </div>
            </div>
        </div>

  
    )
}

export default About