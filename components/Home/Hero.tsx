import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/* Define grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            mega sale <span className="text-rose-600">Special</span> Offer up to{" "}
            <span className="text-orange-500">50%</span> Off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Discover unbeatable deals on high-quality products, carefully
            crafted to bring you both style and value. Elevate your shopping
            experience with our exclusive offers, designed to make luxury
            affordable. Shop now and seize the moment to save big on the items
            you love!
          </p>

          <div className="flex mt-6 items-center space-x-4">
            <Link href="/all-products">
              <Button size="lg" className="bg-blue-700">
                Shop Now
              </Button>
            </Link>
            <Link href="/all-products">
              <Button size="lg">Explore More</Button>
            </Link>
          </div>
        </div>
        {/* Image Content */}
        <div className="hidden lg:block">
          <Image
            src="/images/hero.svg"
            alt="hero"
            width={600}
            height={600}
            className="lg:h-[50%] lg:w-[50%] xl:h-[80%] xl:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
