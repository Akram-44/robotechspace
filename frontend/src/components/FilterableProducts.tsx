// 'use client'
// import React, { useState, useEffect } from 'react'
// import Categories from './Categories'
// import Product from './Product'
// import { getCategoryProducts } from '@/helpers/getCategoryProducts';
// // 
// function FilterableProducts({ products, categories, categoryProducts }) {
//     const [categoryId, setCategoryId] = useState(1);
//     const [productsT, setProductsT] = useState([])
//     useEffect(async() => {
//         let p = await getCategoryProducts(categoryId);
//         setProductsT(p)
//     }, [categoryId])


//     console.log(categoryId)
//     return (
//         <div className="flex gap-4">
//             <Categories categoryId={categoryId} setCategoryId={setCategoryId} categories={categories} />
//             <Product products={productsT} /></div>
//     )
// }

// export default FilterableProducts

'use client'
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Product from './Product';
import { getCategoryProducts } from '@/helpers/getCategoryProducts';

function FilterableProducts({ products, categories, categoryProducts }) {
  const [categoryName, setCategoryName] = useState('');
  const [productsT, setProductsT] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const p = await getCategoryProducts(categoryName);
        setProductsT(p);
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

  console.log('cat id:',categoryName);

  return (
    <div className="flex gap-4">
      <Categories categoryName={categoryName} setCategoryName={setCategoryName} categories={categories} />
      <Product products={productsT} />
    </div>
  );
}

export default FilterableProducts;