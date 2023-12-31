'use client'
import React, { useState } from 'react'
import Categories from './Categories'
import Product from './Product'

 function FilterableProducts({ products,categories }) {
    const [categoryId,setCategoryId] = useState(1)
    return (
        <div className="flex gap-4">
            <Categories categories={categories} />
            <Product categoryId={categoryId} products={products} /></div>
    )
}

export default FilterableProducts