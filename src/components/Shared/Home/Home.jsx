import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link, useLoaderData } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import './Home.css';

// carousel 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Support from '../../Support/Support';
import RecommandedItems from '../../Recommanded_Items/RecommandedItems';
import Products from '../../Products/Products';


const Home = () => {
    const loadCategoryData = useLoaderData();
    
    
    return (
        <div>


            <main className='grid md:grid-cols-4 gap-6 md:mx-10 mx-5 pt-5'>
                {/* categories  */}
                <section className="hidden items-center md:grid category-section w-full rounded-md bg-[var(--yellowColor)] py-2">
                    {
                        loadCategoryData.map(category=><div
                            key={category._id}
                        >

                        <Link to={`products/${category.category_id}`}>
                        <h2 className='flex justify-between py-2 px-5 text-sm rounded-sm text-[var(--mainColor)] hover:bg-[var(--mainColor)] font-medium hover:text-[var(--yellowColor)] duration-300 items-center'><div>{category.category_name}</div><div><FiArrowRight/></div></h2>
                        </Link>
                         

                        </div>)
                    }
                </section>

                {/* banner section  */}
                <section className="carousel-banner grid col-span-3">
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='w-full rounded-md' src="../../../../public/cover1.jpg" alt="" /></SwiperSlide>
                    {/* npm lazy load image  */}
                    <SwiperSlide><LazyLoadImage className='w-full rounded-md' src="../../../../public/cover2.jpg" delayTime={300} alt="" /></SwiperSlide>
                    <SwiperSlide><LazyLoadImage className='w-full rounded-md' src="../../../../public/cover3.jpg" delayTime={500} alt="" /></SwiperSlide>             
                </Swiper>    
                </section>
            </main>

            {/* *****************
            *****************
            *****************
            ***************** */}
            {/* support component */}
            <Support></Support>

            {/* *****************
            *****************
            *****************
            ***************** */}
            {/* recommended products component */}
            <RecommandedItems></RecommandedItems>

            {/* *****************
            *****************
            *****************
            ***************** */}
            {/* Products component */}
            <Products></Products>


        </div>
    );
};

export default Home;