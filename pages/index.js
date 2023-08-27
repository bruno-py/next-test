import * as React from 'react';
import MyAppBar from '../components/index/MyAppBar'
import {useState} from "react";
import MyGrid from "../components/index/MyGrid";
import products from "../util/products"

const categories = ['Todos', 'Bebidas', 'Frutas', 'Lácteos', 'Limpieza']

function filterProducts(searchTerm, selectedCategory, products) {
    if (searchTerm != '') return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (selectedCategory == "Todos") return products;
    return products.filter(product => product.category == selectedCategory)
}

export default function Index() {
    const [selectedCategory, setSelectedCategory] = useState('Bebidas')
    const [searchTerm, setSearchTerm] = useState('')
    const filteredProducts = filterProducts(searchTerm, selectedCategory, products)

    return (
        <>
            <MyAppBar
                categories={categories}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <MyGrid products={filteredProducts} />
        </>
    );
}
