import React from 'react';
import { IoIosStar } from "react-icons/io";
// import "./RecommandedProductDetails.css";
import { FaOpencart } from "react-icons/fa6";

const RecommendedViewMoreDetails = ({reProduct}) => {
    const {toyName, price, reviews, imageUrl} = reProduct;
    return (
        <div className='recommendedItems p-3 border rounded-md hover:shadow-lg duration-300'>
        <img src={imageUrl} loading='lazy' className='' alt="products images" />
        <h2 className='text-left text-[16px] mt-2 font-medium'>{toyName}</h2>
        <div className='flex justify-between'>
            <h3 className='text-lg text-[var(--mainColor)] font-medium'>${price} <del className="text-[12px] text-slate-400">{price*1.5}</del></h3>
            <div className='rating flex items-center gap-[1px] text-[var(--yellowColor)] text-[14px]'>
                <IoIosStar/>
                <h3>({reviews[0].rating})</h3>
            </div>
        </div>

        <button className='flex items-center gap-1 justify-center mt-1 text-[14px] bg-[var(--mainColor)] w-full py-1 rounded-sm text-[var(--yellowColor)] hover:text-[var(--mainColor)] hover:bg-[var(--yellowColor)] duration-300'><h2>Add To Cart</h2> <FaOpencart /></button>
    </div>
    );
};

export default RecommendedViewMoreDetails;