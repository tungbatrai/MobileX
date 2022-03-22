/** @format */

import React, { useState } from "react";
import { Button, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/completed.jpg";
export default function OrderSuccess() {
  const history = useHistory();
  const productlist = () => {
    history.push("/");
  };
  const home = () => {
    history.push("/");
  };
  const formatPrice = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="box-choose-content">
          <h4 className="text-green-500 uppercase font-16 text-center mt-2">
            ĐẶT HÀNG THÀNH CÔNG
          </h4>
        </div>
        <div className="box-cart-detail font-14">
          <p>
            Cảm ơn <span className="font-medium">anh Tùng</span> đã cho MobileX
            cơ hội được phục vụ. Trong 15 phút, nhân viên MobileX sẽ{" "}
            <span className="font-medium">
              gọi điện hoặc gửi tin nhắn xác nhận giao hàng
            </span>{" "}
            cho anh.
          </p>
          <div className="box-choose-content my-4 ">
          <Image src={Banner} alt="banner" />
          </div>
        </div>

        <div className="box-cart-detail">
        
          <Button
            variant="submitorder"
            className="btn-square w-100 font-14 uppercase font-bold my-3"
            onClick={productlist}
          >
            Mua thêm sản phẩm khác
          </Button>
        </div>
      </div>
  
    </div>
  );
}
