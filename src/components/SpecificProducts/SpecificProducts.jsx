import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import SpecificProductShowing from './SpecificProductShowing';

const SpecificProducts = () => {
    const id = useParams();
    const [specificProducts, setSpecificProducts] = useState([]);

    const url = `http://localhost:5000/products/${id.id}`; 
    useEffect(()=>{fetch(url)
        .then(res => res.json())
        .then(data => setSpecificProducts(data))
    },[])
    console.log(specificProducts);
    
    return (
        <section className='grid grid-cols-3 gap-5'>  
            <div className=''>
                <h1>custom choice products and price</h1>
            </div>
            <div className=' col-span-2'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:mx-10 mx-5 my-5'>
                    {
                        specificProducts.length == 0 ?  <div className='fixed top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]'>
                        <HashLoader
                    color={"#ffd656"}
                    loading={true}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                    </div> : specificProducts.map(product=><SpecificProductShowing
                        key={product._id}
                        product={product}
                    ></SpecificProductShowing>)
                    }
                </div>
            </div>
        </section>
    );
};

export default SpecificProducts;