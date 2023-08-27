import products from '../../util/products'
import MyAppBar from '../../components/products/MyAppBar'
import MyGrid from '../../components/products/MyGrid'
import MyCard from "../../components/products/MyCard";
import * as React from "react";

export default function ProductDetail({ product }) {
    return (
        <>
            <MyAppBar />
            <MyGrid>
                <MyCard key={product.id} product={product}/>
            </MyGrid>
        </>
    )
}

export async function getStaticPaths() {
    const paths = products.map(product => ({
        params: {
            id: product.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const product = products.find(product => product.id.toString() === params.id)
    return {
        props: {
            product
        }
    }
}