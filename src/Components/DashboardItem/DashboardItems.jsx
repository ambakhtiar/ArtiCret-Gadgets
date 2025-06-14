import { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
import { contextCartItem, contextWishItem } from "../Root/Root";
import { toast } from "react-toastify";

const DashboardItem = ({ product, children = null }) => {
    const { cartItem, setCartItem } = useContext(contextCartItem);
    const { wishItem, setWishItem } = useContext(contextWishItem);
    const navigate = useNavigate();
    const location = useLocation();

    const { product_title, product_image, description, price } = product;

    const handleProductRemove = () => {
        if (location.pathname === "/dashboard") {
            const newCart = cartItem.filter(item => item.product_id !== product.product_id);
            setCartItem(newCart);
            toast.info("Removed from Cart!");
        } else {
            const newWish = wishItem.filter(item => item.product_id !== product.product_id);
            setWishItem(newWish);
            toast.info("Removed from WishList!");
        }
    };

    const handleShowDetailsPage = () => {
        navigate("/product/details", { state: { product } });
    };

    return (
        <div className="flex justify-between gap-4 p-8 border rounded-xl shadow-sm">
            <div className="flex justify-start gap-8">
                <img
                    onClick={handleShowDetailsPage}
                    className="w-1/3 md:w-1/5 object-contain cursor-pointer"
                    src={product_image}
                    alt="Product"
                />
                <div className="flex flex-col justify-evenly">
                    <h3 className="text-2xl font-semibold">{product_title}</h3>
                    <p className="text-[#09080F]">{description}</p>
                    <h5 className="text-[#09080F] text-xl font-semibold">{price} BDT</h5>
                    {children && <div className="block md:hidden mt-2">{children}</div>}
                </div>
            </div>

            <div className="flex justify-between items-center gap-2">
                {children && <div className="hidden md:block">{children}</div>}
                <CiCircleRemove
                    onClick={handleProductRemove}
                    className="text-3xl cursor-pointer hover:text-red-500"
                />
            </div>
        </div>
    );
};

export default DashboardItem;
