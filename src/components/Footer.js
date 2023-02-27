import React from 'react'
import { MdOutlineHome } from 'react-icons/md'
import { HiOutlineShoppingCart, HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsSearch, BsThreeDots } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const Footer = () => {
  return (
    <div>
        <footer className="ml-2 mr-2 footer-wrapper d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <h5>Categories</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Food Stuff</a></li>
                                    <li><a href="#">Packaged Food</a></li>
                                    <li><a href="#">Fruits & Nuts</a></li>
                                    <li><a href="#">Meat, Poultry & Sea Food</a></li>
                                    <li><a href="#">Oils & Spices</a></li>
                                    <li><a href="#">Soup & Stew Ingredients</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5>Company</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Refer & Earn</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Make a List</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5>Policy</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">COVID 19 Policy</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="white-head">Join our mailing list & receive exclusives</h5>
                        <div className="form-group">
                            <input type="text" name="" placeholder="First Name" className="form-control"/>
                            <input type="text" name="" placeholder="Last Name" className="form-control"/>
                        </div>
                        <div className="input-group mb-3 join-bg">
                            <input type="text" className="form-control" placeholder="Enter your email address"/>
                            <div className="input-group-append join-btn">
                               <a href="#" className='text-decoration-none'> <span className="input-group-text">Join List</span> </a>
                            </div>
                        </div>
                        <h6>Connect with us on</h6>
                        <ul className="list-unstyled social-icons">
                            {/* <li className="d-inline-block">
                                <a href="#">
                                    <Image src={require("../assets/images/facebook.svg")} width={25}/>
                                </a>
                                <a href="#">
                                    <Image src={require("../assets/images/instagram.svg")} width={25}/>
                                </a>
                                <a href="#">
                                    <Image src={require("../assets/images/twitter.svg")} width={25}/>
                                </a>
                                <a href="#">
                                    <Image src={require("../assets/images/youtube.svg")} width={25}/>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <p className="text-center"><small>© 2021 Pricepally All Rights Reserved </small></p>
            </div>
        </footer>
        {/* mobile footer */}
        <footer className="d-block d-lg-none mobile-footer">
            <div className="container">
                <div className="d-flex text-center justify-content-evenly">
                    <div className="mobile-icon">
                        <a className="nav-link active" href="index.html">
                            <p className="mb-0"><MdOutlineHome className="material-icons-outlined"/></p>
                            <p className="mb-0">Home</p>
                        </a>
                    </div>
                    <div className="mobile-icon">
                        <a className="nav-link" href="my_account_profile.html">
                            <p className="mb-0"><HiOutlineUsers className="material-icons-outlined"/></p>
                            <p className="mb-0">Users</p>
                        </a>
                    </div>
                    <div className="mobile-icon">
                        <a className="nav-link" href="cart.html">
                            <p className="mb-0"><HiOutlineShoppingCart className="material-icons"/></p>
                            <p className="mb-0">Cart</p>
                        </a>
                    </div>
                    <div className="mobile-icon">
                        <a className="nav-link" href="orders.html">
                            <p className="mb-0"><HiOutlineShoppingBag className="material-icons"/></p>
                            <p className="mb-0">Orders</p>
                        </a>
                    </div>
                    <div className="mobile-icon">
                        <a href="more.html" className="nav-link">

                            <p className="mb-0 more_ic"><CgMoreO/></p>
                            <p className="mb-0">More </p>
                            <span className="yellow_cir float-right">2</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
