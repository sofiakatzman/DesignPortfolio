import React from "react"
import './About.css'
import headshot from '../../../assets/headshot.jpg'
import resume from '../../../assets/Sofia_Katzman_Resume.pdf'
import Contact from '../../Layout/Contact/Contact'

function About(){

    return(
        <div className="about">
            <div className="about-container">
                {/* <div className="about-headshot">
                    <img src={headshot} alt="Headshot" className="circle-image" />
                </div> */}
                <div className="about-blurb">
                    <h2>Designer and Creator</h2>
                    <h3>New York, NY </h3>
                    <p>Hello! I'm Sofia - I design and build things.</p>
                    <p>From crafting eye-catching design portfolios to bringing creative concepts to life, I thrive in the realm of visual storytelling and artistic innovation. With a diverse background encompassing design, project management, and creative production, I'm passionate about transforming ideas into tangible works of art.</p>  
                    <br/><br/><br/>
                    <a href={resume} download className="resume">Download My Resume</a>
                </div>
            </div>
        </div>

  
    )
}

export default About