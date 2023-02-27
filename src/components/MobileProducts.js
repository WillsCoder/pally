import React, { useRef, useState, useEffect } from 'react'
import { BsFilter } from 'react-icons/bs'
import { BuyBulk } from './BuyBulk';
import { BuyBulkMobile } from './BuyBulkMobile';
import { BuyRetailMobile } from './BuyRetailMobile';

export const MobileProducts = () => {

    const [open, setOpen] = useState(1);
    const [scrolls, setScrolls] = useState({})

    const handleOpen = (value) => {
        setOpen(open === value ? value : value);
    };
    const activeStyle = {
        borderBottom: "4px solid #B3561B",
        color: "#B3561B"
    }
    const fixed = {
        position: "fixed",
        top: 0,
        backgroundColor: "white",
        paddingRight: "30px",
        zIndex: 100000
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 600) {
            setScrolls(fixed)
          } else {
            setScrolls(undefined)
          }
        })
      })

  return (
    <div className='d-lg-none'>
        <div className="container">
            <div className="top-0 w-100" style={scrolls}>
                <div  className="d-flex" >
                    <div className="w-100 d-flex justify-content-end">
                        <p className="mb-0" data-toggle="modal" data-target="#fillter-modal"> <span className="material-icons align-top pe-2">
                                <BsFilter className='fs-3'/>
                            </span>Filter</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                            <li
                                className="nav-item px-3"
                                style={(open === 1 ? activeStyle : undefined)}
                                onClick={() => handleOpen(1)}
                            >
                                Buy Bulk
                            </li>
                            <li
                                className="nav-item px-3"
                                style={(open === 2 ? activeStyle : undefined)}
                                onClick={() => handleOpen(2)}
                            >
                                <span className=''>Buy Retail</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <ul className="list-unstyled mb-0 select-bg float-right d-none d-lg-block">
                            <li className="d-inline-block">
                                <div className="form-group mb-0">
                                    <select className="form-control">
                                        <option>Categories</option>
                                        <option>Soup & stew ingredients</option>
                                        <option>Foodstuffs</option>
                                        <option>Meat, Poultry & Seafood</option>
                                    </select>
                                </div>
                            </li>
                            <li className="d-inline-block">
                                <div className="form-group mb-0">
                                    <select className="form-control">
                                        <option>Sub Categories</option>
                                        <option>Grains
                                        </option>
                                        <option>Tubers & Roots
                                        </option>
                                    </select>
                                </div>
                            </li>
                            <li className="d-inline-block">
                                <div className="form-group mb-0">
                                    <select className="form-control">
                                        <option>Sort By: Price (Low to High)</option>
                                        <option>Price (Low to High)</option>
                                        <option>Price (High to Low)</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <hr className="border-bottom"/> */}
            </div>
        </div>
        <div className='mt-4 px-2 mobile-display-products'>
            {
                open === 1 ? <div className='container'><BuyBulkMobile/></div> : ""
            }
            {
                open === 2 ? <div className='container'><BuyRetailMobile/></div> : ""
            }
        </div>
    </div>
  )
}
