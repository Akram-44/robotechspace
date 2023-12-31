"use client";
import {useState} from 'react'
import Link from "next/link";
import { ProductType, StateProps } from "../../type";
import Image from "next/image";
import { Heart,ChevronLeft,ChevronRight } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {

const [attributes,id] = products;
// console.log(products)


  const perPage = 12
  const [noMoreItems,setNoMoreItems] = useState(false)
  const [page,setPage] = useState({
    start: 0,
    end: perPage
  })
  const handleNext = ()=>{
    if(page.end>=products.length) {
      setNoMoreItems(true);
      setTimeout(() => {
        setNoMoreItems(false);
      }, 1000);
      return
    };
    setNoMoreItems(false)
    setPage({...page,start:page.end,end:page.end+perPage})
    scrollTo(0,400)
  
  }
    const handlePrev = () => {
      if (page.start <= 0) {
        setNoMoreItems(true)
        setTimeout(() => {
          setNoMoreItems(false);
        }, 1000);
      return
      };
      setNoMoreItems(false)
      setPage({ ...page, start: page.start - perPage, end: page.start });
      scrollTo(0,400)
    };





    
  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem._id === productId);
  };
console.log()
  const dispatch = useDispatch();
  return (
    <div>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
      {/* {products.slice(page.start,page.end).map((item) => ( */}
      {products?.map((item) => (
        <div
          key={item._id}
          className="rounded-[.5rem] p-3 relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-400 duration-300 hover:shadow-xl overflow-hidden"
        >
          {/* <p>http://127.0.0.1:1337{item?.attributes?.image?.data[0]?.url}</p> */}
          <Link href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}>
            <Image
              src={`http://127.0.0.1:1337${item?.attributes?.image?.data[0]?.attributes?.url}`}
              alt="Product image"
              width={200}
              height={200}
              className="m-auto object-contain lg:object-contain group-hover:scale-105 duration-300"
            />
          </Link>
          <Heart
            fill={isFavorite(item._id) ? "red" : "black"}
            onClick={() => {
              dispatch(addToFavorite(item));
              if (isFavorite(item?._id)) {
                toast.error(`${item.title} removed from favorites!`);
              } else {
                toast.success(`${item.title} added to favorites!`);
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
              {/* <Link
                className="uppercase font-semibold hover:text-designColor duration-300"
                href={{ pathname: `/${item?.attributes?._id}`, query: { _id: item?._id } }}
              > */}
                More Info
              {/* </Link> */}
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

<div className="flex mt-10 flex-col justify-center gap-2 items-center">
        <ul className="flex justify-center gap-2 items-center">
          <li className="bg-designColor/80 flex p-1 rounded-sm">
            <button onClick={handlePrev}>{<ChevronLeft/>}</button>
            </li>
          <li className="bg-designColor/80 flex p-1 rounded-sm"><button onClick={handleNext}>{<ChevronRight/>}</button></li>
          </ul>
          <span className={`transition-opacity duration-200 ${noMoreItems ? 'opacity-100' : 'opacity-0'} text-red-500 font-bold`}>
  No More Items
</span>      </div>
      </div>
  );
};

export default Product;
