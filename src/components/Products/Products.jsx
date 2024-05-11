import React, { useEffect, useState } from 'react';
import ProductsMaping from './ProductsMaping';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const [totalItems, setTotalItems] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?limit=${itemsPerPage}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[itemsPerPage])

    // check length 
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res=>res.json())
        .then(data=>setTotalItems(data))
    },[])


    const handleLoadClick = () =>{
        setItemsPerPage(itemsPerPage+10);
    }
    return (
        <div className='md:mx-10 mx-5'>
            {/* header  */}
            <div className='mb-3'>
                <h1 className=' font-bold text-3xl md:text-4xl text-[var(--mainColor)]'>More Products</h1>  
            </div>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
                {
                    products.map(product=><ProductsMaping
                    key={product._id}
                    product={product}
                    ></ProductsMaping>)
                }
            </div>

            {/* button  */}

            {
                totalItems.length < itemsPerPage ? '' : <div className='my-6 text-center'>
                <button onClick={handleLoadClick} className='py-2 px-16 border-[1px] border-[var(--mainColor)] text-[15px] text-[var(--mainColor)] rounded-sm hover:bg-[var(--yellowColor)] duration-300 hover:border-[var(--yellowColor)]'>Load More</button>
            </div>
            }
        </div>
    );
};

export default Products;