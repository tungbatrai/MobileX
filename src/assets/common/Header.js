/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Breadcrumb, Image, Nav } from "react-bootstrap";
import Logo from "../Images/logo.png";
import { CommontService } from "../../services/CommontService";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const count = useSelector((state) => state.numberCart);
  const [data, setData] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState();
  useEffect(() => {
    getCategory();
  }, []);
  function getCategory() {
    CommontService.getList().then((res) => {
      if (res.status === 200) {
        // console.log("data", res.data.data);
        setData(res.data);
      }
    });
  }
  return (
    <div>
      <header className="page_container">
        <div className="header_row_1 row mx-0">
          <div className="col-5"></div>
          <div className="flex justify-center col-2">
            <NavLink to="/" className="header_logo">
              <Image src={Logo} alt="Shop Logo" />
            </NavLink>
          </div>
          <div className="header_item_right col-5">
            <div>
              <input
                className="ipw-300 height-44 input-search w-100 mr-2 px-2"
                type="search"
                placeholder="Search..."
              />
              <NavLink to="my-order" className="header_search">
                Đơn hàng 
              </NavLink>
              <NavLink to="account" className="header_search">
                Tài khoản
              </NavLink>

              <NavLink to="/cart" className="header_search">
                Giỏ <span className="cart">{count>0 && ( <>{count}</>)}</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="header_row_2 flex justify-center items-center">
          <div className="container flex justify-center">
            <Nav variant="pills">
              {data?.data?.map((item, index) => {
                return (
                  <Nav.Item className="p-2">
                    <Link
                      style={{ color: "black" }}
                      to={`/product/${item.id}`}
                      onClick={() => setBreadcrumb(item.name)}
                    >
                      {item.name}
                    </Link>
                  </Nav.Item>
                );
              })}
              {/* <Nav.Item>
                <Nav.Link href="/catalog">Điện thoại</Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link href="/laptop">Laptop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/clock">Đồng Hồ thông minh</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/accessory">Phụ kiện</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Link
                  to="/contact-us"
                  style={{ color: "black" }}
                  eventKey="contact"
                >
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </header>
      {/* <div className="container">
        {breadcrumb && (
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrum">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>{breadcrumb}</Breadcrumb.Item>
          </Breadcrumb>
        )}
      </div> */}
    </div>
  );
}
