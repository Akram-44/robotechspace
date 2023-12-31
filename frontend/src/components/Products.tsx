import Container from "./Container";
import Link from "next/link";
import { Keyboard, Unplug, Mouse, Wifi } from "lucide-react";
import { getProducts } from "@/helpers";
import FilterableProducts from "./FilterableProducts";
import { getCategories } from "@/helpers/getCategories";
import { getCategoryProducts } from "@/helpers/getCategoryProducts";

const Products = async () => {
  const products = await getProducts();
  const categories = await getCategories()
  const categoryProducts = await getCategoryProducts('');
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">
            Explore custom layouts designed for seamless electronic shopping.
          </p>
        </div>
          <FilterableProducts categories={categories} />
      </Container>
    </div>
  );
};

export default Products;
