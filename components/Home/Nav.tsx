import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppinCartButton from '../Helper/ShoppinCartButton';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-blue-100 shadow-md'>
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
            {/* Logo */}
            <Link href="/">
  <Image 
    src="/images/logo.png" 
    alt="Logo" 
    width={140} 
    height={140} 
    className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] h-auto" 
  />
</Link>

            {/* Icons */}
            <div className='flex items-center space-x-6'>
                {/* SearchBox */}
                <SearchBox/>
                <HeartIcon size={26} cursor={"pointer"}/>
                {/* ShopingCartButton */}
                <ShoppinCartButton/>

                {/* User Button */}

                {/* For Sign in User */}
                <SignedIn>
                  <UserButton/>
                </SignedIn>

                {/* For Not SignIn */}
                <SignedOut>
                  <SignInButton>
                  <UserIcon size={26} cursor={"pointer"}/>
                  </SignInButton>
                </SignedOut>
                
                
            </div>
        </div>

    </div>
  )
}

export default Nav
