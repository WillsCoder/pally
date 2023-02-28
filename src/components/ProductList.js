import { LoadMoreBtn } from '@/assets/Reusble/LoadMore'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'

export const ProductList = ({product}) => {

    const [isCompleted, setIsCompleted] = useState(false)
    const [count, setCount] = useState(12)
    const [loading, setLoading] = useState(false)

    const LoadMore = () => {
        setCount(count + 12)
        if (count >= product.length) {
          setIsCompleted(true)
        } else {
          setIsCompleted(false)
        }
      }
    const DelayLoad = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        setTimeout(() => {
            LoadMore()
        }, 2200);
    }
  return (
    <div>
        <div className='products-display'>
            {
                product.length > 0? product.slice(0, count).map((item, index) => {
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
        {
            loading? 
            <div className="gif-loader">
                <Image src='https://i.gifer.com/origin/e4/e439272bf16c2df6b43e480de9fb1810_w200.gif' alt='loader' width={200} height={200} />
            </div>
            :
            ''
        }
        {isCompleted ? '': (
          <LoadMoreBtn LoadMore={DelayLoad} />)}
          {/* for mobile */}
        <div className='products-display d-lg-none'>
        {
            product.length > 0? product.map((item, index) => {
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
