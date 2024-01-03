'use client'
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Product from './Product';
import { getCategoryProducts } from '@/helpers/getCategoryProducts';
import { AlignJustify } from 'lucide-react';

function FilterableProducts({ categories }) {
  const [categoryName, setCategoryName] = useState('sensor');
  const [toggle, setToggle] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const p = await getCategoryProducts(categoryName);
        setProducts(p);
        console.log(p);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (typeof window !== 'undefined') {
      // Run the effect only in the browser environment
      fetchProducts();
    }
  }, [categoryName]);

  useEffect(() => {
    // Update toggle state based on screen width
    const handleResize = () => {
      setToggle(window.innerWidth >= 1024); // Adjust the screen width as needed
    };

    // Set initial toggle value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='mt-5'>
      <div
        className='lg:hidden inline-block cursor-pointer border border-zinc-300 p-1 inline-block'
        onClick={() => setToggle(!toggle)}
      >
        <AlignJustify />
      </div>
      <div className='relative mt-5 flex gap-4 m-auto '>
        <Categories toggle={toggle} setCategoryName={setCategoryName} categories={categories} />
        <Product prefix={'pr'} products={products} />
      </div>
    </div>
  );
}

export default FilterableProducts;
