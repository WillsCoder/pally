import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdLockOutline, MdOutlineAccountCircle, MdOutlineErrorOutline, MdOutlineHome, MdOutlineLocationCity, MdOutlineLocationOn, MdSettingsCell } from 'react-icons/md'
import { HiOutlineShoppingCart, HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsBoxArrowInRight, BsSearch, BsShareFill, BsThreeDots } from 'react-icons/bs'
import { FaUserCircle, FaWallet } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoNotifications } from 'react-icons/io5'
import styles from "../assets/css/style.css"
import style from "../assets/css/stylebk.css"
import Image from "next/image";

export const Header = () => {

    const [more, setMore] = useState(false)
    const [account, setAccount] = useState(false)

    const CloseDrop = () => {
        setTimeout(() => {
            setMore(false)
        }, 500);
    }
    const CloseAccount = () => {
        setTimeout(() => {
            setAccount(false)
        }, 500);
    }

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

  return (
    <div>
        <div className="desktop-header">
            <header>
                <div className="navigation-wrap  start-header start-style ">
                    <div className="container">
                        <div className="row py-2 justify-content-between">
                            <div className="col-4 col-sm-5 col-md-5">
                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-block">
                                        <a className="navbar-brand" href="index.html" target="_blank">
                                            <Image src={require("../assets/images/logo.png")} alt='logo' width={50}/>
                                        </a>
                                    </li>
                                    <li className="d-inline-block">
                                        <div className="search-container">
                                            <form>
                                                <div className="outer_search">
                                                    <div className="saerch-bar"  id="search_bars">
                                                        <BsSearch className="pe-1"/>
                                                        <input type="text" placeholder="Search Food Items or Users" name="search"/>
                                                    </div>
                                                    <button className="yellow-bg">SEARCH</button>
                                                </div>
                                                {/* <div className="search-dropdown"  id="scrolling">
                                                    <div className="search-items">
                                                        <h6 className="grey-text">FOOD ITEMS</h6>
                                                        <ul className="list-unstyled mb-3">
                                                            <li className="d-inline-block"><img className="seaarch-img" src="assets/images/search-img1.jpg" alt="search-img1"/>
                                                            </li>
                                                            <li className="d-inline-block">
                                                                <h5>Tuwo Rice (25kg)</h5>
                                                            </li>
                                                        </ul>
                                                        <ul className="list-unstyled mb-3">
                                                            <li className="d-inline-block"><img className="seaarch-img" src="assets/images/search-img2.jpg" alt="search-img1"/>
                                                            </li>
                                                            <li className="d-inline-block">
                                                                <h5>Tuwo Rice (50kg)</h5>
                                                            </li>
                                                        </ul>
                                                        <ul className="list-unstyled mb-3">
                                                            <li className="d-inline-block"><img className="seaarch-img" src="assets/images/search-img1.jpg" alt="search-img1"/>
                                                            </li>
                                                            <li className="d-inline-block">
                                                                <h5>Tuwo Rice (25kg)</h5>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div className="search-users">
                                                        <h6 className="grey-text">Users</h6>

                                                        <ul className="list-unstyled mb-3">
                                                            <li className="d-inline-block"><img className="seaarch-list" src="assets/images/list-img1.jpg" alt="search-img1"/>
                                                            </li>
                                                            <li className="d-inline-block">
                                                                <h5>Tumininu Tayo</h5>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div> */}
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className=" col-8 col-sm-7 col-md-7 ">
                                <nav className="navbar navbar-expand-md navbar-light float-end text-center ">
                                    <div className="collapse navbar-collapse " id="navbarSupportedContent ">
                                        <ul className="navbar-nav drop-menu ">
                                            <li className="nav-item pl-4 pl-md-0 px-lg-2 px-xl-3 ml-0 ml-md-4 ">
                                                <a className="nav-link active " href="index.html ">
                                                    <p className="mb-0 "><MdOutlineHome className="material-icons-outlined"/></p>
                                                    <p className="mb-0 ">Home</p>
                                                </a>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 px-lg-2 px-xl-3 ml-0 ml-md-4 ">
                                                <a className="nav-link " href="# ">
                                                    <p className="mb-0 "><HiOutlineUsers className="material-icons-outlined"/></p>
                                                    <p className="mb-0 ">Users</p>
                                                </a>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 px-lg-2 px-xl-3 ml-0 ml-md-4 ">
                                                <a className="nav-link " href="# ">
                                                    <p className="mb-0 "><HiOutlineShoppingCart className="material-icons-outlined"/></p>
                                                    <p className="mb-0 ">Cart</p>
                                                </a>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 px-lg-2 px-xl-3 ml-0 ml-md-4 ">
                                                <a className="nav-link " href="# ">
                                                    <p className="mb-0 "><HiOutlineShoppingBag className="material-icons-outlined"/></p>
                                                    <p className="mb-0 ">Order</p>
                                                </a>
                                            </li>
                                            <li className="nav-item drop-menu pl-4 pl-md-0 px-lg-2 px-xl-3 ml-0 ml-md-4 ">
                                                <a href='#' className="nav-link " onMouseEnter={() => {setMore(true);}}
                                                    onMouseLeave={() => {setMore(false);}}
                                                    >
                                                    <p className="mb-0 "><BsThreeDots className="material-icons-outlined"/></p>
                                                    <p className="mb-0 ">More <RiArrowDropDownLine/></p>
                                                </a>
                                                {
                                                    more && (
                                                        <ul className='position-absolute more-drop' onMouseEnter={() => {setMore(true);}} onMouseLeave={CloseDrop}>
                                                            <li className="nav-item pl-4 pe-md-4 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center"> <FaWallet className="material-icons me-3"/> Wallet </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center"> <IoNotifications className="material-icons me-3"/> Notifications </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center"> <BsShareFill className="material-icons me-3"/> Refer and Earn </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center "> <span className="material-icons me-3">
                                                                    <MdFavoriteBorder/>
                                                                    </span>Saved Products </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center"> <span className="material-icons me-3 ">
                                                                    <MdOutlineErrorOutline/>
                                                                    </span>Frequently Asked Questions </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center"> <span className="material-icons me-3 ">
                                                                    <MdSettingsCell/>
                                                                    </span>Contact Admin </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link d-flex align-items-center "> <span className="material-icons me-3">
                                                                    <MdOutlineLocationCity/>
                                                                    </span>Change City</a>
                                                            </li>
                                                        </ul>
                                                    )
                                                }
                                            </li>

                                            <li className="nav-item drop-menu pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                <a href='#' className="nav-link " onMouseEnter={() => {setAccount(true);}} onMouseLeave={() => {setAccount(false);}}>
                                                    <p className="mb-0 "><FaUserCircle className="material-icons-outlined"/></p>
                                                    <p className="mb-0 ">My Account <RiArrowDropDownLine/></p>
                                                </a>
                                                {
                                                    account && (
                                                        <ul className='position-absolute more-drop p-0'  onMouseEnter={() => {setAccount(true);}} onMouseLeave={CloseAccount}>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link "> <span className="material-icons-outlined ">
                                                                <MdOutlineAccountCircle/>
                                                                </span> Profile </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link "> <span className="material-icons-outlined ">
                                                                    <MdOutlineLocationOn/>
                                                                    </span> Manage Address </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link "> <span className="material-icons-outlined ">
                                                                    <MdLockOutline/>
                                                                    </span> Change Password </a>
                                                            </li>
                                                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                                <a href='#' className="nav-link "> <span className="material-icons-outlined ">
                                                                    <BsBoxArrowInRight/>
                                                                    </span>Logout </a>
                                                            </li>

                                                        </ul>
                                                    )
                                                }
                                            </li>
                                           
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
        {/* mobile header */}
        <section className="mobile-header">
            <div className="container">
                <div className="d-flex justify-content-between mb-3">
                    <div className=" justify-content-start">
                        <Image className="mobile-logo" src={require("../assets/images/main-logo.svg")} alt="mobile-logo" height={45}/>
                    </div>
                    <div className=" ml-auto justify-content-end">
                        <Image className="profile-img" src={require("../assets/images/profile_img.jpg")} alt="profile-img"/>
                    </div>
                </div>                
            </div>
            <div className="mobile-search">
                <div className="container">
                    <div className="search-container" data-toggle="modal" data-target="#search-modal">
                        <form>
                            <div className="saerch-bar">
                                <div>
                                    <BsSearch className="pe-2 fs-3"/>
                                    <input type="text" placeholder="Search " name="search"/>
                                </div>
                                {/* <!-- <button className="yellow-bg">SEARCH</button> --> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

