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

export const Media = () => {
  return (
    <div>
        <section className="media-wrapper  ml-2 mr-2 d-none d-lg-block">
            <div className="container">
                <div id="media-bg" className="followers-bg mb-5">
                    <h4 className="text-center mb-4">Partners & Media</h4>
                    {/* <div class="owl-carousel owl-theme" id="media_partner">
                        <div class="item">
                            <a href="#">  <img class="media-img" src="assets/images/media-img1.png" alt="media-img1"> </a>
                        </div>
                        <div class="item">
                            <a href="#"> <img class="media-img" src="assets/images/media-img2.png" alt="media-img1"> </a>
                        </div>

                        <div class="item">
                            <a href="#"> <img class="media-img" src="assets/images/media-img3.png" alt="media-img1"> </a>
                            </div>
                            <div class="item">
                                <a href="#">  <img class="media-img" src="assets/images/media-img1.png" alt="media-img1"> </a>
                        </div>

                        <div class="item">
                            <a href="#"> <img class="media-img" src="assets/images/media-img2.png" alt="media-img1"> </a>
                        </div>

                        <div class="item">
                            <a href="#"> <img class="media-img" src="assets/images/media-img3.png" alt="media-img1"> </a>
                        </div>
                    </div> */}
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        // loopFillGroupWithBlank= {true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            reverseDirection: true,
                            }}
                        slidesPerView={5}
                        modules={[Navigation,Autoplay , Pagination]}
                        className=""
                        >
                        <SwiperSlide>
                            <div>
                                <a href="listing.html">
                                    <Image src={require("../assets/images/media-img1.png")} alt='media-image' className='media-img'/>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <a href="listing.html">
                                    <Image src={require("../assets/images/media-img2.png")} alt='media-image' className='media-img'/>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <a href="listing.html">
                                    <Image src={require("../assets/images/media-img3.png")} alt='media-image' className='media-img'/>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <a href="listing.html">
                                    <Image src={require("../assets/images/media-img1.png")} alt='media-image' className='media-img'/>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <a href="listing.html">
                                    <Image src={require("../assets/images/media-img2.png")} alt='media-image' className='media-img'/>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <a href="listing.html">
                                    <Image src={require("../assets/images/media-img3.png")} alt='media-image' className='media-img'/>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    </div>
  )
}
