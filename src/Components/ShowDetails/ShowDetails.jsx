import { useLocation } from "react-router-dom";
import { FaRegStarHalfStroke, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { contextCartItem, contextWishItem } from "../Root/Root";
import { toast } from "react-toastify";


const ShowDetails = () => {
    const { cartItem, setCartItem } = useContext(contextCartItem);
    const { wishItem, setWishItem } = useContext(contextWishItem);
    const location = useLocation();

    const { product } = location.state || {};  // Access the product data
    if (!product) {
        return <h1>No product data found.</h1>;  // fallback
    }

    const { product_title, product_image, price, availability, description, Specification, rating } = product;
    const safeRating = Math.floor(rating);

    const handleCartItem = () => {
        if (!cartItem.find(item => item.product_id === product.product_id)) {
            setCartItem([...cartItem, product]);
            toast.success("Succesfully Product Add in Cart !");
        } else {
            toast.error("Product Already Add In Cart !");
            // console.log(cartItem);
        }
    }

    const handleWishItem = () => {
        if (!wishItem.find(item => item.product_id === product.product_id)) {
            setWishItem([...wishItem, product]);
            toast.success("Succesfully Product Add In Wish !");
        } else {
            toast.error("Product Already Add In Cart !");
            // console.log(cartItem);
        }
    }

    return (
        <div className="mb-12">
            <div className="bg-[#9538E2] py-12 lg:ml-6 lg:mr-6 text-white text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 px-10">
                        Product Details</h1>
                    <p className="w-3/4 mx-auto mb-8">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-gary-200 rounded-xl gap-8 my-4 mx-8 md:mx-40">
                <img className="flex-1 object-cover" src={product_image} alt="product image" />
                <div className="flex-1 flex flex-col justify-evenly items-start gap-4">
                    <h1 className="text-xl font-semibold">{product_title}</h1>
                    <h4 className="text-lg font-semibold">Price: {price} BDT</h4>
                    {
                        (availability ? <p className="text-green-600 border border-green-600 rounded-2xl px-4 py-2">In Stock</p> : <p>stock Out</p>)
                    }
                    <p className="text-gray-400">{description}</p>
                    <h4 className="text-lg font-semibold">Specification : </h4>
                    <ol className="list-decimal list-inside space-y-1">
                        {
                            Specification.map((spec, index) => (
                                <li className="text-gray-400" key={index}>{spec}</li>
                            ))
                        }
                    </ol>
                    <h3 className="text-lg font-semibold">Rating <span className="text-yellow-500 inline-block align-middle"><FaRegStarHalfStroke /></span></h3>
                    <div className="flex">
                        {
                            [...Array(safeRating)].map((_, idx) => (
                                <span key={idx} className="text-yellow-400">★</span>
                            ))
                        }
                        {
                            [...Array(5 - safeRating)].map((_, idx) => (
                                <span key={idx} className="text-gray-400">☆</span>
                            ))
                        }
                    </div>
                    <div className="space-x-4">
                        <button onClick={() => handleCartItem()}
                            className="bg-[#9538E2] rounded-2xl px-6 py-3 text-white font-semibold">
                            Add To Cart <span className="inline-block pl-2 align-middle text-xl"><IoCartOutline /></span></button>
                        <button onClick={handleWishItem}
                            className="rounded-full p-3 border">
                            <FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShowDetails;
