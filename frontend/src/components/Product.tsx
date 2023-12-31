"use client";
import { useState } from 'react'
import Link from "next/link";
import { ProductType, StateProps } from "../../type";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {

  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem.id === productId);
  };
  const dispatch = useDispatch();
  return (
    <div className=' h-[800px] overflow-y-auto'>
      <div className="flex flex-wrap gap-6 mt-5">
        {products?.map((item) => (
          <div
            key={item.id}
            className="w-[250px] rounded-[.5rem] p-3 relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-400 duration-300 hover:shadow-xl overflow-hidden"
          >
            <Link href={{ pathname: `/${item?.id}`, query: { id: item?.id } }}>
              <Image
                src={`http://127.0.0.1:1337${item?.attributes?.image?.data[0]?.attributes?.url}`}
                alt="Product image"
                width={200}
                height={200}
                className="m-auto object-contain lg:object-contain group-hover:scale-105 duration-300"
              />
            </Link>
            <Heart
              fill={isFavorite(item.id) ? "red" : "black"}
              onClick={() => {
                dispatch(addToFavorite(item));
                if (isFavorite(item?.id)) {
                  toast.error(`${item?.attributes?.title} removed from favorites!`);
                } else {
                  toast.success(`${item?.attributes?.title} added to favorites!`);
                }
              }}
              className="absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200"
            />
            <div className="hidden sm:block p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
              <p className="whitespace-nowrap text-ellipsis overflow-hidden group-hover:text-designColor duration-300">
                {item?.attributes?.title}
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.attributes?.price} />
              </p>
              <div className="flex items-center justify-between text-sm mt-2">
                <button
                  onClick={() => {
                    dispatch(addToCart(item)),
                      toast.success(`${item?.attributes?.title} is added to Cart!`);
                  }}
                  className="uppercase font-semibold hover:text-designColor duration-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000",
              color: "#fff",
            },
          }}
        />
      </div>


    </div>
  );
};

export default Product;
