import { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { contextCartItem, contextWishItem } from "../Root/Root";
import { toast } from "react-toastify";


const DashboardItem = ({ product }) => {
    const { cartItem, setCartItem } = useContext(contextCartItem);
    const { wishItem, setWishItem } = useContext(contextWishItem);
    const navigate = useNavigate();

    const { product_title, product_image, description, price } = product;

    const location = useLocation();
    console.log(location.pathname);

    const handleProductRemove = () => {
        if (location.pathname === "/dashboard") {
            const newProduct = cartItem.filter((item => item.product_id !== product.product_id));
            setCartItem(newProduct);

            toast.info("Product Remove for Cart !");
        } else {
            const newProduct = wishItem.filter((item => item.product_id !== product.product_id));
            setWishItem(newProduct);

            toast.info("Product Remove for WishList !");
        }
    }

    const handleShowDetailsPage = () => {
        navigate("/product/details", { state: { product } });
    }

    return (
        <div className="flex justify-between gap-4 p-8">
            <div className="flex justify-start gap-8 rounded-xl">
                <img onClick={handleShowDetailsPage} className="w-1/5 object-contain" src={product_image} alt="" />
                <div className="flex flex-col justify-evenly">
                    <h3 className="text-2xl font-semibold">{product_title}</h3>
                    <p className="text-[#09080F]">{description}</p>
                    <h5 className="text-[#09080F] text-xl font-semibold">{price}</h5>
                </div>
            </div>
            <div className="">
                <CiCircleRemove onClick={handleProductRemove} className="text-3xl"></CiCircleRemove>
            </div>
        </div>
    );
};

export default DashboardItem;