import { LoadMoreBtn } from '@/assets/Reusble/LoadMore';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { ProductList } from './ProductList';

export const BuyRetail = () => {

    const [total, setTotal] = useState([])
    const [loading, setLoading] = useState(false)
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
    const [isCompleted, setIsCompleted] = useState(false)
    const [count, setCount] = useState(12)

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
        <p><span className='fw-bold'>{total.total_products}</span> Available Products</p>
        <ProductList product={bulk} />    
    </div>
  )
}
