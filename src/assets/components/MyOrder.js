/** @format */

import React, { useState } from "react";
import { Button, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/banner2.jpg";
export default function MyOrder() {
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
            Đơn Hàng của tôi
          </h4>
        </div>
        <div className="box-choose-content">
          <div className="grid grid-cols-12 gap-4 ml-4">
            <div className="col-span-4 md:col-span-2">
              <div className="cart-image-product">
                <Image
                  src="https://res.cloudinary.com/cloudygod/image/upload/v1647262723/category/file_g7canm.jpg"
                  alt="banner"
                />
              </div>
            </div>
            <div className="col-span-8 md:col-span-10">
              <h4 className="font-14 font-medium m-0">
                Điện thoại : I phone 13
              </h4>
              <div className="font-14 grid grid-cols-2 gap-2 mt-2">
                <p>
                  Màu: <span>Red</span>{" "}
                </p>
                <p>
                  Số Lượng: <span>1</span>{" "}
                </p>
              </div>
              <div className="font-14 grid grid-cols-2 gap-3">
                <p>Tổng tiền:</p>
                <p className="font-14 text-r300 m-0">{formatPrice(23000000)}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 ml-4">
            <div className="col-span-8 md:col-span-10">Thời gian đặt hàng :2022-03-16 22:36:49</div>
            <div className="col-span-4 md:col-span-10">
              {" "}
              <Button
                variant=""
                className="btn-y600 w-100 font-14 w-50"
                onClick={productlist}
              >
                Hủy đơn hàng
              </Button>
            </div>
          </div>
        </div>
        <div className="box-choose-content">
          <div className="grid grid-cols-12 gap-4 ml-4">
            <div className="col-span-4 md:col-span-2">
              <div className="cart-image-product">
                <Image
                  src="https://res.cloudinary.com/cloudygod/image/upload/v1647262736/category/file_ewzris.jpg"
                  alt="banner"
                />
              </div>
            </div>
            <div className="col-span-8 md:col-span-10">
              <h4 className="font-14 font-medium m-0">
                Điện thoại : I phone 13
              </h4>
              <div className="font-14 grid grid-cols-2 gap-2 mt-2">
                <p>
                  Màu: <span>Red</span>{" "}
                </p>
                <p>
                  Số Lượng: <span>1</span>{" "}
                </p>
              </div>
              <div className="font-14 grid grid-cols-2 gap-3">
                <p>Tổng tiền:</p>
                <p className="font-14 text-r300 m-0">{formatPrice(23000000)}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 ml-4">
            <div className="col-span-8 md:col-span-10">Thời gian đặt hàng :2022-03-14 01:02:14</div>
            <div className="col-span-4 md:col-span-10">
              {" "}
              <Button
               disabled={true}
                variant=""
                className="btn-r200 w-100 font-14 w-50"
                onClick={productlist}
              >
                Thành công
              </Button>
            </div>
          </div>
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
