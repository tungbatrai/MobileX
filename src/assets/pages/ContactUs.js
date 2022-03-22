/** @format */

import React from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import Map from "../common/Map";

export default function ContactUs() {
  return (
    <div className="contact-page mb-5">
      <div className="container">
        <Breadcrumb className="px-0">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <ul className="mb-4">
              <li className="font-16 font-semibold uppercase">
                THÔNG TIN CƠ BẢN
              </li>
              <li className="text-g200">
                Hoạt động : Từ thứ 2 đến thứ 6 tất cả các ngày trong năm
              </li>
              <li className="text-g200">
                Thời gian mở / đóng cửa : 8am - 8.30pm
              </li>
              <li className="text-g200">03337543322</li>
            </ul>
            <ul className="mb-4">
              <li className="font-16 font-semibold uppercase">CAM ĐOAN</li>
              <li className="text-g200">Vận chuyển dưới 5 ngày</li>
              <li className="text-g200">
                Miễn phí đổi trả trong 15 ngày 1 đổi 1
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="google-map mb-5">
              <Map />
            </div>
            <div>
              <p className="font-24 font-semibold">
                Bạn có câu hỏi về sản phẩm, công ty của chúng tôi vui lòng  Gửi email cho chúng tôi : shopmobieST@gmail.com
              </p>
              <p className="text-g200">
                Chúng tôi sẽ sẵn lòng hỗ trợ bạn trong bất kỳ câu hỏi nào và
                khuyến khích bạn để chia sẻ ý tưởng và cải tiến của bạn với
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
