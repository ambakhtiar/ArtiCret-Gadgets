import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useRef, useState } from "react";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch("AllProducts.json").
            then(res => res.json()).
            then(data => setAllProducts(data));
    }, [])

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allProducts.map(product => <Product
                    key={product.product_id}
                    product={product}></Product>)
            }
        </div>
    );
};

export default AllProducts;