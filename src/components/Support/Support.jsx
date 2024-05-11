import React from 'react';

const Support = () => {
    return (
        <div className='grid grid-cols-2 gap-3 md:grid my-7 mx-5 md:mx-10 md:grid-cols-6 items-center py-4 px-8 bg-[var(--mainColor)] rounded-md'>
            <div className='flex gap-2 items-center text-[var(--yellowColor)]'>
                <img src="icon1.png" className='w-6 h-6 md:w-12 md:h-12' alt="" />
                <h2 className='md:text-[16px] text-[14px] leading-[25px]'>Unlimited Discount</h2>
            </div>
            <div className='flex gap-2 items-center text-[var(--yellowColor)]'>
                <img src="icon2.png" className='w-6 h-6 md:w-12 md:h-12' alt="" />
                <h2 className='md:text-[16px] text-[14px] leading-[25px]'>Easy Payment Method</h2>
            </div>
            <div className='flex gap-2 items-center text-[var(--yellowColor)]'>
                <img src="icon3.png" className='w-6 h-6 md:w-12 md:h-12' alt="" />
                <h2 className='md:text-[16px] text-[14px] leading-[25px]'>Secure Payment</h2>
            </div>
            <div className='flex gap-2 items-center text-[var(--yellowColor)]'>
                <img src="icon4.png" className='w-6 h-6 md:w-12 md:h-12' alt="" />
                <h2 className='md:text-[16px] text-[14px] leading-[25px]'>24/7 Customer Support</h2>
            </div>
            <div className='flex gap-2 items-center text-[var(--yellowColor)]'>
                <img src="icon5.png" className='w-6 h-6 md:w-12 md:h-12' alt="" />
                <h2 className='md:text-[16px] text-[14px] leading-[25px]'>Fast Delivery</h2>
            </div>
            <div className='flex gap-2 items-center text-[var(--yellowColor)]'>
                <img src="icon6.png" className='w-6 h-6 md:w-12 md:h-12' alt="" />
                <h2 className='md:text-[16px] text-[14px] leading-[25px]'>Free Delivery Fee</h2>
            </div>
        </div>
    );
};

export default Support;