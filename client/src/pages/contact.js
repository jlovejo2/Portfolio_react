import React, { useState } from 'react';
import { Container, Row } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import API from '../utils/api';


function Contact() {

  const [contactForm, setContactForm] = useState([])

  function handleInputChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target
    setContactForm({ ...contactForm, [name]: value })
    console.log(contactForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (contactForm.email && contactForm.fullname && contactForm.subject) {
      console.log('contains email, name, and subject')
      API.nodeMailerSendInfo({
        email: contactForm.email,
        name: contactForm.fullname,
        subject: contactForm.subject,
        body: contactForm.body
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  return (
    <Container fluid={true}>
      <Row center={true}>
        <div className="content animated fadeInRight delay-1s col-sm-6">
          <div className="row justify-content-center font-weight-bold p-2">
            <h3>Contact</h3>
          </div>
          <div className="row justify-content-center p-2">
            <div className="card">
              <div className="card-body shadow">
                <form>
                  <Input
                    label='Enter Full Name'
                    name="fullname"
                    placeholder="First and last name"
                    onChange={handleInputChange}
                  />
                  <Input
                    label='Email address'
                    name="email"
                    placeholder="name@example.com"
                    onChange={handleInputChange}
                  />
                  <Input
                    name="subject"
                    placeholder="A brief description of why you are contacting me"
                    onChange={handleInputChange}
                  />
                  <TextArea
                    label='Feel free to elaborate if subject was not enough room'
                    name='body'
                    rows="4"
                    placeholder="Write your message here."
                    onChange={handleInputChange}
                  />
                  <FormBtn
                    name='button'
                    disabled={!(contactForm.email && contactForm.fullname && contactForm.subject)}
                    onClick={handleSubmit} >
                    Click to Submit
                    </FormBtn>
                  {/* <button type="button" class="btn btn-secondary btn-md ml-4 mt-2">Click this button to submit if you'd take
                  the red pill</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Contact;