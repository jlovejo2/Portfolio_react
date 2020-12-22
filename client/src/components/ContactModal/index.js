import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/api";
import "./style.css";

function ContactModal(props) {
  const [contactForm, setContactForm] = useState([]);
  const [contactError, setContactError] = useState({fullname: '', email: '', subject: ''})
  const [show, setShow] = useState(false);

  function handleClose(event) {
    setShow(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    let message = '';
    console.log('name value', name, value)
    
    if ( value.length <= 0 ) {
      switch (name) {
        case 'fullname':
          message = 'Full name is required'
          break;
        
        case 'email':
          message = 'Email is required'
          break;

        case 'subject':
          message = 'Subject is required'
          break;

        default:
          message = ''
          break;
      }
      console.log('name: ', name)
      setContactError({...contactError, [name]: message})
    } else {
      setContactError({...contactError, [name]: ''})
    }

    setContactForm({ ...contactForm, [name]: value });
    console.log(contactError)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (contactForm.email && contactForm.fullname && contactForm.subject) {
      console.log("contains email, name, and subject");
      API.nodeMailerSendInfo({
        email: contactForm.email,
        name: contactForm.fullname,
        subject: contactForm.subject,
        body: contactForm.body,
      })
        .then((res) => {
          if (res.data) setShow(true);
        })
        .catch((err) => console.log(err));
    } else {
      const errorObj = {
        fullName: 'Name is required',
        email: 'Email is required',
        subject: 'Subject is required'
      }
      setContactError({...contactError, errorObj})
    }
  }

  return (
    <Container fluid={true}>
      <Row center={true}>
        <Modal
          animation={true}
          size={"xl"}
          onHide={props.closeContact}
          show={props.showContact}
        >
          <Modal.Header className="contactContainer" closeButton>
            <Modal.Title>Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body className="contactContainer">
            {/* <div className="row justify-content-center p-2"> */}
            <div className="card border-secondary">
              <div className="card-body shadow">
                <form>
                  <Input
                    label="Enter Full Name"
                    name="fullname"
                    placeholder="First and last name"
                    onChange={handleInputChange}
                  />
                  <p className='errorMessage'>{contactError['fullname']}</p>
                  <Input
                    label="Email address"
                    name="email"
                    placeholder="name@example.com"
                    onChange={handleInputChange}
                  />
                  <p className='errorMessage'>{contactError['email']}</p>
                  <Input
                    label="Subject"
                    name="subject"
                    placeholder="A brief description of why you are contacting me"
                    onChange={handleInputChange}
                  />
                  <p className='errorMessage'>{contactError['subject']}</p>
                  <TextArea
                    label="Feel free to elaborate if subject was not enough room"
                    name="body"
                    rows="4"
                    placeholder="Write your message here."
                    onChange={handleInputChange}
                  />
                  <FormBtn
                    name="button"
                    disabled={
                      !(
                        contactForm.email &&
                        contactForm.fullname &&
                        contactForm.subject
                      )
                    }
                    onClick={handleSubmit}
                  >
                    Click to Submit
                  </FormBtn>
                  {/* <button type="button" class="btn btn-secondary btn-md ml-4 mt-2">Click this button to submit if you'd take
                  the red pill</button> */}
                </form>
              </div>
            </div>
            {/* </div> */}
            <Modal show={show} onClick={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Your email has been sent!</Modal.Title>
              </Modal.Header>
            </Modal>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}

export default ContactModal;
