import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import styles from "../assets/css/style.css"
import style from "../assets/css/stylebk.css"
import Image from "next/image";

export const MobileApp = () => {
  return (
    <div>
        <section className="download-wrapper  ml-2 mr-2 d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="download-content">
                            <h3>Download the New Pricepally Mobile App </h3>
                            <ul className="list-unstyled">
                                <li className="d-inline-block">
                                    <a href="#">
                                        <Image src={require("../assets/images/appstore.png")} alt="appstore"/>
                                    </a>
                                </li>
                                <li className="d-inline-block">
                                    <a href="#">
                                        <Image src={require("../assets/images/playstore.png")} alt="appstore"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="download-img">
                            <Image src={require("../assets/images/download_mobile.png")} alt="download-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="download-bottom-bg  ml-2 mr-2 d-none d-lg-block">
            <div className="container">
                <div className="row m-auto">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-3 mt-2">
                                <Image src={require("../assets/images/dedicated-icon.svg")} alt='icons' width={60} height={60}/>
                            </div>
                            <div className="col-lg-9">
                                <h4>Dedicated Service</h4>
                                <p>We are committed to serve you the best products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-1">
                        <div className="row">
                            <div className="col-lg-3 mt-2">
                                <Image src={require("../assets/images/return_icon.svg")} alt='icons' width={60} height={60}/>
                            </div>
                            <div className="col-lg-9">
                                <h4>Free Return</h4>
                                <p>We stand behind what we serve you</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-1">
                        <div className="row">
                            <div className="col-lg-3 mt-2">
                                <Image src={require("../assets/images/online-icon.png")} alt='icons' width={60} height={60}/>
                            </div>
                            <div className="col-lg-9">
                                <h4>Online 24/7</h4>
                                <p>Call +2347045000137</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
