import React from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', `${process.env.REACT_APP_OUR_TEMPLATE_ID}` , e.target, `${process.env.REACT_APP_YOUR_USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" className="form-control" name="firstName" />
      <label>Last Name </label>
      <input type="text" className="form-control" name="lastName" />
      <label>Company</label>
      <input type="text" className="form-control" name="company" />
      <label>Position</label>
      <input type="text" className="form-control" name="position" />
      <label>Email</label>
      <input type="text" className="form-control" name="email" />
      <label>Phone Number</label>
      <input type="text" className="form-control" name="phone" />
      <label>Subject</label>
      <input type="text" className="form-control" name="subject" />
      <label>Message</label>
      <textarea className="form-control" name="subject"></textarea>

      <input type="submit" value="Send" />
    </form>
  );
}
