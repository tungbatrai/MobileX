/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import Apple from "../Images/apple.svg";
import Diner from "../Images/diners.svg";
import Jcb from "../Images/jcb.svg";
import Visa from "../Images/visa.svg";
import Bitcoin from "../Images/bitcoin.svg";
import { useHistory } from "react-router";
export default function Footer() {
  const history = useHistory();
  const privacy = () => {
    history.push("/privacy-policy");
  };
  const contact = () => {
    history.push("/contact-us");
  };
  return (
    <div>
      <footer>
        <div className="footer_main">
          <div className="footer-contact grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-4">
            <div>
              <h6 className="mb-3">THÔNG TIN CƠ BẢN </h6>
              <ul className="text-g200">
                <li>
                  Hoạt động : Từ thứ 2 đến thứ 6 tất cả các ngày trong năm
                </li>
                <li>Thời gian mở / đóng cửa : 8am - 8.30pm </li>
                <li>03337543322</li>
                <li>shopmobiest@gmail.com</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3">CAM ĐOAN</h6>
              <ul className="text-g200">
                <li>Vận chuyển dưới 5 ngày</li>
                <li>Miễn phí đổi trả trong 15 ngày 1 đổi 1</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3"> CHĂM SÓC KHÁCH HÀNG</h6>
              <ul className="text-g200">
                <li onClick={privacy}>Legal Notice</li>
                <li onClick={contact}>About Us</li>
              </ul>
            </div>
          </div>
          <div className="container_big">
            <div className=" md:flex justify-between items-center">
              <div className="text-g200">&#169; 2021. Powered by Shopify</div>
              <div className="flex justify-center my-2">
                <div className="footer_payments mx-1">
                  <Image src={Apple} alt="banner" />
                </div>
                <div className="footer_payments mx-1">
                  <Image src={Bitcoin} alt="banner" />
                </div>
                <div className="footer_payments mx-1">
                  <Image src={Diner} alt="banner" />
                </div>
                <div className="footer_payments mx-1">
                  <Image src={Jcb} alt="banner" />
                </div>
                <div className="footer_payments mx-1">
                  <Image src={Visa} alt="banner" />
                </div>
              </div>
              <div>
                <i className="mx-1 fa fa-facebook"></i>
                <i className="mx-1 fa fa-twitter"></i>
                <i className="mx-1 fa fa-instagram"></i>
                <i className="mx-1 fa fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
