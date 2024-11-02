import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-12'>
        {/* Grid System Define */}
        <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
        {/* 1st part */}
            <div>
                <h1 className='text-[25px] font-semibold text-black mb-4'>
                    iQ Shop
                </h1>
                <p className='text-sm text-black opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at modi iste repudiandae suscipit? Rerum laborum, atq, illo cupiditate. Pariatur incidunt asperiores dolorum impedit hic.</p>
                <p className='text-base mt-6 text-black opacity-80'>
                    ( +92 ) 332 2241405 - info@example.com
                </p>
            </div>

            {/* 2nd part */}
            <div className='lg-mx-auto'>
                <h1 className='footer_title'>Information</h1>
                <p className='footer_link '>About Us</p>
                <p className='footer_link '>Privacy Policy</p>
                <p className='footer_link '>Return Policy</p>
                <p className='footer_link '>Shipping Policy</p>
                <p className='footer_link '>Dropshipping</p>
                
            </div>

            {/* 3rd part */}
            <div className='lg-mx-auto'>
                <h1 className='footer_title'>Account</h1>
                <p className='footer_link '>Dashborad</p>
                <p className='footer_link '>My Orders</p>
                <p className='footer_link '>Account Details</p>
                <p className='footer_link '>Track Orders</p>
                
            </div>

            {/* 4th part */}
            <div className='lg-mx-auto'>
                <h1 className='footer_title'>Shop</h1>
                <p className='footer_link '>Affiliate</p>
                <p className='footer_link '>Best Seller</p>
                <p className='footer_link '>Latest Products</p>
                <p className='footer_link '>Sale Products</p>
                
            </div>
        </div>

        {/* Copyright text */}
        <div className='mt-8  grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto'>
            <p className='text-sm text-black opacity-60'>c Copyright iQ Shop 2024</p>
            <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto'/>
        </div>
    </div>
  )
}

export default Footer
