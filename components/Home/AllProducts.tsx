'use client';

import { getAllProducts } from '@/Request/request';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

type Product = {
    id: number;
    title: string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
};

const AllProducts = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(true);

    console.log(products);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const products: Product[] = await getAllProducts();
                setProducts(products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div className='pt-16 pb-12'>
            <h1 className='text-center font-bold text-2xl'>All Products</h1>
            {loading ? (
                <div className='flex justify-center items-center mt-16'>
                    <Loader size={32} className='animate-spin' />
                </div>
            ) : (
                <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProducts;
