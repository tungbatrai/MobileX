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
                    <Breadcrumb.Item active>Create Account</Breadcrumb.Item>
                </Breadcrumb>
                <h5 className="font-24 font-normal text-center">Create Account</h5>
                <div className="box-w580">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter First name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter last name
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">
                                Please enter password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control required type="confirmpassword" placeholder="Confirm password" />
                            <Form.Control.Feedback type="invalid">
                                Please confirm password
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
