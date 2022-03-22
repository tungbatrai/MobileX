/** @format */

import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Tab, Tabs } from "react-bootstrap";
import ListProduct from "../common/ListProduct";
import PaginationSection from "../common/PaginationSection";
import { useParams, Link, useHistory } from "react-router-dom";
import { ProductService } from "../../services/ProductService";
export default function Catalog() {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const [keyFind, setKeyFind] = useState();

  const [data, setData] = useState([]);
  const [dataFill, setDataFill] = useState({
    pageable: {
      pageNumber: 1,
      pageSize: 10,
    },
    product: "",
    category_id: "",
    brand_id: "",
  });
  function handlePaging(number) {
    setDataFill({
      ...dataFill,
      pageable: { ...dataFill.pageable, pageNumber: number },
    });
  }
  function handleHome() {
    history.push("/");
  }
  const tokenFind = localStorage.getItem("find");
  useEffect(() => {
    setDataFill({
      ...dataFill,
      product: tokenFind,
    });
  }, [tokenFind]);
  useEffect(() => {
    if (tokenFind) {
      console.log(tokenFind);
      setDataFill({
        ...dataFill,
        product: tokenFind,
      });
    }
    setKeyFind(tokenFind);
    setStatus(true);
  }, []);
  useEffect(() => {
    if (status) {
      getProduct();
    }
  }, [dataFill]);
  function getProduct() {
    ProductService.getProduct(dataFill).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }
  return (
    <div>
      <div className="catalog-page">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrum" onClick={() => handleHome()}>
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>Find</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-5">
            <div className="list-product">
              <div className="container_big">
                <div className="tab-choose ">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data?.data?.map((item, i) => {
                      return (
                        <div key={i}>
                          <Card className="card-product">
                            <Link to={`/product-detail/${item.id}`}>
                              <Card.Img variant="top" src={item.image} />{" "}
                            </Link>

                            <Card.Body className="card-product-body my-0 py-0">
                              <p className="font-medium">
                                {item.category_name} - {item.brand_name}
                              </p>
                              <p className="font-22 text-b500 font-medium">
                                {item.name}
                              </p>

                              <p className="font-15 text-b500 font-medium mb-0">
                                {item.total_quantity &&
                                  item.total_quantity > 0 && (
                                    <>
                                      Số lượng :{" "}
                                      <span className="text-r300">
                                        {" "}
                                        {item.total_quantity}
                                      </span>
                                    </>
                                  )}
                              </p>
                              {(item.total_quantity && item.total_quantity) >
                              0 ? (
                                <>
                                  <Button
                                    variant="b500"
                                    className="btw-130 mt-2 btn-square font-11"
                                  >
                                    Đang có sẵn
                                  </Button>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <Button
                                    variant="b500"
                                    className="btw-130 mt-2 btn-square font-11"
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
                  </div>
                </div>

                <div className="flex justify-center mt-5">
                  {data?.data?.length > 0 && (
                    <PaginationSection
                      size={dataFill.pageable.pageSize}
                      number={data.currentPage}
                      totalElements={data.totalElements}
                      handlePaging={handlePaging}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
