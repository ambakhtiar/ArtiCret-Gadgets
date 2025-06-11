import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const navigate = useNavigate();
    const handleShowDetailsPage = () => {
        navigate("product/details", { state: { product } });
    }

    const { product_title, product_image, price } = product;

    return (
        <div className="space-y-6 p-5 bg-white rounded-xl">
            <img className="object-cover rounded-xl w-full mx-auto" src={product_image} alt="" />
            <h2 className="text-2xl font-bold">{product_title}</h2>
            <p>Price: {price}</p>
            <button onClick={handleShowDetailsPage} className="px-2 py-1 text-[#9538E2] border border-[#9538E2] rounded-xl">View Details</button>
        </div>
    );
};

export default Product;