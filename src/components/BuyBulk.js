import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';

export const BuyBulk = () => {

    const [bulk, setBulk] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchBulk = async () => {
        setLoading(true)
        const config = {
            method: 'get',
            url: "https://dev.pricepally.com/api/Product/get-buy-bulk-products?offset=0",
            headers: { 
                region: 'LG'
            }
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setBulk(data);
        console.log(data)
        setLoading(false)
    };

    useEffect(() => {
        fetchBulk()
    }, [])

    if(loading){
        return (
            <div className="gif-loader">
                <Image src='https://i.gifer.com/origin/e4/e439272bf16c2df6b43e480de9fb1810_w200.gif' alt='loader' width={200} height={200} />
            </div>
        )
    }

  return (
    <div>
        <p><span className='fw-bold'>{bulk.length}</span> Available Products</p>        
        <div className='products-display'>
        {
            bulk.length > 0? bulk.slice(0,12).map((item, index) => {
                return (
                        <div className="pally-inner " key={index}>
                            <div className="products-img-wrapper  mb-3 pointer">
                                <a href="product_detail.html">
                                    <div className="heart-icon">
                                        <span className="material-icons">
                                            <MdFavoriteBorder/>
                                        </span>
                                    </div>
                                </a>
                                <Image src={item.product_images[0].imagePath} alt="Product-img1" width={"300"} height={"180"} className='w-100 h-100'/>
                            </div>

                            <div className="pally-content">
                                <a href="#" className="inner-head">
                                    <h5 className="mb-2">{item.product_title} </h5>
                                </a>
                                <a href="#" className="red-bg">
                                    <span className="material-icons-outlined">
                                    <BsArrowUp/>
                                    </span>9% | <span className="clr-gr">In Season</span></a>
                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦{item.product_price} <small>per
                                        unit</small></h5>
                                <h6 className="mb-2">Unit Available : {item.unit_available}</h6>
                                {/* <ul className="list-unstyled pallylist-bg mb-2">
                                    <li className="d-inline-block pally-left">
                                        <Image class="list-img" src={require("../assets/images/list-img1.jpg")} alt="list-img1"/>
                                    </li>
                                    <li class="d-inline-block pally-left">
                                        <Image class="list-img" src={require("../assets/images/list-img3.jpg")} alt="list-img2"/>
                                    </li>
                                    <li class="d-inline-block pally-left">
                                        <Image class="list-img" src={require("../assets/images/list-img3.jpg")} alt="list-img3"/>
                                    </li>
                                    <li class="d-inline-block pally-left">
                                        <Image class="list-img" src={require("../assets/images/list-img1.jpg")} alt="list-img1"/>
                                    </li>
                                    <li class="d-inline-block">
                                        <small>2 slots left</small>
                                    </li>
                                </ul> */}
                                <a href="#" className='text-decoration-none'>
                                    <button type="button" className="brown-btn px-4 text-uppercase btn-effects pally-slot-btn"><span>BUY SLOT</span></button>
                                </a>
                            </div>

                        </div>
                )
            })
            :
            "No product Available"
        }
        </div>

    </div>
  )
}
