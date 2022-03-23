/** @format */

import React from "react";
import { Button, Image } from "react-bootstrap";
import BannerHome from "../components/Homepage/BannerHome";
import BannerHomeTwo from "../components/Homepage/BannerHomeTwo";
import BestSeller from "../components/Homepage/BestSeller";
import Banner from "../Images/banner_1.png";
import baner7 from "../Images/baner7.jpg";
import Banner6 from "../Images/banner8.jpg";
export default function Homepage() {
  return (
    <div className="homepage ">
      <div className="banner_1">
        <BannerHome />
      </div>
      <div className="mt-5">
        <BannerHomeTwo />
      </div>

      <div className="mt-5 mb-5">
        <BestSeller />
      </div>
      <div className="banner_3">
        <div className="container_big">
          <div className="row mb-3">
            <div className="col-6">
              <div className="image_h700 relative">
                <Image src={baner7} alt="banner" />
                <div className="banner_text_left">
                  <div className="caption_text_1 max-w-sm">
                    <h4 className="font-16 text-b500 uppercase">
                      MỘT CHIẾC TAI NGHE TỐT
                    </h4>
                    <h3 className="font-md-60 font-25 font-semibold  my-4">
                      Cho sở thích âm nhạc!
                    </h3>
                    <Button
                      variant="b500"
                      className="btn-square btw-154 font-11 font-semibold mt-2"
                    >
                      Mua ngay
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 ">
              <div className="image_h700 relative">
                <Image src={Banner6} alt="banner" />
                <div className="banner_text_left">
                  <div className="caption_text_1 max-w-sm">
                    <h4 className="font-16 text-b500 uppercase">
                      ÂM LƯỢNG CHO MỌI CUỘC CHƠI
                    </h4>
                    <h3 className="font-md-60 font-25 font-semibold  my-4">
                      Dễ sử dụng!
                    </h3>
                    <Button
                      variant="b500"
                      className="btn-square btw-154 font-11 font-semibold mt-2"
                    >
                      MUA NGAY
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer_newsletter_caption mt-5">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4  items-center ">
          <div className="newsletter">
            <div className="font-22">Get our latest news and special sales</div>
            <p className="text">
              You may unsubscribe at any moment. For that purpose, please find
              our contact info in the legal notice.
            </p>
          </div>
          <div className="btn-search flex">
            <input
              className="ipw-300 height-44 input-search w-100 mr-2 px-2"
              type="search"
            />
            <Button
              variant="b500"
              className="btn-square btw-65 font-14 font-semibold"
            >
              GET
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
