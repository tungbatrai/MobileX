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
import { useForm } from "react-hook-form";
export default function Cart() {
  const history = useHistory();
  const [orderNow, setOrderNow] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    reset,
    setError,
  } = useForm();
  const orderSubmit = () => {
    const token = JSON.parse(localStorage.getItem("client_token"));
    let dataOrder = []
    product.map((item,index) => {
      const d1 = new Date().getTime();
      const a = ["ft", token.data[0].id, d1,index];
      let ship_code = a.join("");
      let order = {
        customer_id: token.data[0].id,
        product_id: item.product.id,
        quantity: item.quantity,
        status: "WAITING",
        ship_code :ship_code,
        phone_num: getValues(`phone`),
        address: getValues(`address`)
      };
    
     dataOrder.push(order.ship_code)
   
    
      cartService.creatCart(order).then((res) => {
        if (res.status === 200) {
          console.log("success");
          setOrderNow()
         
        }
      });
    });
    setOrderNow(dataOrder)
    history.push("/ordersuccess");
  };
  useEffect(() => {
   console.log(orderNow)
  }, [orderNow]);
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
  }, [product, count]);

  const removeItemAll = () => {
    //window.localStorage.removeItem('cart');
    /// localStorage.removeitem("count");

    dispatch({
      type: "REMOVE",
      id: 0,
    });
  };
  // const removeItem = (id) => {
  //   dispatch({
  //     type: "REMOVE",
  //     id: id,
  //   });
  // };

  const updateQuantity = async (e, id) => {
    if (e.target.value === "") {
      e.target.value = 0;
    }
    let quantity = e.target.value;
    if (quantity === "0") {
      // removeItem(id);
      removeItemAll();
    }
    dispatch({
      type: "UPDATEQUANTITY",
      id: id,
      updateQuantity: quantity,
    });
  };

  const formatPrice = (value) => {
    if (value && value > 0) {
      return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  };
  return (
    <div className="cart-page">
      <div className="box-cart custom-cart">
        {count >= 1 ? (
          <>
            <div className="w-100 text-right ">
              {" "}
              <button className=" mt-3 pr-3" onClick={() => removeItemAll()}>
                Xóa giỏ hàng
              </button>
            </div>

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
                          Giá : {formatPrice(item.product.price)}
                        </p>
                        {/* <div onClick={() => removeItem(index)}>X</div> */}
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
                      {formatPrice(item.quantity * item.product.price)}
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
                    type="number"
                    placeholder="Mời nhập số điện thoại"
                    onKeyUp={(e) => setValue(`phone`, e.target.value)}
                    {...register(`phone`, {
                      value: "",
                    })}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Địa chỉ</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Mời nhập địa chỉ "
                    onKeyUp={(e) => setValue(`address`, e.target.value)}
                    {...register(`address`, {
                      value: "",
                    })}
                  />
                </Form.Group>
              </Form>
              <div className="tab-choose mt-4">
                <div className="flex justify-between">
                  <p className="font-16 font-semibold m-0">Tổng tiền:</p>
                  <p className="font-14 text-r300 m-0">
                    {formatPrice(totalMoney)} đ
                  </p>
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
