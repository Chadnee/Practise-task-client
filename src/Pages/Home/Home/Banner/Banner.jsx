import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?t=st=1716795376~exp=1716798976~hmac=5a61a82463b18a3fbf63c90702d00a745cebd37c6998ed06209302761f9364d1&w=996)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Order Product</h1>
      <p className="mb-5">Get 50% discount on your favourite dish , poducts & necessary households and order from your nearest place for getting the hottest offer of the year</p>
      <button className="bg-blue-900 p-3 font-semibold rounded-xl">View review</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;