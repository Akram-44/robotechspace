"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { sliderOne, sliderTwo, sliderThree, sliderFour } from "@/assets";
import Image from "next/image";
import { Clock, Smartphone, Map, MailPlus } from "lucide-react";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    beforeChange: (prev: any, next: any) => {
      setDotActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          top: "80%",
          left: "67%",
        }}
        className="absolute translate-x[-50%] translate-y[-50%]"
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
          className="justify-center"
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
              width: "20px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#fe9a05",
              cursor: "pointer",
              borderRadius: '1rem'
            }
            : {
              width: "6px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#131921",
              cursor: "pointer",
              borderRadius: '1rem'
            }
        }
      ></div>
    ),
  };
  return (
    <div className="lg:min-h-[500px] relative">
      <Slider {...settings}>
        <div className={`${dotActive === 0 ? 'z-10' : 'z-0'} leaf lg:bg-none lg:bg-transparent w-full py-20 lg:py-0 lg:h-[500px] bg-slate-200 relative`}>
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
            <Image
              src={sliderOne}
              alt="sliderone"
              className="absolute object-cover right-0 top-10 lg:-right-48 w-[80%]"
              priority
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-5">
            <p className="text-2xl font-bold uppercase text-center">Get the Best products for you</p>
            <p className="w-96 px-4 text-center text-zinc-600">
              Browse the latest electronic components in the Market and get the one you dreamt
              for
            </p>
            <p className="font-bold">Electric Components in Demand</p>
            <Link href={'/sensor'} className="text-base font-medium text-white bg-designColor rounded-md px-4 py-2">
              Select a Product
            </Link>
          </div>
        </div>
        <div className={`${dotActive === 1 ? 'z-10' : 'z-0'} wiggle lg:bg-none lg:bg-transparent w-full py-20 lg:py-0 lg:h-[500px] bg-slate-200 relative`}>
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-[#fcb900] z-0 relative">
            <Image
              src={sliderFour}
              alt="sliderTwo"
              className="absolute object-contain right-0 top-20 lg:-right-48 rounded-[1rem]"
              loading="lazy"
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-5">
            <p className="text-center text-xl uppercase font-bold">Begin adding your favorite items to your wishlist</p>
            <p className="w-96 px-4 text-center text-zinc-600">
            Explore & Add the newest electronic components in the market to your wishlist.
            </p>
            <p className="text-2xl font-semibold">Wishlist page</p>
            <Link href="/wishlist" className="text-base font-medium text-white bg-designColor rounded-md px-4 py-2">
              Visit
            </Link>
          </div>
        </div>
        <div className={`${dotActive === 2 ? 'z-10' : 'z-0'} overlay-circles lg:bg-none lg:bg-transparent w-full py-20 lg:py-0 lg:h-[500px] bg-slate-200 relative`}>
          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-[#fcb900] z-0 relative">
            <Image
              src={sliderTwo}
              alt="sliderThree"
              className="absolute object-cover right-0 top-28 lg:-right-40 w-[70%]"
              loading="lazy"
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-5">
            <p className="text-xl uppercase text-center font-bold">All Orders in one place</p>
            <p className="w-96 px-4 text-center text-zinc-600">Start adding your dream electronic components to the shopping cart.</p>
            <p className="text-2xl font-semibold">Shopping Cart</p>
            <Link href={'/cart'} className="text-base font-medium text-white bg-black rounded-md px-4 py-2">
              Buy Now
            </Link>
          </div>
        </div>
      </Slider>
      <div className="border border-b-designColor rounded-sm h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 p-10">
        <div className="flex items-center gap-5 w-60">
          <Clock className="text-designColor w-8 h-8" />
          <div>
            <p>Saterday - Thursday</p>
            <p className="font-semibold">Open</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Smartphone className="text-designColor w-8 h-8" />
          <div>
          <a className="select-text" href="tel:1102071544">+20 11 0207 1544</a>
            <p className="font-semibold">Order by Phone</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Map className="text-designColor w-8 h-8" />
          <div>
          <a className="text-sm hover:underline" href="https://www.google.com/maps/search/%D8%A8%D9%86%D9%83+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D9%87%E2%80%AD/@29.075876,31.0982042,17z?entry=ttu">
            بنى سويف, امام بنك الاسكندرية
          </a>
            <p className="font-semibold">Address</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <MailPlus className="text-designColor w-8 h-8" />
          <div>
            <a className="text-sm hover:underline" href="mailto:robotechspace8@gmail.com">robotechspace8@gmail.com</a>
            <p className="font-semibold">Email us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
