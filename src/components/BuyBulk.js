import { LoadMoreBtn } from '@/assets/Reusble/LoadMore';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { ProductList } from './ProductList';

export const BuyBulk = () => {

    const [offset1, setOffset1] = useState([])
    const [offset2, setOffset2] = useState([])
    const [offset3, setOffset3] = useState([])
    const [offset4, setOffset4] = useState([])
    const [offset5, setOffset5] = useState([])
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
        setOffset1(data);
        console.log(data)
        setLoading(false)
    };
    const fetchBulk2 = async () => {
        setLoading(true)
        const config = {
            method: 'get',
            url: "https://dev.pricepally.com/api/Product/get-buy-bulk-products?offset=20",
            headers: { 
                region: 'LG'
            }
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset2(data);
        setLoading(false)
    };
    const fetchBulk3 = async () => {
        setLoading(true)
        const config = {
            method: 'get',
            url: "https://dev.pricepally.com/api/Product/get-buy-bulk-products?offset=40",
            headers: { 
                region: 'LG'
            }
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset3(data);
        setLoading(false)
    };
    const fetchBulk4 = async () => {
        setLoading(true)
        const config = {
            method: 'get',
            url: "https://dev.pricepally.com/api/Product/get-buy-bulk-products?offset=60",
            headers: { 
                region: 'LG'
            }
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset4(data);
        setLoading(false)
    };
    const fetchBulk5 = async () => {
        setLoading(true)
        const config = {
            method: 'get',
            url: "https://dev.pricepally.com/api/Product/get-buy-bulk-products?offset=80",
            headers: { 
                region: 'LG'
            }
        }
        const response = await axios(config);
        const data = response.data.data.context;
        setOffset5(data);
        setLoading(false)
    };
    const bulks = [...offset1,...offset2,...offset3,...offset4,...offset5]

    useEffect(() => {
        fetchBulk()
        fetchBulk2()
        fetchBulk3()
        fetchBulk4()
        fetchBulk5()
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
        <p><span className='fw-bold'>{bulks.length}</span> Available Products</p>   
        <ProductList product={bulks} />    
    </div>
  )
}
