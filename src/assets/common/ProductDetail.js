/** @format */

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  FloatingLabel,
  Form,
  Image,
  ProgressBar,
  Table,
} from "react-bootstrap";
import ReactRating from "react-rating";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useParams, Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import { ProductDetailService } from "../../services/ProductDetailService";
import Banner6 from "../Images/user.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import DateTime from "./DateTime";
export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [colorActive, setColorActive] = useState();
  const history = useHistory();
  const Cart = () => {
    history.push("/cart");
  };
  const [data, setData] = useState();
  const [dataType, setDataType] = useState([]);
  const [rom, setRom] = useState([]);
  const [ActiveRom, setActiveRom] = useState(0);
  const [ActivePrice, setActivePrice] = useState(0);
  const [ActiveColor, setActiveColor] = useState();
  const [dataComment, setDataComment] = useState();
  const [dataRating, setDataRating] = useState();
  const [productTypeActive, setProductTypeActive] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    reset,
    setError,
  } = useForm();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsProduct = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const colorArr = [
    { name: "Red", classActive: "background-red" },
    { name: "Yellow", classActive: "background-yellow" },
    { name: "Blue", classActive: "background-blue" },
    { name: "Black", classActive: "background-black" },
    { name: "Green", classActive: "background-green" },
    { name: "White", classActive: "background-white" },
  ];
  const addCart = () => {
    console.log(productTypeActive);
    let dataCart = {
      name: data.name,
      id: productTypeActive.id,
      image: productTypeActive.image,
      price: productTypeActive.price,
      color: productTypeActive.color,
      // ProductDetail: productTypeActive,
    };
    console.log(dataCart);
    dispatch({
      type: "ADDTOCART",
      newItem: dataCart,
      quantity: 1,
    });
  };
  useEffect(() => {
    // const timer = setTimeout(() => {
    getDetail();
    // }, 1000);
  }, []);
  const formatPrice = (value) => {
    if (value && value > 0) {
      return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  };
  function getDetail() {
    ProductDetailService.getDetail(id).then((res) => {
      if (res.status === 200) {
        console.log(res.data.data[0]);
        setData(res.data.data[0]);
      }
    });

    ProductDetailService.getListProductType(id).then((res) => {
      if (res.status === 200) {
        setDataType(res.data.data);
        setActivePrice(res.data?.data[0]?.price);
        setColorActive(0);
        setActiveColor(res.data?.data[0]?.color);
        setProductTypeActive(res.data?.data[0]);
      }
    });
    ProductDetailService.getComment(id).then((res) => {
      if (res.status === 200) {
        setDataComment(res.data.data);
      }
    });
    ProductDetailService.getRating(id).then((res) => {
      if (res.status === 200) {
        setDataRating(res.data.data);
      }
    });
  }

  function hanndleSelect(index, item) {
    setActiveRom(index);
    setActivePrice(item.price);
    setProductTypeActive();
    document.getElementById(`color-${index}`).click();
    setProductTypeActive(dataType[index]);
  }
  function handleColor(item, index) {
    setColorActive(index);
    // setActivePrice(item.price);
    document.getElementById(`rom-${index}`).click();
    setActiveColor(item.color);
    setProductTypeActive(dataType[index]);
  }
  function onSubmit(data) {
    // const Cart = () => {
    //   history.push("/cart");
    // };
  }
  // rating
  const [rat1, setRat1] = useState(0);
  const [rat2, setRat2] = useState(0);
  const [rat3, setRat3] = useState(0);
  const [rat4, setRat4] = useState(0);
  const [rat5, setRat5] = useState(0);
  const [myRate, setMyRate] = useState(0);
  const [myRateComment, setMyRateComment] = useState();
  const [myRateName, setMyRateName] = useState();
  const [myRateActive, setMyyRateActive] = useState(false);
  const [showRate, setShowRate] = useState(false);
  useEffect(() => {
    if (dataRating) {
      //  console.log("dataRatong", dataRating);
      dataRating.counting.map((item) => {
        // console.log(item);
        switch (item.rate) {
          case 1:
            return setRat1((item.time / dataRating.totalElements) * 100);
          case 2:
            return setRat2((item.time / dataRating.totalElements) * 100);
          case 3:
            return setRat3((item.time / dataRating.totalElements) * 100);
          case 4:
            return setRat4((item.time / dataRating.totalElements) * 100);
          default:
            return setRat5((item.time / dataRating.totalElements) * 100);
        }
      });
      dataRating.list.map((item) => {
        // console.log(item.id);
        const token = JSON.parse(localStorage.getItem("client_token"));
        //console.log(item)
        if (item.user_id == token.data[0].id) {
          // console.log("true", item);
          setMyyRateActive(true);
          setMyRate(item.rate);
          setMyRateComment(item.content);
          setMyRateName(item.user_name);
        }
      });
    }
  }, [dataRating]);

  function handleStart(e) {
    // console.log(e);
    setValue(`crateRate.star`, e);
  }
  function CreateRateSubmit() {
    //  console.log(getValues(`crateRate.star`), getValues(`crateRate.content`));
    const token = JSON.parse(localStorage.getItem("client_token"));
    let dataCreate = {
      user_id: token.data[0].id,
      product_id: id,
      rate: getValues(`crateRate.star`),
      content: getValues(`crateRate.content`),
    };
    ProductDetailService.createRating(dataCreate).then((res) => {
      if (res.status === 200) {
        window.location.reload(true);
      }
    });
  }
  // comment
  const [dataCommentSecond, setDataCommentSecond] = useState([]);
  const [dataCommentSecondRepName, setDataCommentSecondRepName] = useState();
  const [dataCommentSecondActive, setDataCommentSecondActive] = useState();
 // const [myCommentActive, setMyCommentActive] = useState(true);
  const [myCommentSecondActive, setMyCommentSecondActive] = useState(true);
  function CreateCommentSubmit() {
    //console.log(getValues(`comment.content`));
    const token = JSON.parse(localStorage.getItem("client_token"));
    let dataCreateComment = {
      user_id: token.data[0].id,
      product_id: id,
      content: getValues(`comment.content`),
      reply_id: 0,
    };
    // console.log(dataCreateComment);
    ProductDetailService.createCommentSecond(dataCreateComment).then((res) => {
      if (res.status === 200) {
        //window.location.reload(true);
        reset({
          comment: '',
        })
      }
    });
  }
  function CreateCommentSecondSubmit(useID) {
    //console.log(getValues(`comment.content`));
    const token = JSON.parse(localStorage.getItem("client_token"));
    let dataCreateScondComment = {
      user_id: token.data[0].id,
      product_id: id,
      content: getValues(`commentSecond.content`),
      reply_id: useID,
    };
    ProductDetailService.createCommentSecond(dataCreateScondComment).then(
      (res) => {
        if (res.status === 200) {
          window.location.reload(true);
        }
      }
    );
  }
  function getSecond(id, name) {
    //console.log(id);
    ProductDetailService.getCommentSecond(id).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setDataCommentSecondActive(res.data?.data[0]?.reply_id);
        setDataCommentSecond(res.data);
        setDataCommentSecondRepName(name);
      }
    });
  }
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("client_token"));
    if (dataComment) {
      if (dataComment.length) {
        dataComment?.map((item) => {
          if (item.user_id == token.data[0].id) {
          //  setMyCommentActive(false);
          }
        });
      }
    }
  }, [dataComment]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("client_token"));
    if (dataCommentSecond) {
      if (dataCommentSecond.data?.length) {
        dataCommentSecond.data?.map((item) => {
          if (item.user_id == token.data[0].id) {
            setMyCommentSecondActive(false);
          }
        });
      }
    }
  }, [dataCommentSecond]);
  // function goCart () {
  //   history.push("./cart")
  // }
  return (
    <div>
      <div className="product-detail-page">
        <div className="container">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

              <Breadcrumb.Item active>{data?.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="box-detail grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Slider {...settings}>
                  <div className="image">
                    <div className="">
                      <Image
                        className="image-slide"
                        src={data?.image}
                        alt="banner"
                      />
                    </div>
                  </div>
                  {dataType?.map((item, index) => {
                    return (
                      <div className="image">
                        {/* image_3_2 */}
                        <div className="">
                          <Image
                            className="image-slide"
                            src={item.image}
                            alt="banner"
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="product-information">
                <h3 className=" text-center text-md-left font-20 ">
                  O Mặt hàng :<span className="text-b500"> {data?.name} đ</span>
                  {/* <span>36.990.000đ</span> */}
                </h3>
                <h3 className="price text-center text-md-left text-g700">
                  {/* {formatPrice(ActivePrice)} */} Giá cuối :
                  <span className=""> {formatPrice(ActivePrice)}đ</span>
                  {/* <span>36.990.000đ</span> */}
                </h3>
                <div className="radio-price">
                  <div> OThông số :</div>
                  <div className="row radio-items grid grid-flow-col auto-cols-max gap-4 ml-2">
                    {dataType?.map((item, index) => {
                      return (
                        <div className="col-4" key={index}>
                          <div
                            id={`rom-${index}`}
                            className={
                              ActiveRom === index
                                ? "btn btn-light button-rom-active"
                                : "btn btn-light "
                            }
                            onClick={() => hanndleSelect(index, item)}
                          >
                            <div className="items-price">
                              <p className="m-2 font-medium">{item.type}</p>
                              <p className="m-0">{formatPrice(item.price)} đ</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-2">O Màu sắc</div>
                <div className="my-3 text-center text-md-left">
                  {dataType.map((item, index) => {
                    return (
                      <Button
                        id={`color-${index}`}
                        variant="border-g100"
                        onClick={() => {
                          handleColor(item, index);
                        }}
                        className={
                          colorActive === index
                            ? `background-${item.color} btw-46 font-12 mr-2`
                            : "btw-46 font-12 mr-2"
                        }
                      >
                        {item.color}
                      </Button>
                    );
                  })}
                </div>
                <div className="radio-color"></div>
                <div className="box-promotion font-14">
                  <div className="promotion-title">
                    Nhận ngay khuyến mại đặc biệt
                  </div>
                  <div className="promotion-list">
                    <p>
                      <i
                        className="fa fa-check-circle-o"
                        aria-hidden="true"
                      ></i>
                      Trả góp 0%
                    </p>
                    <p>
                      <i
                        className="fa fa-check-circle-o"
                        aria-hidden="true"
                      ></i>
                      Tặng bảo hành 2 năm
                    </p>
                    <p>
                      <i
                        className="fa fa-check-circle-o"
                        aria-hidden="true"
                      ></i>
                      Tặng eSim Thần Tám 79 Itel 1T Data khủng 90GB
                    </p>
                    <p>
                      <i
                        className="fa fa-check-circle-o"
                        aria-hidden="true"
                      ></i>
                      Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ
                    </p>
                  </div>
                </div>
                <Button
                  variant="y600"
                  type="submit"
                  className="btn-square w-100 btn-buy-now mt-3"
                >
                  <h3
                    className="uppercase font-20 mt-3"
                    onClick={() => addCart()}
                  >
                    Thêm vào giỏ hàng
                  </h3>
                </Button>
                <Button
                  variant="r200"
                  type="submit"
                  className="btn-square w-100 btn-buy-now mt-3"
                >
                  <h3 className="uppercase font-20">
                    <Link to={`/cart`} style={{ color: "white" }}>
                      Mua ngay
                    </Link>
                  </h3>
                  <p className="font-13 m-0">
                    Giao hàng miễn phí hoặc nhận tại shop
                  </p>
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="product-detail-info mt-5">
          <div className="container">
            <div className="grid grid-cols-12 gap-5">
              <div className="product-features col-span-12 md:col-span-7">
                <div className="mt-5">
                  <h3 className="font-20 font-medium text-center mb-4">
                    Đánh giá chi tiết {data?.name}
                  </h3>
                  <p className="g500 title-header font-15">
                    <div
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                  </p>{" "}
                  <br />
                  {/* <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={"Đọc tiếp ▼"}
                    readLessText={"Thu lại ▲"}
                    readMoreClassName="read-more-less--more"
                    readLessClassName="read-more-less--less"
                  >
                   <p> {data?.description}</p>
                  </ReactReadMoreReadLess> */}
                </div>
              </div>
              <div className="product-parameter  col-span-12 md:col-span-5">
                <p>
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.digital_detail }}
                  />
                </p>
              </div>
            </div>
            <div className="product-rating mt-5">
              <div className="box-rating ">
                <h3 className="font-20 font-medium mb-3">
                  Đánh giá & Nhận xét
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="average_rating text-center">
                    <h5 className="font-16 font-normal">Đánh giá trung bình</h5>
                    <div className="number_rating">{dataRating?.average}</div>
                    <div className="rating">
                      <ReactRating
                        initialRating={dataRating?.average}
                        readonly
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star"
                        fractions={2}
                      />
                    </div>
                    <p className="font-14 text-g200 mt-1">
                      {dataRating?.totalElements} đánh giá & nhận xét
                    </p>
                  </div>
                  <div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1 ">
                        5 <i className="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={rat5}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        4 <i className="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={rat4}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        3 <i className="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={rat3}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        2 <i className="fa fa-star"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={rat2}
                        />
                      </div>
                    </div>
                    <div className="row mx-n1 items-center">
                      <div className="col-3 px-1">
                        1 <i className="fa fa-star ml-1"></i>
                      </div>
                      <div className="col-9 px-1">
                        <ProgressBar
                          className="progress-rating"
                          variant="success"
                          now={rat1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    {myRateActive ? (
                      <>
                        <div className="box-c-user-comment grid grid-cols-12 gap-6">
                          <div className=" col-span-4 d-flex justify-content-center">
                            <Image
                              src={Banner6}
                              alt="banner"
                              className="avatarbackground-white "
                            />
                          </div>
                          <div className="c-comment-box__content text-left col-span-8">
                            <p className="font-18 m-0">{myRateName}</p>
                            <ReactRating
                              initialRating={myRate}
                              readonly
                              emptySymbol="fa fa-star-o"
                              fullSymbol="fa fa-star"
                              fractions={2}
                            />
                            {/* <span className="font-14 text-g200 ml-2">
                              1 ngày trước
                            </span> */}
                            <p className="mt-2 font-16 text-g100  w-100">
                              {myRateComment}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h5 className="font-14 text-g100 font-normal">
                          Bạn đã dùng sản phẩm này?{myRate}
                        </h5>
                        <Button variant="r200" className="btn-square btw-158 ">
                          <p
                            className="font-13"
                            onClick={() => setShowRate(true)}
                          >
                            Gửi đánh giá của bạn
                          </p>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {showRate && (
                <div className="box-comment">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="">
                      <p className="font-18 text-medium">
                        Bạn chấm sản phẩm này bao nhiêu sao?
                      </p>
                      <ReactRating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        fractions={2}
                        onChange={(e) => handleStart(e)}
                      />
                    </div>
                    <div className="col-span-2">
                      <>
                        <FloatingLabel
                          controlId="floatingTextarea"
                          className="mb-3 relative"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Câu hỏi"
                            style={{ height: "100px" }}
                            className="textarea-comment"
                            {...register(`crateRate.content`, {})}
                          />
                          <Button
                            variant="r200"
                            className="btn-evaluate btn-square btw-130 col-4 col-md-2 col-md-2"
                            onClick={() => CreateRateSubmit()}
                          >
                            <p className="font-13">Gửi đánh giá</p>
                          </Button>
                        </FloatingLabel>
                      </>
                    </div>
                  </div>
                </div>
              )}
              {dataRating?.list?.map((item, index) => {
                return (
                  <>
                    {item.user_name != myRateName && (
                      <div
                        className="box-c-user-comment grid grid-cols-12 gap-6"
                        key={index}
                      >
                        <div className="avatar col-span-3 md:col-span-2 lg:col-span-1">
                          <Image
                            src={Banner6}
                            alt="banner"
                            style={{ backgroundColor: "white" }}
                          />
                        </div>
                        <div className="c-comment-box__content col-span-9 md:col-span-10">
                          <p className="font-18 m-0">{item.user_name}</p>
                          <ReactRating
                            initialRating={item.rate}
                            readonly
                            emptySymbol="fa fa-star-o"
                            fullSymbol="fa fa-star"
                            fractions={2}
                          />
                          <span className="font-14 text-g200 ml-2">
                            <DateTime
                              format=""
                              type="date"
                              date={item.time_rate}
                            />
                          </span>
                          <p className="font-16 text-g100">{item.content}</p>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            {/* comment creat 1 */}
            <div className="box-answer-comment mt-5">
              <p className="font-20 font-medium">Hỏi & Đáp về {data?.name}</p>
              {/* {myCommentActive && ( */}
                <>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    className="relative"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Câu hỏi"
                      style={{ height: "80px" }}
                      className="textarea-comment"
                      {...register(`comment.content`, {})}
                    />
                    <Button
                      variant="r200"
                      className="btn-evaluate btn-square btw-130 col-4 col-md-2"
                      onClick={() => CreateCommentSubmit()}
                    >
                      <p className="font-13">Gửi bình luận</p>
                    </Button>
                  </FloatingLabel>
                </>
              {/* )} */}

              {/* comment */}
              {dataComment?.map((item, index) => {
                return (
                  <div
                    className="box-c-user-comment grid grid-cols-12 gap-6"
                    key={index}
                  >
                    <div className="avatar col-span-12 md:col-span-2 lg:col-span-1">
                      <Image
                        src={Banner6}
                        alt="banner"
                        style={{ backgroundColor: "white" }}
                      />
                    </div>
                    <div className="c-comment-box__content col-span-12 md:col-span-10 lg:col-span-11">
                      <p className="font-18 m-0">
                        {item.user_name}
                        <span className="font-14 text-g200 ml-2">
                          <DateTime
                            format=""
                            type="date"
                            date={item.time_comment}
                          />
                        </span>
                      </p>{" "}
                      <p className="font-16 text-g100 m-0">{item.content}</p>
                      <Button
                        variant="link"
                        className="btn-square btw-65-answer"
                        onClick={() => getSecond(item.user_id, item.user_name)}
                      >
                        <p className="font-14">Trả lời</p>
                      </Button>
                      <>
                        {dataCommentSecondActive === item.user_id && (
                          <div>
                            {dataCommentSecond?.data?.map(
                              (itemSecond, idSecond) => {
                                return (
                                  <div
                                    className="c-admin-comment mt-4"
                                    key={idSecond}
                                  >
                                    <span className="text-admin  ml-0">
                                      Rep
                                    </span>{" "}
                                    : {dataCommentSecondRepName}
                                    <p className="font-18 ml-3 d-flex items-center">
                                      {itemSecond.user_name}
                                      <span className="font-14 text-g200 ml-2">
                                        <DateTime
                                          format=""
                                          type="date"
                                          date={itemSecond.time_comment}
                                        />
                                      </span>
                                    </p>{" "}
                                    <p className="font-16 text-g100 ml-3">
                                      {itemSecond.content}
                                    </p>
                                  </div>
                                );
                              }
                            )}
                            {myCommentSecondActive && (
                              <>
                                {" "}
                                <FloatingLabel
                                  controlId="floatingTextarea"
                                  className="relative mt-4"
                                >
                                  <Form.Control
                                    as="textarea"
                                    placeholder="Câu hỏi"
                                    style={{ height: "80px" }}
                                    className="textarea-comment"
                                    {...register(`commentSecond.content`, {})}
                                  />
                                  <Button
                                    variant="r200"
                                    className="btn-evaluate btn-square btw-120 col-4 col-md-2"
                                    onClick={() =>
                                      CreateCommentSecondSubmit(item.user_id)
                                    }
                                  >
                                    <p className="font-13">Viết câu hỏi</p>
                                  </Button>
                                </FloatingLabel>
                              </>
                            )}
                          </div>
                        )}
                      </>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
