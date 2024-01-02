'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import { sliderOne, sliderTwo, sliderFour } from "@/assets";
import Image from "next/image";
import { Clock, Smartphone, Map, MailPlus } from "lucide-react";
import { getSlides } from "@/helpers/getSlides";

interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {
  const [dotActive, setDotActive] = useState<number>(0);
  const [slides, setSlides] = useState<any[]>([]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    beforeChange: (prev: number, next: number) => {
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
    customPaging: (i: number) => (
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
              borderRadius: "1rem",
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
              borderRadius: "1rem",
            }
        }
      ></div>
    ),
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const slideList = await getSlides();
        setSlides(slideList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (typeof window !== "undefined") {
      // Run the effect only in the browser environment
      fetchProducts();
    }
  }, []);
  return (
    <div className="lg:min-h-[500px] relative">
      <Slider {...settings}>
        {slides &&
          slides.map((slide) => (
            <div
    key={slide?.id}
              className={`${dotActive === slide?.id ? "z-10" : "z-0"} leaf lg:bg-none lg:bg-transparent w-full py-20 lg:py-0 lg:h-[500px] bg-slate-200 relative`}
            >
              <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative">
                <Image
                  src={sliderOne}
                  alt="sliderone"
                  className="absolute object-cover right-0 top-10 lg:-right-48 w-[80%]"
                  priority
                />
              </div>
              <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-5">
                <p className="text-2xl font-bold uppercase text-center">{slide?.attributes?.heading}</p>
                <p className="w-96 px-4 text-center text-zinc-600">{slide?.attributes?.sub_heading}</p>
                <Link href={slide?.attributes?.link_url} passHref>
                  <a className="text-base font-medium text-white bg-designColor rounded-md px-4 py-2">{slide?.attributes?.link_text}</a>
                </Link>
              </div>
            </div>
          ))}
      </Slider>
      <div className="border border-b-designColor rounded-sm h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 p-10">
        {/* Rest of the component remains unchanged */}
      </div>
    </div>
  );
};

export default Banner;
