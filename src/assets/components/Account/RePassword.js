import React, { useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";

export default function RePassword() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="mb-5">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/account">Account</Breadcrumb.Item>
          <Breadcrumb.Item active>Reset Password</Breadcrumb.Item>
        </Breadcrumb>
        <h5 className="font-24 font-normal text-center">Reset Password</h5>
        <div className="box-w580">
          <p>We will send you an email to reset your password</p>
          <div className="reset-fail mb-3">
            No account found with that email.
          </div>
          <div className="reset-success mb-3">
            Password has been sent to your email
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email Address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                Please enter password
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btn-square btw-130"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
