import React from 'react';
import { Container, Row } from '../components/Grid';


function Contact() {


  return (
    <Container>
      <Row>
        <div className="col-lg-4 col-md-3 col-sm-2"></div>
        <div className="content col-lg-4 col-md-6 col-sm-8">
          <div className="row font-weight-bold p-2">
            <h3>Contact</h3>
          </div>
          <div className="row align-items-center p-2">
            <div className="card">
              <div className="card-body shadow">
                <form>
                  <div className="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="email" className="form-control" id="fullName" placeholder="First and last name" />
                  </div>
                  <div className="form-group">
                    <label for="sender">Email address</label>
                    <input type="email" className="form-control" id="sender" placeholder="name@example.com" />
                  </div>
                  <div className="form-group">
                    <label for='subject'>Subject</label>
                    <input type="email" className="form-control" id="subject"
                      placeholder="A brief description of why you are contacting me" />
                  </div>
                  <div className="form-group">
                    <label for="body">Feel free to elaborate if subject wasn't enough room</label>
                    <textarea className="form-control" id="body" rows="4" placeholder="Write your message here."></textarea>
                  </div>
                  <button type="button" className="btn btn-primary btn-md ml-4" id="emailSubmit1">Click this button to submit if
                  you'd take the
            blue pill</button>
                  {/* <button type="button" class="btn btn-secondary btn-md ml-4 mt-2">Click this button to submit if you'd take
                  the red pill</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-3 col-sm-2"></div>
      </Row>
    </Container>
  );
}

export default Contact;