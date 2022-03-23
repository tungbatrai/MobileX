/** @format */

import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Image, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import Banner from "../Images/banner2.jpg";
import { orderService } from "../../services/orderService";
import PaginationSection from "../common/PaginationSection";
import swal from "sweetalert";
import DateTime from "../common/DateTime";
import { LoginService } from "../../services/LoginService";
export default function MyOrder() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const productlist = (e) => {
    //history.push("/catalog");
    orderService.deleteId(e).then((res) => {
      if (res.status === 200) {
        swal("Thay đổi thành công !", "", "success");
      } else {
        swal("Lỗi ", "Vui lòng thử lại", "error");
      }
    });
  };
  const home = () => {
    history.push("/");
  };
  const formatPrice = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  };
  const [dataFill, setDataFill] = useState({
    pageable: {
      pageNumber: 1,
      pageSize: 5,
    },
    user: "",
  });
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("client_token"));
    LoginService.getUserDetail(token.data[0].id).then((respon) => {
      if (respon.status === 200) {
        orderService
          .getMyOrder(dataFill, respon.data.data[0]?.name)
          .then((res) => {
            if (res?.data?.status === 200) {
              console.log(res.data);
              setData(res.data);
            }
          });
      }
    });
  }, [dataFill]);

  function handleLoad(number) {
    setDataFill({
      ...dataFill,
      pageable: { ...dataFill.pageable, pageNumber: number },
    });
  }
  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="box-choose-content">
          <h4 className="text-green-500 uppercase font-16 text-center mt-2">
            Đơn Hàng của tôi
          </h4>
        </div>
        {data?.data?.map((item, index) => {
          return (
            <>
              <div className="box-choose-content">
                <div className="grid grid-cols-12 gap-4 ml-4">
                  <div className="col-span-4 md:col-span-2">
                    <div className="cart-image-product">
                      <Image src={item.image} alt="banner" />
                    </div>
                  </div>
                  <div className="col-span-8 md:col-span-10">
                    <h4 className="font-14 font-medium m-0">
                      Điện thoại : {item.product_name}
                    </h4>
                    <div className="font-14 grid grid-cols-2 gap-2 mt-2">
                      <p>
                        Màu: <span>{item.color}</span>{" "}
                      </p>
                      <p>
                        Số Lượng: <span>{item.quantity}</span>{" "}
                      </p>
                    </div>
                    <div className="font-14 grid grid-cols-2 gap-2 mt-2">
                      <p>
                        Tổng tiền:{" "}
                        <span className="text-r300">
                          {formatPrice(item.price)}
                        </span>{" "}
                      </p>
                      <p>
                        <div>
                          Trạng thái đơn hàng :<b>{item.status}</b>
                        </div>
                      </p>
                    </div>
                    {/* <div className="font-14 grid grid-cols-2 gap-3">
                      <p>Tổng tiền:</p>
                      <p className="font-14 text-r300 m-0">
                        {formatPrice(23000000)}
                      </p>
                    </div> */}
                    <div></div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 ml-4">
                  <div className="col-span-8 md:col-span-10">
                    Thời gian đặt hàng :
                    <DateTime format="" type="date" date={item?.time_order} />
                  </div>
                  <div className="col-span-4 md:col-span-10">
                    {item.status == "COMPLETED" ? (
                      <Button
                        disabled={true}
                        variant=""
                        className="btn-r200 w-100 font-14 w-50"
                        onClick={productlist}
                      >
                        Thành công
                      </Button>
                    ) : (
                      <Button
                        variant=""
                        className="btn-y600 w-100 font-14 w-50"
                        onClick={() => productlist(item.id)}
                      >
                        Hủy đơn hàng
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="d-flex justify-content-center mt-2">
          <PaginationSection
            size={dataFill.pageable.pageSize}
            number={data.currentPage}
            totalElements={data.totalElements}
            handlePaging={handleLoad}
          />
        </div>
      </div>
    </div>
  );
}
