import React from "react";
import { Button, Image } from "react-bootstrap";
import Banner from "../../Images/banner_1.png";
export default function BannerHome() {
  return (
    <div>
      <div className="image_h700 relative">
        <Image src={Banner} alt="banner" />
        <div className="banner_text">
          <div className="caption_text">
            <h4 className="text-b500 uppercase font-16">
              CÔNG NGHỆ TƯƠNG LAI !
            </h4>
            <h3 className="font-lg-60 font-25 font-semibold  my-4">
              Best Laptops!
            </h3>
            <p>Sản phẩm không thể thiếu cho mọi lứa tuổi !</p>
            <Button
              variant="b500"
              className="btn-square btw-154 font-11 font-semibold mt-2"
            >
              MUA NGAY
            </Button>
          </div>
          <div className="caption_text">
            <h4 className="font-22">Tốt hơn và rẻ hơn !</h4>
            <h3 className="price font-lg-60 font-25 font-semibold ">
            Giá chỉ từ  39.999.000d
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
