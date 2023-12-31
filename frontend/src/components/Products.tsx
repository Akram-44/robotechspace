import Container from "./Container";
import Link from "next/link";
import { Keyboard, Unplug, Mouse, Wifi } from "lucide-react";
import Product from "./Product";
import { getProducts } from "@/helpers";


async function getCategories() {
  try {
    const res = await fetch('http://127.0.0.1:1337/api/categories');
    const response = await res.json();
    return response.data;
  } catch (error) { console.log(error) }
}



const Products = async () => {
  const products = await getProducts();
  const categories = await getCategories()
  console.log(categories)
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">

            Explore custom layouts designed for seamless electronic shopping.
          </p>

          <div className="flex-wrap justify-center text-zinc-500 flex items-center gap-2 md:gap-6 mt-5">
            {categories?.map(item => <><Link
              href={"/sensor"}
              className="flex gap-2 hover:text-black cursor-pointer duration-200"
              key={item.id}
            >
              <Mouse />
              <p>{item.attributes.title}</p>
            </Link>
              <div className="h-7 w-[1px] bg-designColor inline-flex" /></>)}
          </div>
        </div>
        <Product products={products} />
      </Container>
    </div>
  );
};

export default Products;
