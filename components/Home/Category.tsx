'use client';

import { getAllCategory } from '@/Request/request';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await getAllCategory();
            setCategories(categoriesData);
        };
        fetchCategories();
    }, []);

    return (
        <div className='pt-16 pb-12'>
            <h1 className='text-center font-bold text-2xl'>Shop By Category</h1>
            <div className='mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {categories.map((category) => (
                    <div key={category} className='p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md'>
                        <h1 className='text-sm sm:text-base md:text-2xl capitalize font-bold'>

                        {category}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
