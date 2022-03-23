import React from "react";
import { Button, Image } from "react-bootstrap";
import Banner from "../../Images/banner2.jpg";
import Banner3 from "../../Images/banner3.jpg";
import slide1 from "../../Images/slide1.png";

export default function BannerHomeTwo() {
  return (
    <div>
      <div className="container_big">
        <div className="row">
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner} alt="banner" />
              <div className="banner_text_left">
                <div className="caption_text_1">
                  <h3 className="font-md-42 font-22">Những chiếc máy tính mới</h3>
                  <p className="text-g600">Số sản phẩm không giới hạn!</p>
                  <Button
                    variant="b500"
                    className="btn-square btw-46 font-20 font-semibold mt-2"
                  >
                    &#10152;
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={Banner3} alt="banner" className="relative" />
              <div className="banner_text_center">
                <div className="text-center">
                  <h4 className="font-22 text-white">Rẻ hơn 30%</h4>
                  <h3 className="font-md-60 font-22 text-white uppercase">
                   GIÁ SIÊU THẤP
                  </h3>
                  <p className="font-18 text-white">Sở hữ dễ dàng !</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="image_h700 relative">
              <Image src={slide1} alt="banner" />
              <div className="banner_text_left">
                <div className="caption_text_1">
                  <h3 className="font-md-42 font-22" style={{ color: "white" }}>
                    Phụ kiện đầy đủ các loại
                  </h3>
                  <p className="text-g600">Không giới hạn đơn hàng!</p>
                  <Button
                    variant="b500"
                    className="btn-square btw-46 font-20 font-semibold mt-2"
                  >
                    &#10152;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
