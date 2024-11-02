import { ShoppingBag } from 'lucide-react'
import React from 'react'

const ShoppinCartButton = () => {
  return (
    <div className='relative'>
        <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>6</span>
        <ShoppingBag cursor={"pointer"}/>
    </div>
  )
}

export default ShoppinCartButton
