import React from "react";

export default function OrderSuccess() {
  return (
    <div className="cart-page">
      <div className="box-cart">
        <div className="box-choose-content">
          <h4 className="text-green-500 uppercase font-16">
            ĐẶT HÀNG THÀNH CÔNG
          </h4>
        </div>
        <div className="box-cart-detail font-14">
          <p>
            Cảm ơn <span className="font-medium">anh Tùng</span> đã cho Thế Giới
            Di Động cơ hội được phục vụ. Trong 15 phút, nhân viên MobileX sẽ{" "}
            <span className="font-medium">
              gọi điện hoặc gửi tin nhắn xác nhận giao hàng
            </span>{" "}
            cho anh.
          </p>
          <div className="box-choose-content my-4">
            <p className="uppercase">đơn hàng : #905531</p>
            <p>
              - <span className="font-medium">Người nhận hàng : </span>
              Anh Tùng, 0965323888
            </p>
            <p>
              - <span className="font-medium">Giao đến : </span>
              số 5 ngõ 395, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Hà Nội (nhân
              viên sẽ gọi xác nhận trước khi giao).
            </p>
            <p>
              - <span className="font-medium">Tổng tiền : </span>
              <span className="text-r300 m-0"> 43.990.000₫</span>
            </p>
          </div>
        </div>
        <div className="box-cart-detail">
          <h4 className="font-14 uppercase">chọn hình thức thanh toán</h4>
        </div>
      </div>
    </div>
  );
}
