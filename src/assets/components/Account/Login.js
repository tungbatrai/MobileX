/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LoginService } from "../../../services/LoginService";
import { trackPromise } from "react-promise-tracker";
import swal from "sweetalert";
import Timer from "./Timer";

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
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("client_token"));
    if(token) {
      if (token.status == 200) {
        history.push("/");
      }
    }
    
  }, []);
  function onSubmit(data) {
    const dataLogin = {
      email: data.login.email,
      password: data.login.password,
    };

    LoginService.login(dataLogin).then((res) => {
      if (res.data.status == 200) {
        localStorage.setItem("client_token", JSON.stringify(res.data));
        swal("Đăng nhập thành công", "Trang bạn sẽ được chuyển đến trang home !", "success").then(
          (value) => {
            history.push("/");
          }
        ) 
      }  else {
        swal("Đăng nhập không công", "Vui lòng đăng nhập lại !", "error")
      }
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
                  <h5 className="font-24 font-normal text-center">
                    Đăng nhập <Timer />
                  </h5>
                  <div className="box-w580">
                    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Địa chỉ email Email</Form.Label>
                        <Form.Control
                          type="text"
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
      {showRegister && <Registration login={goLogin} />}
      {showRessetpass && <RePassword login={goLogin} />}
    </>
  );
}

function Registration(props) {
  const history = useHistory();
  const { login } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
  } = useForm();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [validated, setValidated] = useState(false);
  // const handleSubmit = (event) => {
  //   console.log(event);
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  function createUser() {
    let dataRegister = {
      name: getValues(`create.name`),
      phone: getValues(`create.phone`),
      email: getValues(`create.email`),
      role: "USER",
      password: getValues(`create.pass`),
    };
    if (
      getValues(`create.name`).length > 0 &&
      getValues(`create.phone`).length > 0 &&
      getValues(`create.email`).length > 0 &&
      getValues(`create.pass`).length > 0
    ) {
      if (getValues(`create.pass`) == getValues(`create.cfpass`)) {
        LoginService.createUser(dataRegister)
          .then((res) => {
            if (res.data.status == 200) {
              swal("Tạo tài khoản thành công ", "Vui lòng đăng nhập tài khoản mới !", "success").then(
                (value) => {
                  login();
                }
              );
            } else {
              swal("Đăng kí không thành công ", "Vui lòng thử lại", "error");
            }
          })
          .catch((err) => {
            swal("Lỗi ", "Vui lòng thử lại", "error");
          });
      } else {
        swal(
          "Mật khẩu không khớp",
          "Mật khẩu và xác nhận mật khẩu không khớp vui lòng kiểm tra...",
          "warning"
        );
      }
    } else {
      swal(
        "Không được để trống ",
        "Có vẻ như có trường bạn chưa nhập...",
        "warning"
      );
    }
  }
  return (
    <div className="mb-5">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item onClick={login}>
            Trờ lại trang đăng nhập
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Tạo tài khoản</Breadcrumb.Item>
        </Breadcrumb>
        <h5 className="font-24 font-normal text-center">Tạo tài khoản </h5>
        <div className="box-w580">
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Tên</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Mời nhập tên"
              onKeyUp={(e) => setValue(`create.name`, e.target.value)}
              {...register(`create.name`, {
                value: "",
              })}
            />
            {/* <Form.Control.Feedback type="invalid">
              Hãy nhập tên
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Mời nhập số điện thoại"
              onKeyUp={(e) => setValue(`create.phone`, e.target.value)}
              {...register(`create.phone`, {
                value: "",
              })}
            />
            {/* <Form.Control.Feedback type="invalid">
              Hãy nhập số điện thoại
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom00">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Mời nhập email"
              onKeyUp={(e) => setValue(`create.email`, e.target.value)}
              {...register(`create.email`, {
                value: "",
              })}
            />
            {/* <Form.Control.Feedback type="invalid">
              Hãy nhập email
            </Form.Control.Feedback> */}

            {/* <Form.Control className="w-50 mt-3"
                required
                type="text"
                placeholder="Mời nhập code"
              /> */}
            {/* <Button
                variant="danger"
                type="text"
                className="btn-square mt-3 font-15 px-2"
                
              >
                Xác nhận <Timer />
              </Button> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Mời nhập khẩu"
              onKeyUp={(e) => setValue(`create.pass`, e.target.value)}
              {...register(`create.pass`, {
                value: "",
              })}
            />
            {/* <Form.Control.Feedback type="invalid">
              Hãy nhập mật khẩu
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Xác nhận mật khẩu"
              onKeyUp={(e) => setValue(`create.cfpass`, e.target.value)}
              {...register(`create.cfpass`, {
                value: "",
              })}
            />
            {/* <Form.Control.Feedback type="invalid">
              Hãy nhập xác nhận mật khẩu
            </Form.Control.Feedback> */}
          </Form.Group>

          <Button
            variant="primary"
            className="btn-square btw-130"
            onClick={() => createUser()}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

function RePassword(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
  } = useForm();
  const { login } = props;

  function handleResetPass() {
    //console.log("resetPass", getValues(`resetPass`).length);
    let email = getValues(`resetPass`);
    if (getValues(`resetPass`) && getValues(`resetPass`).length != 0) {
      LoginService.resetPass(email)
        .then((res) => {
          // console.log(res);
          if (res.data.status === 200) {
            swal("Đổi mật khẩu thành công!", "Vui lòng kiểm tra mail", "success").then(
              (value) => {
                login();
              }
            );
          } else {
            swal(
              "Xác minh không thành công",
              "Gmail bạn nhập chưa đúng",
              "error"
            );
          }
        })
        .catch((err) => {
          swal(
            "Xác minh không thành công",
            "Gmail bạn nhập chưa đúng",
            "error"
          );
        });
    } else {
      swal("Bạn chưa nhập ?", "Emai không được để trống", "warning");
    }
  }

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
          <Form.Label>Địa chỉ email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Mời nhập email"
            required
            onKeyUp={(e) => setValue(`resetPass`, e.target.value)}
            {...register(`resetPass`, {
              value: "",
            })}
          />
          <Button
            variant="primary mt-3"
            className="btn-square btw-130"
            onClick={() => handleResetPass()}
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </div>
  );
}
