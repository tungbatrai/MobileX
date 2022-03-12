/** @format */

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LoginService } from "../../../services/LoginService";
export default function Login() {
  // const history = useHistory();
  // function goHome() {
  //   history.push("/");
  //}
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
  } = useForm();
  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("client_token"));
  //   if(token) {
  //     if(token.status == 200) {
  //       console.log(" login completed");
  //     }
  //   }
  //   console.log(token);
  // }, []);
  function onSubmit(data) {
    console.log(data);
    const dataLogin = {
      email: data.login.email,
      password: data.login.password,
    };
    // console.log(dataLogin);
    LoginService.login(dataLogin).then((res) => {
      // console.log(res.data);
      localStorage.setItem("client_token", JSON.stringify(res.data));
    });
  }
  return (
    <div className="main-login">
      <div class="purple-square-container">
        <div class="purple-square">
          <div className="container login-content">
            <h5 className="font-24 font-normal text-center">Login</h5>
            <div className="box-w580">
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("login.email", {
                      required: true,
                    })}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("login.password", {
                      required: true,
                    })}
                  />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
