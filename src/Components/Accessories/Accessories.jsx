import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Accessories = () => {
    const accessories = useLoaderData();

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {
                accessories.map(product => <Product
                    key={product.product_id}
                    product={product}></Product>)
            }
        </div>
    );
};

export default Accessories;