import React from "react";
import { Button, Image } from "react-bootstrap";
import Apple from "../Images/apple.svg";
import Diner from "../Images/diners.svg";
import Jcb from "../Images/jcb.svg";
import Visa from "../Images/visa.svg";
import Bitcoin from "../Images/bitcoin.svg";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_newsletter_caption">
          <div className="container flex justify-between items-center">
            <div className="newsletter">
              <div className="font-22">
                Get our latest news and special sales
              </div>
              <p className="text">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </p>
            </div>
            <div className="btn-search flex">
              <input
                className="ipw-300 height-44 input-search w-100 mr-2"
                type="search"
              />
              <Button
                variant="b500"
                className="btn-square btw-65 font-14 font-semibold "
              >
                GET
              </Button>
            </div>
          </div>
        </div>
        <div className="footer_main">
          <div class="footer-contact grid grid-rows-1 grid-flow-col gap-4">
            <div>
              <h6 className="mb-3">YOUR ACCOUNT</h6>
              <ul className="text-g200">
                <li>Personal info</li>
                <li>Orders</li>
                <li>Credit slips</li>
                <li>Addresses</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3">CUSTOMER SERVICE</h6>
              <ul className="text-g200">
                <li>Monday to Friday</li>
                <li>10am - 6.30pm (NewYork time)</li>
                <li>+(001) 23 45 67 89</li>
                <li>shopify@zemez.io</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3">OUR GUARANTEES</h6>
              <ul className="text-g200">
                <li>Shipping in 3 days</li>
                <li>Free returns within 14 days</li>
                <li>Secure payments</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-3">OUR COMPANY</h6>
              <ul className="text-g200">
                <li>Delivery</li>
                <NavLink to="/privacy-policy">
                  <li>Legal Notice</li>
                </NavLink>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms and conditions of use</li>
              </ul>
            </div>
          </div>
          <div className="container_big">
            <div className="flex justify-between items-center">
              <div className="text-g200">&#169; 2021. Powered by Shopify</div>
              <div className="flex">
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
                <i class="mx-1 fa fa-facebook"></i>
                <i class="mx-1 fa fa-twitter"></i>
                <i class="mx-1 fa fa-instagram"></i>
                <i class="mx-1 fa fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}