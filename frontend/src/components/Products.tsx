import Container from "./Container";
import Link from "next/link";
import { Keyboard, Unplug, Mouse, Wifi } from "lucide-react";
import Product from "./Product";
import { getProducts } from "@/helpers";
import Categories from "./Categories";

const Products = async () => {
  const products = await getProducts();
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">
            Explore custom layouts designed for seamless electronic shopping.
          </p>
        </div>
        <div className="flex gap-4">
<Categories/>
        <Product products={products} />
        </div>
      </Container>
    </div>
  );
};

export default Products;
