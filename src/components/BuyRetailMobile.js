import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';

export const BuyRetailMobile = () => {

    const [total, setTotal] = useState([]);
    const [offset1, setOffset1] = useState([])
    const [offset2, setOffset2] = useState([])
    const [offset3, setOffset3] = useState([])
    const [offset4, setOffset4] = useState([])
    const [offset5, setOffset5] = useState([])
    const [offset6, setOffset6] = useState([])
    const [offset7, setOffset7] = useState([])
    const [offset8, setOffset8] = useState([])
    const [offset9, setOffset9] = useState([])
    const [offset10, setOffset10] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchTotal = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=0",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data;
        setTotal(data);
        setLoading(false)
    };
    const fetchBulk = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=0",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset1(data);
        setLoading(false)
    };
    const fetchBulk2 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=20",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset2(data);
        setLoading(false)
    };
    const fetchBulk3 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=40",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset3(data);
        setLoading(false)
    };
    const fetchBulk4 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=60",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset4(data);
        setLoading(false)
    };
    const fetchBulk5 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=80",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset5(data);
        setLoading(false)
    };
    const fetchBulk6 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=100",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset6(data);
        setLoading(false)
    };
    const fetchBulk7 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=120",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset7(data);
        setLoading(false)
    };
    const fetchBulk8 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=140",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset8(data);
        setLoading(false)
    };
    const fetchBulk9 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=160",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset9(data);
        setLoading(false)
    };
    const fetchBulk10 = async () => {
        setLoading(true)

        const config = {
            method: 'post',
            url: "https://dev.pricepally.com/api/Product/GetRecommendedProducts?offset=180",
            headers: { 
                region: 'LG',
            },
            body: {
                offset: 0,// This is the body part
                user_id: "x"
             },
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset10(data);
        setLoading(false)
    };

    const bulk = [...offset1,...offset2,...offset3,...offset4,...offset5,...offset6,...offset7,...offset8,...offset9,...offset10]
    useEffect(() => {
        fetchTotal()
        fetchBulk()
        fetchBulk2()
        fetchBulk3()
        fetchBulk4()
        fetchBulk5()
        fetchBulk6()
        fetchBulk7()
        fetchBulk8()
        fetchBulk9()
        fetchBulk10()
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
        <p><span className='fw-bold'>{total?.total_products}</span> Available Products</p>
        
        <div className='products-display'>
        {
            bulk.length > 0? bulk.map((item, index) => {
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
