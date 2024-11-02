import { Product } from '@/typing';
import { getJsPageSizeInKb } from 'next/dist/build/utils';
import React from 'react';

const ProductDetails = ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const singleProduct: Product = await getJsPageSizeInKb{id}
    console.log(singleProduct);

    return (
        <div>
            Product Details for ID: {id}
        </div>
    );
};

export default ProductDetails;

