import './product.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import { WATCHDATA } from '../shared/watchdata';
import { PHONEDATA } from '../shared/phonedata';
import { CAMDATA } from '../shared/camdata';
const Product = () => {
    const CardItem1 = (item) => {
        return (
            <SwiperSlide>
            <div className="card">
                <div className="card-header">
                    <img src={item.image} className="card-img-top" alt={item.Name} />
                    <span type="button" id="wish" className="far fa-heart"></span>
                </div>
                <div className="card-body">
                    <p id="name">{item.Name}</p>
                    <p id="Price">₹{item.Price}</p>
                    <div id="row">
                        <p id="Delivery" class="col-6 float-start">Free Delivery</p>
                        <span class="col float-end" id="rating">{item.rating}<span className="fa fa-star"></span></span>
                    </div>
                    <NavLink to={`/watch/${item.id}`}><p id="cart"><button class="btn btn-outline-dark">Buy Now</button></p></NavLink>
                </div>
            </div>
            </SwiperSlide>
        );
    }
    const CardItem2 = (item) => {
        return (
            <SwiperSlide>
            <div className="card">
                <div className="card-header">
                    <img src={item.image} className="card-img-top" alt={item.Name} />
                    <span type="button" id="wish" className="far fa-heart"></span>
                </div>
                <div className="card-body">
                    <p id="name">{item.Name}</p>
                    <p id="Price">₹{item.Price}</p>
                    <div id="row">
                        <p id="Delivery" class="col-6 float-start">Free Delivery</p>
                        <span class="col float-end" id="rating">{item.rating}<span className="fa fa-star"></span></span>
                    </div>
                    <NavLink to={`/Phone/${item.id}`}><p id="cart"><button class="btn btn-outline-dark">Buy Now</button></p></NavLink>
                </div>
            </div>
            </SwiperSlide>
        );
    }
    const CardItem3 = (item) => {
        return (
            <SwiperSlide>
            <div className="card">
                <div className="card-header">
                    <img src={item.image} className="card-img-top" alt={item.Name} />
                    <span type="button" id="wish" className="far fa-heart"></span>
                </div>
                <div className="card-body">
                    <p id="name">{item.Name}</p>
                    <p id="Price">₹{item.Price}</p>
                    <div id="row">
                        <p id="Delivery" class="col-6 float-start">Free Delivery</p>
                        <span class="col float-end" id="rating">{item.rating}<span className="fa fa-star"></span></span>
                    </div>
                    <NavLink to={`/camera/${item.id}`}><p id="cart"><button class="btn btn-outline-dark">Buy Now</button></p></NavLink>
                </div>
            </div>
            </SwiperSlide>
        );
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12" align="center">
                        <NavLink to="/Products"><button type="button" className="btn btn-outline-primary me-2 active">ALL</button></NavLink>
                        <NavLink to="/watch"><button type="button" className="btn btn-outline-secondary me-2">Watch</button></NavLink>
                        <NavLink to="/Phone"><button type="button" className="btn btn-outline-success me-2">Phone</button></NavLink>
                        <NavLink to="/HeadPhone"><button type="button" className="btn btn-outline-warning me-2">HeadPhones</button></NavLink>
                        <NavLink to="/camera"><button type="button" className="btn btn-outline-info me-2">Camera</button></NavLink>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 align="center">Watch</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1050: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                       {WATCHDATA.map(CardItem1)}
                    </Swiper>
                </div>
                <hr></hr>
                <div className="row justify-content-center">
                    <h1 align="center">Phone</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1050: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                       {PHONEDATA.map(CardItem2)}
                    </Swiper>
                </div>
                <hr></hr>
                <div className="row justify-content-center">
                    <h1 align="center">Camera</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1050: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                       {CAMDATA.map(CardItem3)}
                    </Swiper>
                </div>
            </div>   
        </div>
    );
}
export default Product;


