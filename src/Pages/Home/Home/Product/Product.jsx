import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import UseProduct from '../../../Hooks/UseProduct';

const Product = () => {
    const [product] = UseProduct();
   
    return (
        <div>
            <div>
               <p className='font-serif text-4xl mt-10 mb-4'>Just for you</p>
            </div>
            <div className=' md:grid lg:grid md:grid-cols-5 lg:grid-cols-5 mb-14 gap-3 justify-center items-center '>
            {
                product.slice(0,10).map(item => <ProductCard 
                key = {item._id} item = {item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default Product;