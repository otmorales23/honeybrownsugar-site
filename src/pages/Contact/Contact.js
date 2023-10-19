import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-info">
      <h1>Contact Me</h1>
      <div className="dev-contact">
        <h2>If you want to get in touch with me about gaming or streaming things please reach me at the following:</h2>
        <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
        <p>Social Media:</p>
        <ul className="social-media-links">
          <li>
            <a href="https://www.instagram.com/yourprofile">
              <i className="fab fa-facebook"></i> {/* FontAwesome Facebook icon */}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourhandle">
              <i className="fab fa-twitter"></i> {/* FontAwesome Twitter icon */}
            </a>
          </li>
        </ul>
      </div>
      
      <div className="stream-contact">
        <h2>If you want to get in touch with me related to Software Developement please reach me at the following:</h2>  
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/yourprofile">
              <i className="fab fa-linkedin"></i> {/* FontAwesome LinkedIn icon */}
            </a>
          </li>
          {/* Add more social media icons as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
