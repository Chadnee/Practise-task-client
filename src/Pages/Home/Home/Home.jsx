import React from 'react';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import About from './About/About';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner></Banner>
            <Product></Product>
            <About></About>
        </div>
    );
};

export default Home;