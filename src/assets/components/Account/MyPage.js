import React from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function MyPage() {
  // const history = useHistory();
  // function goHome() {
  //   history.push("/");
  //}
  return (
    <div className="mb-5">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/account">Account</Breadcrumb.Item>
          <Breadcrumb.Item active>Login</Breadcrumb.Item>
        </Breadcrumb>
        <h5 className="font-24 font-normal text-center">Login</h5>
        <div className="box-w580">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn-square btw-130"
              // onClick={goHome}
            >
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
