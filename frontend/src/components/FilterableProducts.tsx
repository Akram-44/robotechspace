'use client'
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Product from './Product';
import { getCategoryProducts } from '@/helpers/getCategoryProducts';
import { AlignJustify  } from 'lucide-react';

function FilterableProducts({ categories }) {
    const [categoryName, setCategoryName] = useState('sensor');
    const [toggle, setToggle] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const p = await getCategoryProducts(categoryName);
                setProducts(p);
                console.log(p)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (typeof window !== 'undefined') {
            // Run the effect only in the browser environment
            fetchProducts();
        }
    }, [categoryName]);

    console.log('cat id:', categoryName);

    return (
        <div>
            <div className='lg:hidden inline-block cursor-pointer border border-zinc-300 p-1 inline-block' onClick={()=>setToggle(!toggle)}>
                <AlignJustify />
            </div>
            <div className="relative flex gap-4 m-auto ">
                <Categories toggle={toggle} categoryName={categoryName} setCategoryName={setCategoryName} categories={categories} />
                <Product products={products} />
            </div>
        </div>
    );
}

export default FilterableProducts;