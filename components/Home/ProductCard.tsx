'use client';

import { Product } from '@/typing'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { useToast } from '@/hooks/use-toast';


type Props={
    product:Product
}
const ProductCard = ({product}: Props) => {

    const num = Math.round(product.rating.rate)
    const ratingArray = new Array(num).fill(0);
    const {toast} = useToast()

    
    const dispatch = useDispatch();
    const addToCartHandler =(product:Product)=>{
      toast({
        description:"item Added to Cart",
        variant:'success', 
      })
      dispatch(addItem(product));
    }
  return (
    <div className='p-4'>
      
      {/* Image */}
      
      <div className='w-[200px] h-[150px]'>
        <Image src={product.image} alt={product.title} width={100} height={100} className='w-[80%] h-[80%] object-contain'/>
      </div>
      
      {/* Category */}

      <p className='mt-5 text-xs text-gray-600'>{product.category}</p>
      
      {/* Title */}
      
      <Link href={`/product/product-details/${product.id}`}>
      <h1 className='text-lg cursor-pointer hover:text-blue-900 transiton-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold'> {product.title}</h1></Link>
      
      {/* Rating */}
      
      <div className='flex items-center'>{ratingArray.map(()=>{
          return (<StarIcon key={Math.random() * 1000}
          size={16}
          fill='yellow'
          className='text-yellow-500'/>)
      })}</div>

       {/* Pricing */}
      <div className='flex mt-2 item space-x-2'>
        <p className='text-black text-base line-through font-semibold opacity-50'>{ `$${(product.price + 10).toExponential(2)}`}</p>
        <p className='text-black text-lg font-bold opacity-80'>${product.price}</p>
      </div>

      {/* Buttons */}
      <div className='mt-4 flex items-center space-x-2'>
        <Button onClick={()=>{
          addToCartHandler(product);
        }} size={"icon"}>
          <ShoppingBag size={18}/>
        </Button>
        <Button size={"icon"} className='bg-red-500'>
          <Heart/>
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
