import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecommendedViewMoreDetails from './RecommendedViewMoreDetails';

const RecommendedViewMore = () => {
    const loadViewMore = useLoaderData();

    return (
        <section className='grid grid-cols-2 md:grid-cols-6 md:mx-10 mx-5 my-5 gap-5'>
            {
                loadViewMore.map(reProduct=><RecommendedViewMoreDetails
                key={reProduct._id}
                reProduct={reProduct}
                >
                    
                </RecommendedViewMoreDetails>)
            }

        </section>
    );
};

export default RecommendedViewMore;