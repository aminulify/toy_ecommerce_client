import React, { useEffect, useState } from 'react';
import { VscVerified } from "react-icons/vsc";
import RecommandedProductDetails from './RecommandedProductDetails';
import './RecommandedItems.css';
import BeatLoader from "react-spinners/BeatLoader";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const RecommandedItems = () => {
    const [recomandProducts, setRecommandProducts] = useState([]);
    // console.log(recomandProducts);

    useEffect(()=>{
        fetch('http://localhost:5000/recommanded_products')
        .then(res=>res.json())
        .then(data=>setRecommandProducts(data))
    },[])
    return (
        <div className='md:mx-10 mx-5 mb-5'>
            {/* header text  */}
            <div className='flex gap-1 items-center mb-3'>
                <h1 className=' font-bold text-3xl md:text-4xl text-[var(--mainColor)]'>Recommended Products</h1>
                <VscVerified className='text-4xl md:text-5xl text-[var(--yellowColor)]'/>
            </div>


            {/* carousel npm swiper js */}
            {/* carousel  */}
            <Swiper
        
        breakpoints={
            {
                 '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  '@1.00': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  '@1.50': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                  '@2.50':{
                    slidesPerView: 6,
                    spaceBetween: 10,
                  }
        }
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
        
        {
            recomandProducts.length===0 ? <div className='text-center'>
            {/* loader / snipper */}
            <BeatLoader
              color={"#ffd656"}
              loading={true}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
          /> 
        </div> : recomandProducts.map(product=><SwiperSlide><RecommandedProductDetails
                key={product._id}
                product={product}
            ></RecommandedProductDetails></SwiperSlide>) 
                
                }
        </div>

        {/* recomandProducts.map(product=><SwiperSlide><RecommandedProductDetails
                        key={product._id}
                        product={product}
                    ></RecommandedProductDetails></SwiperSlide>) */}
      </Swiper>
              

        </div>
    );
};

export default RecommandedItems;