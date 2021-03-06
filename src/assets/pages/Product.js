/** @format */

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Image,
  Modal,
  Pagination,
  Tab,
  Tabs,
} from "react-bootstrap";
import PaginationSection from "../common/PaginationSection";
import { useParams, Link, useHistory } from "react-router-dom";
import { ProductService } from "../../services/ProductService";

export default function Product() {
  const history = useHistory();
  const [brand, setBran] = useState([]);
  const [data, setData] = useState([]);
  const [loadBrand, setLoadBrand] = useState(false);
  const { id } = useParams();
  const [brandSetup, setBrandSetup] = useState(false);
  const [brand0, setBrand0] = useState();
  const [activeTab, setActiveTab] = useState();
  const [dataFill, setDataFill] = useState({
    pageable: {
      pageNumber: 1,
      pageSize: 10,
    },
    product: "",
    category_id: "",
    brand_id: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      getBrand();
      setBrandSetup(true);
    }, 1000);
  }, []);
  useEffect(() => {
    if (brandSetup) {
      getBrand();
    }
  }, [id]);
  useEffect(() => {
    if (brandSetup) {
      getProduct();
    }
  }, [dataFill]);
  function getBrand() {
    ProductService.getBrand().then((res) => {
      if (res.status === 200) {
        let dataRv = res.data.data.reverse();
        setBran(dataRv);
        setBrand0(dataRv[0].id);
        setActiveTab(0);
        setDataFill({
          ...dataFill,
          category_id: id,
          brand_id: dataRv[0].id,
        });
      }
    });
  }

  function getProduct() {
    ProductService.getProduct(dataFill).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }
  function handeGoBrand(e) {
    setActiveTab(e);
    setDataFill({
      ...dataFill,
      brand_id: brand[e].id,
      category_id: id,
    });
  }
  function handlePaging(number) {
    setDataFill({
      ...dataFill,
      pageable: { ...dataFill.pageable, pageNumber: number },
    });
  }
  function handleHome() {
    history.push("/");
  }
  return (
    <div>
      <div className="catalog-page">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrum" onClick={() => handleHome()}>
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>Product</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-5">
            <div className="list-product">
              <div className="container_big">
                <div className="tab-choose ">
                  <Tabs
                    defaultActiveKey="0"
                    activeKey={activeTab}
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-5"
                    onSelect={(e) => handeGoBrand(e)}
                  >
                    {brand?.map((bran, index) => {
                      return (
                        <Tab
                          id={`tab${index}`}
                          eventKey={index}
                          title={bran.name}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {data?.data?.map((item, i) => {
                              return (
                                <div key={i}>
                                  <Card className="card-product">
                                    <Link to={`/product-detail/${item.id}`}>
                                      <Card.Img
                                        variant="top"
                                        src={item.image}
                                      />{" "}
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
                                              S??? l?????ng :{" "}
                                              <span className="text-r300">
                                                {" "}
                                                {item.total_quantity}
                                              </span>
                                            </>
                                          )}
                                      </p>
                                      {(item.total_quantity &&
                                        item.total_quantity) > 0 ? (
                                        <>
                                          <Button
                                            variant="b500"
                                            className="btw-130 mt-2 btn-square font-11"
                                          >
                                            ??ang c?? s???n
                                          </Button>
                                        </>
                                      ) : (
                                        <>
                                          {" "}
                                          <Button
                                            variant="b500"
                                            className="btw-130 mt-2 btn-square font-11"
                                          >
                                            H???t h??ng
                                          </Button>
                                        </>
                                      )}
                                    </Card.Body>
                                  </Card>
                                </div>
                              );
                            })}
                          </div>
                        </Tab>
                      );
                    })}
                  </Tabs>
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
