/** @format */

import React, { useState } from "react";
import { Button, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/banner2.jpg";
export default function OrderSuccess() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const productlist = () => {
    history.push("/catalog");
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
          <div className="box-choose-content my-4">
            <p className="uppercase">đơn hàng : #905531</p>
            <p>
              - <span className="font-medium">Người nhận hàng : </span>
              Anh Tùng, 0965323888
            </p>
            <p>
              - <span className="font-medium">Giao đến : </span>
              19 Lê Văn Lương , Thanh Xuân , Hà Nội
            </p>
            <p>
              - <span className="font-medium">Tổng tiền : </span>
              <span className="text-r300 m-0">{formatPrice(23000000)}₫</span>
            </p>
            <p
            className="font-14 text-blue-500  mt-3"
            onClick={handleShow}
          >
            Hủy đơn hàng
          </p>
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-cancel-order"
        centered
      >
        <div className="font-14">
          <h4 className="font-16 uppercase mb-4">hủy đơn hàng</h4>
          <p>Bạn có muốn hủy đơn hàng ?</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
                onClick={handleClose}
              >
                Đóng
              </Button>
            </div>
            <div>
              <Button
                variant="b500"
                className="btn-square w-100 font-14 font-semibold"
                onClick={home}
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
