/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LoginService } from "../../../services/LoginService";
export default function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setshowRegister] = useState(false);
  const [showRessetpass, setshowresetPass] = useState(false);
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    const dataLogin = {
      email: data.login.email,
      password: data.login.password,
    };
    console.log(dataLogin);
    LoginService.login(dataLogin).then((res) => {
      console.log("res.data");
      localStorage.setItem("client_token", JSON.stringify(res.data));
    });
  }
  function goResetPass() {
    setShowLogin(false);
    setshowresetPass(true);
  }
  function goRegister() {
    setShowLogin(false);
    setshowRegister(true);
  }
  function goLogin() {
    setShowLogin(true);
    setshowRegister(false);
    setshowresetPass(false);
  }
  return (
    <>
      {showLogin && (
        <>
          <div className="main-login">
            <div class="purple-square-container">
              <div class="purple-square">
                <div className="container login-content">
                  <h5 className="font-24 font-normal text-center">Đăng nhập</h5>
                  <div className="box-w580">
                    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Địa chỉ email Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Mời nhập email"
                          {...register("login.email", {
                            required: true,
                          })}
                        />
                        <Form.Text className="text-muted">
                          Chúng tôi sẽ không bao giờ chia sẻ email của bạn với
                          bất kỳ ai khác.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Mật khẩu"
                          {...register("login.password", {
                            required: true,
                          })}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-square btw-130"
                        // onClick={}
                      >
                        Đăng nhập
                      </Button>
                      <div className="row">
                        <div className="col-6">
                          <div className="mt-3" onClick={goResetPass}>
                            <u> Quên mật khẩu ?</u>
                          </div>
                        </div>
                        <div className="col-6 mt-3" onClick={goRegister}>
                          {" "}
                          <u>Tạo tài khoản mới</u>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {showRegister && <Registration login={goLogin} />}
      {showRessetpass && <RePassword login={goLogin} />} */}
    </>
  );
}

function Registration(props) {
  const { login } = props;
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
          <Breadcrumb.Item onClick={login}>
            Trờ lại trang đăng nhập
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Tạo tài khoản</Breadcrumb.Item>
        </Breadcrumb>
        <h5 className="font-24 font-normal text-center">Tạo tài khoản</h5>
        <div className="box-w580">
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Tên</Form.Label>
              <Form.Control required type="text" placeholder="Mời nhập tên" />
              <Form.Control.Feedback type="invalid">
                Hãy nhập tên
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mời nhập số điện thoại"
              />
              <Form.Control.Feedback type="invalid">
                Hãy nhập số điện thoại
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom00">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="text" placeholder="Mời nhập email" />
              <Form.Control.Feedback type="invalid">
                Hãy nhập email
              </Form.Control.Feedback>

              {/* <Form.Control className="w-50 mt-3"
                required
                type="text"
                placeholder="Mời nhập code"
              /> */}
              <Button
                variant="danger"
                type="submit"
                className="btn-square mt-3 font-15 px-2"
              >
                Xác nhận
              </Button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Mời nhập khẩu"
              />
              <Form.Control.Feedback type="invalid">
                Hãy nhập mật khẩu
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Xác nhận mật khẩu</Form.Label>
              <Form.Control
                required
                type="confirmpassword"
                placeholder="Xác nhận mật khẩu"
              />
              <Form.Control.Feedback type="invalid">
                Hãy nhập xác nhận mật khẩu
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" className="btn-square btw-130">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function RePassword(props) {
  const { login } = props;
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
          <Breadcrumb.Item onClick={login}>
            Trờ lại trang đăng nhập
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Quên mật khẩu</Breadcrumb.Item>
        </Breadcrumb>
        <h5 className="font-24 font-normal text-center">Quên mật khẩu</h5>
        <div className="box-w580">
          <p>
            {" "}
            Chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn{" "}
          </p>
          {/* <div className="reset-fail mb-3">
            No account found with that email.
          </div>
          <div className="reset-success mb-3">
            Password has been sent to your email
          </div> */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Địa chỉ email </Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                Hãy nhập mật email
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btn-square btw-130"
            >
              Xác nhận
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
