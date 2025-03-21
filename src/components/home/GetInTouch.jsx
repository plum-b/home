import React, { useState, useRef } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Jumbotron } from "./migration";
import emailjs from '@emailjs/browser';
import "./GetInTouch.css";

const GetInTouch = ({ heading }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // You'll need to replace this
      'YOUR_TEMPLATE_ID', // You'll need to replace this
      form.current,
      'YOUR_PUBLIC_KEY' // You'll need to replace this
    )
    .then((result) => {
      setAlertVariant('success');
      setAlertMessage('Thank you for your message! I\'ll get back to you soon.');
      setShowAlert(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setShowAlert(false), 3000);
    }, (error) => {
      setAlertVariant('danger');
      setAlertMessage('Sorry, there was an error sending your message. Please try again.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Jumbotron fluid id="contact" className="bg-light">
      <Container>
        <h2 className="display-4 pb-3 text-center">{heading}</h2>
        <p className="lead text-center mb-4">
          If you have any questions, or if you just want to say hi, please feel free to email me
        </p>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-form-wrapper">
              {showAlert && (
                <Alert variant={alertVariant} className="mb-4">
                  {alertMessage}
                </Alert>
              )}
              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                {/* Hidden field for recipient email */}
                <input 
                  type="hidden" 
                  name="recipient_email" 
                  value="afifnahas1998@gmail.com"
                />

                <div className="text-center">
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="contact-submit-btn"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default GetInTouch;
