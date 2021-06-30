import React from 'react';
import {
    Container, 
    FormWrap,
    FormH1,
    FormContent,
    Form,
    FormLabel,
    FormInput,
    FormText,
    FormButton
} from './ContactElements'
import emailjs from 'emailjs-com';
// import Navbar from '../components/Navbar'
require('dotenv').config();

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', `${process.env.REACT_APP_OUR_TEMPLATE_ID}` , e.target, `${process.env.REACT_APP_YOUR_USER_ID}`)
      .then((result) => {
        alert("Thank you for your message. I will get back to you shortly!", result.text)
    }, (error) => {
          console.log("An error occurred, Please try again", error.text);
      });
      e.target.reset();
  }

  return (
        <Container id="contact">
            <FormWrap>
                <FormContent>
                    <Form action="#" className="contact-form" onSubmit={sendEmail}>
                        <FormH1>Send me a line if you want to have a chat about your upcoming project - I will come back to you as soon as I can!</FormH1>
                        <FormLabel>Name</FormLabel>
                        <FormInput type="text" className="form-control" name="firstName" required />
                        {/* <FormLabel>Last Name </FormLabel>
                        <FormInput type="text" className="form-control" name="lastName" required /> */}
                        {/* <FormLabel>Company</FormLabel>
                        <FormInput type="text" className="form-control" name="company" /> */}
                        {/* <FormLabel>Position</FormLabel>
                        <FormInput type="text" className="form-control" name="position" /> */}
                        <FormLabel>Email</FormLabel>
                        <FormInput type="text" className="form-control" name="email" required />
                        <FormLabel>Phone Number</FormLabel>
                        <FormInput type="text" className="form-control" name="phone" required />
                        <FormLabel>Subject</FormLabel>
                        <FormInput type="text" className="form-control" name="subject" required/>
                        <FormLabel>Message</FormLabel>
                        <FormText className="form-control" name="message" required />
                        <FormButton type="submit" value="Send">Send</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

