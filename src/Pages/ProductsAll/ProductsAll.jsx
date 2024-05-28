import React from 'react';
import UseProduct from '../Hooks/UseProduct';
import ProductCard from '../Home/Home/Product/ProductCard';

const ProductsAll = () => {

    const [product] = UseProduct()

    return (
        <div className='mx-12'>
            <div>
               <p className='font-serif text-4xl pt-24 mb-4'>All products</p>
            </div>
            <div className=' md:grid lg:grid md:grid-cols-5 lg:grid-cols-5 mb-14 gap-3 justify-center items-center '>
            {
                product.map(item => <ProductCard 
                key = {item._id} item = {item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default ProductsAll;