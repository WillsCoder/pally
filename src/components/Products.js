import React, { useState } from 'react'
import styles from "../assets/css/style.css"
import style from "../assets/css/stylebk.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BuyBulk } from './BuyBulk';
import { BuyRetail } from './BuyRetail';


export const Products = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? value : value);
    };
    const activeStyle = {
        borderBottom: "4px solid #B3561B",
        color: "#B3561B"
    }

  return (
    <div className='py-lg-5'>
        <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                            <li
                                className="nav-item px-5 fs-5"
                                style={(open === 1 ? activeStyle : undefined)}
                                onClick={() => handleOpen(1)}
                            >
                                Buy Bulk
                            </li>
                            <li
                                className="nav-item px-5 fs-5"
                                style={(open === 2 ? activeStyle : undefined)}
                                onClick={() => handleOpen(2)}
                            >
                                <span className=''>Buy Retail</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <form className="form-inline select-bg row float-right">
                            <div className="form-group mb-0 col-4">
                                <select className="form-control border-right-0">
                                    <option>Categories</option>
                                    <option>Soup & stew ingredients</option>
                                    <option>Foodstuffs</option>
                                    <option>Meat, Poultry & Seafood</option>
                                </select>
                            </div>
                            <div className="form-group mb-0 col-4">
                                <select className="form-control  border-right-0">
                                    <option>Sub Categories</option>
                                    <option>Grains</option>
                                    <option>Tubers & Roots
                                    </option>
                                </select>
                            </div>
                            <div className="form-group mb-0 col-4">
                                <select className="form-control">
                                    <option>Sort By: Price (Low to High)</option>
                                    <option>Price (Low to High)</option>
                                    <option>Price (High to Low)</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="border-bottom product-border"></hr>
                <div className='mt-4'>
                    {
                        open === 1 ? <BuyBulk/> : ""
                    }
                    {
                        open === 2 ? <BuyRetail/> : ""
                    }
                </div>
            </div>
        </section>
    </div>
  )
}
