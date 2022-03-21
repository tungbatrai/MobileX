import React, { useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";

export default function Registration() {

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
                    <Breadcrumb.Item active>Tạo tài khoản</Breadcrumb.Item>
                </Breadcrumb>
                <h5 className="font-24 font-normal text-center">Tạo tài khoản</h5>
                <div className="box-w580">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mời nhập tên"

                            />
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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control required type="password" placeholder="Mời nhập khẩu" />
                            <Form.Control.Feedback type="invalid">
                                Hãy nhập mật khẩu
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Xác nhận mật khẩu</Form.Label>
                            <Form.Control required type="confirmpassword" placeholder="Xác nhận mật khẩu" />
                            <Form.Control.Feedback type="invalid">
                                Hãy nhập xác nhận mật khẩu
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="btn-square btw-130"

                        >
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
