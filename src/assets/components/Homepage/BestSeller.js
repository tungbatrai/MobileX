/** @format */

import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { HomeService } from "../../../services/HomeService";
import Banner from "../../Images/banner2.jpg";
import Banner3 from "../../Images/banner3.jpg";
export default function BestSeller() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const [dataFill, setDataFill] = useState({
    pageable: {
      pageNumber: 1,
      pageSize: 10,
    },
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 1000);
  }, []);
  function getData() {
    HomeService.getProduct(dataFill).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
      }
    });
  }
  return (
    <div className="BestSeller">
      <div className="container_big">
        <div>
          <h3 className="font-30 text-b500 text-center my-5">
            {" "}
            Shop Best Sellers{" "}
          </h3>
          <Slider {...settings}>
            {data?.data?.map((item, index) => {
              return (
                <div key={index}>
                  <Card className="card-product">
                    <Link to={`/product-detail/${item.id}`}>
                      <Card.Img variant="top" src={item.image} />
                    </Link>

                    <Card.Body className="card-product-body">
                      <p className="font-medium mb-0">
                        {" "}
                        {item.category_name} - {item.brand_name}{" "}
                      </p>
                      <p className="font-22 text-b500 font-medium mb-0">
                        <span className="text-black"> Tên sản phẩm :</span>{" "}
                        {item.name}
                      </p>
                      <p className="font-15 text-b500 font-medium mb-0">
                        {item.total_quantity && item.total_quantity > 0 && (
                          <>
                            Số lượng :{" "}
                            <span className="text-r300">
                              {" "}
                              {item.total_quantity}
                            </span>
                          </>
                        )}
                      </p>
                      {(item.total_quantity && item.total_quantity) > 0 ? (
                        <>
                          <Button
                            variant="b500"
                            className="btw-130 btn-square font-11"
                          >
                            Đang có sẵn
                          </Button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Button
                            variant="b500"
                            className="btw-130 btn-square font-11"
                          >
                            Hết hàng
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
