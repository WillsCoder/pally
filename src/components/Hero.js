import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import styles from "../assets/css/style.css"
import style from "../assets/css/stylebk.css"
import Image from "next/image";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Hero = () => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

  return (
    <div>
        <section className="hero_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 webhero-view">
                        <div className="hero-content text-center">
                            <a href="refer_earn.html">
                                <div className="box-outline refer-bg">
                                    <h6>Refer & Earn</h6>
                                    <p>Invite a friend now</p>
                                    <div className="home-list-img">
                                        <Image src={require("../assets/images/refer-money.svg")} alt='listing'/>
                                    </div>
                                </div>
                            </a>
                            <a href="make_list.html">
                                <div className="box-outline mt-4 list-make-bg">
                                    <h6>Make a list</h6>
                                    <p>Shop faster now</p>
                                    <div className="home-list-img">
                                        <Image src={require("../assets/images/list.svg")} alt='listing'/>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> 
                    <div className="col-md-12 col-lg-9">
                        {/* <div id="hero-sliderSlidesOnly" className="carousel slide home_slider" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#hero-sliderSlidesOnly" data-slide-to="0" className="active"></li>
                                <li data-target="#hero-sliderSlidesOnly" data-slide-to="1"></li>
                                <li data-target="#hero-sliderSlidesOnly" data-slide-to="2"></li>
                                <li data-target="#hero-sliderSlidesOnly" data-slide-to="3"></li>
                                <li data-target="#hero-sliderSlidesOnly" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image className="d-block w-100" src={require("../assets/images/slider1.jpg")} alt="slider1.jpg"/>
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={require("../assets/images/slider2.jpg")} alt="slider2.jpg"/>
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={require("../assets/images/slider1.jpg")} alt="slider1.jpg"/>
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={require("../assets/images/slider2.jpg")} alt="slider2.jpg"/>
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={require("../assets/images/slider1.jpg")} alt="slider1.jpg"/>
                                </div>
                            </div>
                        </div> */}
                        <Swiper
                            modules={[Navigation,Autoplay, Pagination]}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                              }}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            className="carousel slide home_slider"
                            >
                            <SwiperSlide>
                                <Image className="d-block w-100 carousel-img" src={require("../assets/images/slider1.jpg")} alt="slider1.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className="d-block w-100 carousel-img" src={require("../assets/images/slider2.jpg")} alt="slider2.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className="d-block w-100 carousel-img" src={require("../assets/images/slider1.jpg")} alt="slider1.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className="d-block w-100 carousel-img" src={require("../assets/images/slider2.jpg")} alt="slider2.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className="d-block w-100 carousel-img" src={require("../assets/images/slider1.jpg")} alt="slider1.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className="d-block w-100 carousel-img" src={require("../assets/images/slider2.jpg")} alt="slider2.jpg"/>
                            </SwiperSlide>
                        </Swiper>
                        {/* <div id="hero-sliderSlidesOnly" className="carousel slide home_slider" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#hero-sliderIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#hero-sliderIndicators" data-slide-to="1"></li>
                                <li data-target="#hero-sliderIndicators" data-slide-to="2"></li>
                                <li data-target="#hero-sliderIndicators" data-slide-to="3"></li>
                                <li data-target="#hero-sliderIndicators" data-slide-to="4"></li>
                                <li data-target="#hero-sliderIndicators" data-slide-to="4"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="assets/images/slider1.jpg" alt="slider1.jpg">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/images/slider2.jpg" alt="slider2.jpg">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/images/slider1.jpg" alt="slider1.jpg">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/images/slider2.jpg" alt="slider2.jpg">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/images/slider1.jpg" alt="slider1.jpg">
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-12 col-lg-3 mobilehero-view mt-3">
                        <div className="hero-content text-center">
                            <div className="row">
                                <div className="col-6 col-md-6">
                                    <a href="refer_earn.html">
                                        <div className="box-outline refer-bg">
                                            <h6>Refer &amp; Earn</h6>
                                            <p>Invite a friend now</p>
                                            <div className="home-list-img">
                                                <Image src={require("../assets/images/refer-money.svg")} alt='money'/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 col-md-6">
                                    <a href="make_list.html">
                                        <div className="box-outline mt-4 list-make-bg">
                                            <h6>Make a list</h6>
                                            <p>Shop faster now</p>
                                            <div className="home-list-img">
                                                <Image src={require("../assets/images/list.svg")} alt='money'/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
