import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const {register,handleSubmit,formState: { errors }, reset} = useForm()
    
      
    const onSubmit = async (data) =>{
        console.log(data)
        // const formData = new FormData();
        // formData.append("image", data.image)
        // formData.append("name", data.name)
        // formData.append("price", data.price)
        // formData.append("category", data.category)
        // formData.append("quality", data.quality)
        // formData.append("ratings", data.ratings)
        console.log(data)
        // axios.post('/http://localhost:5000/products', formData)
        // .then(res => {
        //     console.log(res.data)
        // })

        await fetch("/http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => res.json()).
        then((data)=> console.log(data))
        
    }
    return (
        <div className='h-full w-full mx-20 mt-20'>
            <p className='text-center font-serif text-3xl'>Add an Item</p>
            <div >
                <form onSubmit={handleSubmit(onSubmit)} className='pt-12 mx-20'>
                    <div className='lg:flex md:flex justify-center gap-6 w-full'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Product name</span>
                            </div>
                            <input type="text" {...register("name", { required: true})} placeholder="Product name" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="text" {...register("price", { required: true})} placeholder="product Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='flex w-full gap-6'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Quality</span>
                            </div>
                            <input type="text" {...register("quality", { required: true})} placeholder="Quality name " className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" {...register("category", { required: true})} placeholder="Category" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='flex w-full gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">image url</span>
                            </div>
                            <input type="text" {...register("image", { required: true})} placeholder="Type here" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Ratings</span>
                            </div>
                            <input type="text" {...register("ratings", { required: true})} placeholder="provide a ratings" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='text-center w-full'>
                    <input className='bg-sky-600 w-full rounded-lg text-white px-4 pb-1 mt-16 mb-20' type="submit" value="Add Item" />
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;