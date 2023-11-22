// import React from 'react'
// import "./Contact.css"

// const Contact = () => {
//   return (

//     <div className="contact-section">
//  <div className='contact' >
//        <div className="teamHeading"><h1>Contact Us</h1></div>
//        <div className="contact_content">
//           <div className="contact_content_texts">
//               <h2 className='contact_content_texts_heading'>Get In Touch</h2>
//               <p>Feel free to reach out to us with any questions, suggestions, or collaboration opportunities. We're here to listen and engage with you. Your feedback is valuable, and we look forward to connecting!</p>
//           </div>
//           <div className="contact_content_forms">
//               <form action="" method='POST' className='input-icons'>
//                   <div className='input_element'>
//                       <i className="fa fa-user icon"></i>
//                       <input type="text" name='name' id='name' placeholder='Your name'/>
//                   </div>
//                   <div className='input_element'>
//                       <i className="fa fa-envelope icon"></i>
//                       <input type="email" name='email' id='email' placeholder='Email'/>
//                   </div>
//                   <div className='input_element'>
//                       <i className="fa fa-comment" aria-hidden="true"></i>
//                       <input type="text" name='subject' id='subject' placeholder='Subject'/>
//                   </div>
//                   <div className='input_element'>
//                     <textarea name="message" id="message" cols="30" rows="10" placeholder='message'></textarea>
//                   </div>
//                   <button type='submit' className='contact_btn input_element'>Hit us up!!</button>
//               </form>
//           </div>
//        </div>
//     </div>
//     </div>

//   )
// }

// export default Contact

import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

emailjs.init("nqcmzWT3nhxf6gZEw");
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const message = `Name: ${e.target.name.value}\nEmail: ${e.target.email.value}\nSubject: ${e.target.subject.value}\nMessage: ${e.target.message.value}`;

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual service and template IDs.
    emailjs
      .send("service_9eehda8", "template_bhc77nt", {
        message: message,
      })
      .then((response) => {
        console.log("Email sent:", response);
        // Clear the form fields
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="contact-section">
      <div className="contact">
        <div className="teamHeading contactUs-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_content">
          <div className="contact_content_texts">
            <h2 className="contact_content_texts_heading">Get In Touch</h2>
            <p>
              Feel free to reach out to us with any questions, suggestions, or
              collaboration opportunities. We're here to listen and engage with
              you. Your feedback is valuable, and we look forward to connecting!
            </p>
          </div>
          <div className="contact_content_forms">
            <form onSubmit={sendEmail} className="input-icons">
              <div className="input_element">
                <i className="fa fa-user icon"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div className="input_element">
                <i className="fa fa-envelope icon"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="input_element">
                <i className="fa fa-comment" aria-hidden="true"></i>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="input_element">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="message"
                ></textarea>
              </div>
              <button type="submit" className="contact_btn input_element">
                Hit us up!!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
