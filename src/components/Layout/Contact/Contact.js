import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const LINKEDIN_LOGO = "https://www.pngmart.com/files/21/Linkedin-In-Logo-PNG-HD.png";
  const GITHUB_LOGO = "https://pngimg.com/uploads/github/github_PNG80.png";
  const MEDIUM_LOGO = "https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png";

  const LINKEDIN_URL = "https://www.linkedin.com/in/sofia-katzman/";
  const GITHUB_LINK = "https://github.com/sofiakatzman";
  const MEDIUM_LINK = "https://medium.com/@katzmansof";

  const contactLinks = {
    linkedin: {
      logo: LINKEDIN_LOGO,
      url: LINKEDIN_URL,
    },
    github: {
      logo: GITHUB_LOGO,
      url: GITHUB_LINK,
    },
    medium: {
      logo: MEDIUM_LOGO,
      url: MEDIUM_LINK,
    },
  };

  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSent = () => {
    // You can add your email sending logic here, for example, using fetch or Axios.
    // Once the email is sent, set emailSent to true to update the content.
    setEmailSent(true);
  };

  return (
    <>
      {Object.keys(contactLinks).map((key) => (
        <div key={key} className="contact">
          <a href={contactLinks[key].url}>
            <img src={contactLinks[key].logo} alt={key} />
          </a>
        </div>
      ))}

      {emailSent ? (
        <div className="contact">
          <p>Thank you for reaching out! I will get back to you soon!</p>
        </div>
      ) : (
        <div className="contact">
          {/* Add your email form here */}
          {/* Example: */}
          <button onClick={handleEmailSent}>Send Email</button>
        </div>
      )}
    </>
  );
}

export default Contact;