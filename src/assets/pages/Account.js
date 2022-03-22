/** @format */

import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginService } from "../../services/LoginService";
import swal from "sweetalert";
export default function Account() {
  const history = useHistory();
  const [data, setData] = useState();
  const [resetPass, setResetPass] = useState(true);
  const [active, setActive] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    reset,
    setError,
  } = useForm();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("client_token"));
    LoginService.getUserDetail(token.data[0].id).then((res) => {
      if (res.data.status === 200) {
        setData(res.data.data[0]);
        setValue(`edit.name`, res.data.data[0].name);
        setValue(`edit.phone`, res.data.data[0].phone);
        setValue(`edit.email`, res.data.data[0].email);
      }
    });
  }, []);
  function handleLogout() {
    localStorage.clear();
    history.push("/login");
  }
  function onSubmit(data) {
    // console.log(data, getValues(`edit`));
    var dataR = "";
    if (resetPass) {
      let userData = {
        name: getValues(`edit.name`),
        phone: getValues(`edit.phone`),
        email: getValues(`edit.email`),
        role: "USER",
      };
      dataR = userData;
    } else {
      let userData = {
        name: getValues(`edit.name`),
        phone: getValues(`edit.phone`),
        email: getValues(`edit.email`),
        role: "USER",
        password: getValues(`pass`),
      };
      if (getValues(`pass`).length > 0 && getValues(`pass`).length < 10) {
      } else {
        swal(
          "Mật khẩu không  đúng định dạng",
          "Mật khẩu không được bỏ trống và có số kí tự lớn hơn 10 vui lòng kiểm tra...",
          "warning"
        ).then((res) => {
          return;
        });
      }
      dataR = userData;
    }
    LoginService.putUser(dataR)
      .then((res) => {
        if (res.status === 200) {
          swal("Thay đổi thành công !", "", "success");
        } else {
          swal("Thay đổi không thành công ", "Vui lòng thử lại", "error");
        }
      })
      .catch((err) => {
        swal("Lỗi ", "Vui lòng thử lại", "error");
      });
  }

  function handleEditPass() {
    setResetPass(!resetPass);
    reset({
      pass: "",
    });
  }
  return (
    <div className="account-page mb-5">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Account</Breadcrumb.Item>
        </Breadcrumb>
        <div className="box-w580">
          <h5 className="font-24 font-normal text-center">
            Chào mừng, {data?.name}
          </h5>
          <p>
            Từ trang "Tài khoản của tôi", bạn có thể xem hoạt động tài khoản gần
            đây và cập nhật thông tin tài khoản của mình. Chỉ cần chọn một liên
            kết bên dưới.
          </p>
          <Form>
            <h5 className="font-24 font-normal text-center">
              Thông tin tài khoản
            </h5>
            <Form.Group className="mb-3">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                maxLength={20}
                onKeyUp={(e) => setValue(`edit.name`, e.target.value)}
                {...register(`edit.name`, {
                  value: getValues(`edit.name`),
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ email </Form.Label>
              <Form.Control
                type="email"
                maxLength={20}
                onKeyUp={(e) => setValue(`edit.email`, e.target.value)}
                {...register(`edit.email`, {
                  value: getValues(`edit.email`),
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại </Form.Label>
              <Form.Control
                type="number"
                maxLength={15}
                onKeyUp={(e) => setValue(`edit.phone`, e.target.value)}
                {...register(`edit.phone`, {
                  value: getValues(`edit.phone`),
                })}
              />
            </Form.Group>
            {!resetPass && (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    maxLength={10}
                    onKeyUp={(e) => setValue(`pass`, e.target.value)}
                    {...register(`pass`, {
                      value: "",
                    })}
                  />
                </Form.Group>
              </>
            )}

            <div className="d-flex justify-between">
              <Button
                variant="warning"
                className="btn-square btw-130"
                onClick={() => handleEditPass()}
              >
                {resetPass ? <> Reset pass</> : <>Cancel reset</>}
              </Button>
              <Button
                variant="danger"
                className="btn-square btw-130"
                onClick={() => onSubmit()}
              >
                Edit
              </Button>
              <Button
                variant="primary"
                type="text"
                className="btn-square btw-130"
                onClick={() => handleLogout()}
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
