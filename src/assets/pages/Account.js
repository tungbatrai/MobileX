import React from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Account() {
  const history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  function Registration() {
    history.push("/registration");
  }
  function RePassword() {
    history.push("/Re-password");
  }
  return (
    <div className="account-page mb-5">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Account</Breadcrumb.Item>
        </Breadcrumb>

        {/* khi chưa đăng nhập     */}
        <div className="text-center">
          <h5 className="font-24 font-normal text-center">Account</h5>
          <div className="d-flex  justify-center">
            <Button
              variant="outline-dark"
              className="btn-account"
              onClick={goLogin}
            >
              <i className="fa fa-user-o fa-3x" aria-hidden="true"></i>
              Login
            </Button>
            <Button
              variant="outline-dark"
              className="btn-account"
              onClick={Registration}
            >
              <i className="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
              Registration
            </Button>
          </div>
          <div className="d-flex justify-center">
            <Button
              variant="outline-dark"
              className="btn-account"
              onClick={RePassword}
            >
              <i className="fa fa-address-card-o fa-3x" aria-hidden="true"></i>
              Restore Password
            </Button>
          </div>
        </div>
        {/* kết thúc khi chưa đăng nhập */}

        {/* khi đăng nhập */}
        <div className="box-w580">
          <h5 className="font-24 font-normal text-center">
            Welcome, Tungsuoihai
          </h5>
          <p>
            From your "My Account" page you have the ability to view your recent
            account activity and update your account information. Just select a
            link below.
          </p>
          <Form>
            <h5 className="font-24 font-normal text-center">
              Account information
            </h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <div className="d-flex justify-between">
              <Button
                variant="danger"
                type="submit"
                className="btn-square btw-130"
              >
                Edit
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="btn-square btw-130"
              >
                Logout
              </Button>
            </div>
          </Form>
        </div>
        {/* kết thúc khi đăng nhập */}
      </div>
    </div>
  );
}
