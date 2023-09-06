import React from "react"
import EmailForm from "./EmailForm/EmailForm"
import "./ContactMe.css"

function ContactMe(){
    return(
        <div className="contact">
        <h2 className="title">CONTACT ME</h2>
        <EmailForm />
        </div>
    )
}

export default ContactMe