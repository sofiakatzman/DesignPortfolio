import React from "react"
import "./Contact.css"

function Contact(){

    const LINKEDIN_LOGO = "https://www.pngmart.com/files/21/Linkedin-In-Logo-PNG-HD.png"
    const GITHUB_LOGO = "https://pngimg.com/uploads/github/github_PNG80.png"
    const MEDIUM_LOGO = "https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"

    const LINKEDIN_URL = "https://www.linkedin.com/in/sofia-katzman/"
    const GITHUB_LINK = "https://github.com/sofiakatzman"
    const MEDIUM_LINK = "https://medium.com/@katzmansof"

    const contactLinks = { 
        linkedin : {
            logo : LINKEDIN_LOGO, 
            url : LINKEDIN_URL
        },
        github : {
            logo: GITHUB_LOGO,
            url: GITHUB_LINK
        },
        medium : {
            logo: MEDIUM_LOGO,
            url: MEDIUM_LINK
        }
    }

    return(
        <>
        {Object.keys(contactLinks).map(key => (
            <div key={key} className="contact">
                
                <a href={contactLinks[key].url}><img src={contactLinks[key].logo} alt={key} /></a>
            </div>
        ))}
        </>
    )
}

export default Contact