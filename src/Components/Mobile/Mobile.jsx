import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Mobile = () => {
    const mobiles = useLoaderData();

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {
                mobiles.map(product => <Product
                    key={product.product_id}
                    product={product}></Product>)
            }
        </div>
    );
};

export default Mobile;