/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Image, Tab, Tabs } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../Images/banner2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updatequantity } from "../common/actions";
import { cartService } from "../../services/cartService";

import empty_cart from "../Images/empty_cart.jpg";
export default function Cart() {
  const history = useHistory();
  const orderSubmit = () => {
    const token = JSON.parse(localStorage.getItem("client_token"));

    product.map((item) => {
      let order = {
        customer_id: token.data[0].id,
        product_id: item.product.id,
        quantity: item.quantity,
        status: "SHIPPING",
      };
      console.log(item, order);
      cartService.creatCart(order).then((res) => {
        if (res.status === 200) {
          console.log("success");
        }
      });
    });

    history.push("/ordersuccess");
  };
  const [number, setNumber] = useState(1);
  const product = useSelector((state) => state.Cart);
  const [totalMoney, setTotalMoney] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.numberCart);
  useEffect(() => {
    const getTotal = () => {
      let total = 0;
      product.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      setTotalMoney(total);
    };
    localStorage.setItem("count", count);
    localStorage.setItem("cart", JSON.stringify(product));
    getTotal();
    console.log(product);
  }, [product, count]);

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  // function handleAdd(quantity, id) {
  //   console.log(quantity, id);
  //   const newQuantity = quantity + 1;
  //   dispatch({
  //     type: "UPDATEQUANTITY",
  //     id: id,
  //     updateQuantity: newQuantity,
  //   });
  // }
  // function handleSub(quantity, id) {
  //   console.log(quantity, id);
  //   const newQuantity = quantity - 1;
  //   console.log(quantity, id, newQuantity);
  //   dispatch({
  //     type: "UPDATEQUANTITY",
  //     id: id,
  //     updateQuantity: newQuantity,
  //   });
  // }
  const updateQuantity = async (e, id) => {
    if (e.target.value === "") {
      e.target.value = 0;
    }
    let quantity = e.target.value;
    if (quantity === "0") {
      removeItem(id);
    }
    dispatch({
      type: "UPDATEQUANTITY",
      id: id,
      updateQuantity: quantity,
    });
  };

  const formatPrice = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  return (
    <div className="cart-page">
      <div className="box-cart custom-cart">
        {count >= 1 ? (
          <>
            {product.map((item, index) => {
              return (
                <div className="px-4 py-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 md:col-span-2">
                      <div className="cart-image-product">
                        <Image src={item.product.image} alt="banner" />
                      </div>
                    </div>

                    <div className="col-span-9 md:col-span-10">
                      <div className="flex justify-between items-center">
                        <h4 className="font-14 font-medium m-0">
                          Tên sản phẩm : {item.product.name}
                        </h4>
                        <p className="font-14 text-r300 m-0">
                          {" "}
                          Giá : {item.product.price}
                        </p>
                        <div onClick={() => removeItem(index)}>X</div>
                      </div>

                      <div className="flex justify-between my-3">
                        Màu sắc : {item.product.color}
                      </div>
                      <div className="row">
                        <div className="col-3 mt-3"> Số lượng :</div>
                        <input
                          type="number"
                          className="form-control w-50 ml-3 font-weight-bold  font-italic"
                          min="0"
                          defaultValue={item.quantity}
                          onChange={(e) => {
                            updateQuantity(e, item.product.id);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <p className="font-14 col-4">
                      Tạm tính ({item.quantity} sản phẩm):
                    </p>
                    <p className="font-14 text-r300 p-0">
                      {item.quantity * item.product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            <div className="px-4 py-4 minhight text-center">
              Bạn chưa mua hàng
              <Link to="/">
                {" "}
                <Image src={empty_cart} alt="banner" />
                Trở về trang chủ
              </Link>
            </div>
          </>
        )}

        {count >= 1 ? (
          <>
            {" "}
            <div className="box-cart-detail ">
              <div className="uppercase mb-2"> THÔNG TIN KHÁCH HÀNG</div>

              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Số Điện Thoại</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Mời nhập số điện thoại"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Địa chỉ</Form.Label>
                  <Form.Control as="textarea" rows={3}  placeholder="Mời nhập địa chỉ "/>
                </Form.Group>
              </Form>
              {/* <div className="tab-choose mt-4">
            <div className="uppercase mb-3"> CHỌN CÁCH THỨC NHẬN HÀNG</div>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Giao tận nơi">
                <div className="box-choose-content">
                  <Form className="grid grid-rows-2 grid-flow-col gap-4">
                    <Form.Group controlId="formBasicName">
                      <Form.Control
                        type="name"
                        placeholder="Thành Phố"
                        className=""
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                      <Form.Control
                        type=""
                        placeholder="Phường/Xã"
                        className=""
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Control
                        type="name"
                        placeholder="Quận/Huyện"
                        className=""
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                      <Form.Control
                        type=""
                        placeholder="Số nhà, tên đường"
                        className=""
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Nhận tại siêu thị">
                <div className="box-choose-content">
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          label="Cơ Sở: 19 Lê Văn Lương, Thanh Xuân, Hà Nội"
                          name="group1"
                          type={type}
                          // id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </Tab>
            </Tabs>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Yêu cầu khác ( Không bắt buộc )"
                className=" mt-4"
              />
            </Form.Group>
          </div>  */}
              <div className="tab-choose mt-4">
                <div className="flex justify-between">
                  <p className="font-16 font-semibold m-0">Tổng tiền:</p>
                  <p className="font-14 text-r300 m-0">{formatPrice(23000000)}đ</p>
                </div>
                <Button
                  variant="submitorder"
                  className="btn-square w-100 font-14 uppercase font-bold mt-3"
                  onClick={orderSubmit}
                >
                  Đặt hàng
                </Button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
