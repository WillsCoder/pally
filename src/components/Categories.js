import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import styles from "../assets/css/style.css"
import style from "../assets/css/stylebk.css"
import Image from "next/image";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Categories = () => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

  return (
    <div>
        <section className="categoires_wrapper mt-3 mb-3  d-lg-block">
            <div className="container">
                <div id="categoires-bg">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-6">
                            <h4 className="heading">Categories</h4>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6 text-end">
                            <a href="#" className="text-uppercase brown-text viewall-btn">View All</a>
                        </div>
                    </div>
                    <div id="folloersSlider" className="dvslider mt-3 mt-lg-0">

                        {/* <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="">
                                    <a href="listing.html">
                                        <img src="assets/images/foodstuff-img.png">
                                    </a>
                                    </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="assets/images/packfood_img.png">
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="assets/images/fruits-img.png">
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="assets/images/packfood_img.png">
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="followers-inner">
                                    <a href="listing.html">
                                        <img src="assets/images/foodstuff-img.png">
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={3}
                            breakpoints={{
                                // when window width is >= 640px
                                1000: {
                                  slidesPerView: 4,
                                },
                              }}
                              navigation 
                            //   navigation={{
                            //     prevEl: ".swiper-button-prev",
                            //     nextEl: ".swiper-button-next",
                            //   }}
                              style={{
                                "--swiper-navigation-color": "wine",
                                "--swiper-navigation-size": "20px",
                              }}
                            className="carousel slide home_slider"
                            >
                            <SwiperSlide>
                                <div className="">
                                    <a href="listing.html">
                                        <Image src={require("../assets/images/foodstuff-img.png")} alt='category' className='cat-slide'/>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <a href="listing.html">
                                        <Image src={require("../assets/images/packfood_img.png")} alt='category' className='cat-slide'/>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <a href="listing.html">
                                        <Image src={require("../assets/images/fruits-img.png")} alt='category' className='cat-slide'/>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <a href="listing.html">
                                        <Image src={require("../assets/images/packfood_img.png")} alt='category' className='cat-slide'/>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <a href="listing.html">
                                        <Image src={require("../assets/images/foodstuff-img.png")} alt='category' className='cat-slide'/>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <a href="listing.html">
                                        <Image src={require("../assets/images/fruits-img.png")} alt='category' className='cat-slide'/>
                                    </a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}
