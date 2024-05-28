import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UseProduct = () => {
       
    const {refetch, data: product = []} = useQuery({
        queryKey:["product"],
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/products');
            return(res.data);
        }

       
    })

    return [product, refetch]
};

export default UseProduct;