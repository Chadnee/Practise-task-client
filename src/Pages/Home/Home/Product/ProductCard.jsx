import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { FaCartPlus, FaHouseCircleCheck } from "react-icons/fa6";
import axios from 'axios';

const ProductCard = ({ item }) => {
  
    const {_id, image, name, price, category, quality, ratings} = item

    const [rating, setRating] = useState(0)

    const handleAddedCart =(product) =>{
        const orderItem = { name, productId:_id, image, price, category, quality}
        console.log(orderItem)
        axios.post("http://localhost:5173/carts")
        .then(res => console.log(res.data))
    
    
    }
    
    const per = parseInt((price/((price+200)-price))*100)
  return (
    <Link  className=''>
    <div className="card bg-slate-100 rounded-none h-[430px] mb-4">
      <figure className="">
        <img src={image}  className="w-full h-[200px] " />
      </figure>
      <Link className="absolute right-3 top-2"> 
        <button className="flex items-center btn bg-sky-700 text-white btn-sm text-[15px]">Buy</button>
      </Link>
      <div className="card-body -ml-4 lg:ml-2 font-serif items-start ">
        <h2 className=" font-bold text-start">{name}| {category}</h2>
        
        <span className="font-[strike] text-[18px] "><del className="text-slate-500">${price+200}</del><span className="pl-1 text-teal-600">-{per}%</span></span>
        <span></span>
        <p className="grid grid-cols-2 items-center justify-between gap-8">
        <span className="text-start font-[strike] text-[18px] ">${price} </span>
          <span className='text-amber-500 flex items-center'><FaHouseCircleCheck className="text-xl"></FaHouseCircleCheck><span> {quality}</span></span>
          
        </p>
        <div className="card-actions mt-3  ml-3">
          <button  className="btn btn-sm bg-sky-700 text-white">Add To Cart<FaCartPlus ></FaCartPlus></button>
        </div>
      </div>
    </div>
   
  </Link>
    );
};

export default ProductCard;