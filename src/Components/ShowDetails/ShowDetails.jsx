import { useLocation } from "react-router-dom";
import { FaRegStarHalfStroke, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { contextAddToCart, contextWishItem } from "../Root/Root";
import { toast } from "react-toastify";


const ShowDetails = () => {
    const { wishItem, setWishItem } = useContext(contextWishItem);
    const location = useLocation();
    const handleAddToCart = useContext(contextAddToCart);

    const { product } = location.state || {};  // Access the product data, when product export navigate hook use
    if (!product) {
        return <h1>No product data found.</h1>;  // fallback
    }

    if (location.pathname === "/product/details") {
        document.title = "Product Details | ArtiCret";
    }

    const [isAddedWishList, setIsAddedWishList] = useState(
        !!wishItem.find(item => item.product_id === product.product_id)
    );

    const { product_title, product_image, price, availability, description, Specification, rating } = product;
    const safeRating = Math.floor(rating);


    const handleAddToWishList = () => {
        if (!isAddedWishList) {
            setWishItem([...wishItem, product]);
            toast.success("Succesfully Product Add In Wish !");
            setIsAddedWishList(true);
        } else {
            toast.error("Product Already Add In Cart !");
        }
    }


    return (
        <div className="mb-[700px] md:mb-96 relative">
            <div className="bg-[#9538E2] h-[460px] py-12 lg:ml-6 lg:mr-6 text-white text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 px-10">
                        Product Details</h1>
                    <p className="w-3/4 mx-auto mb-8">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="absolute top-60 md:top-56 bg-white flex flex-col md:flex-row rounded-xl gap-8 p-8 max-w-sm md:max-w-5xl mx-10 md:mx-40 ">
                <img className="md:flex-1 object-cover" src={product_image} alt="product image" />
                <div className="md:flex-1 flex flex-col items-start gap-4 justify-center">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <h4 className="text-lg font-semibold">Price: {price} BDT</h4>
                    {
                        (availability ? <p className="text-green-600 border border-green-600 rounded-2xl px-2 py-1 font-semibold">In Stock</p> : <p className="text-red-500 font-semibold">Stock Out</p>)
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
                        <button onClick={() => handleAddToCart(product)}
                            className="bg-[#9538E2] rounded-3xl px-6 py-3 text-white font-semibold">
                            Add To Cart <span className="inline-block pl-2 align-middle text-xl"><IoCartOutline /></span></button>

                        <button onClick={handleAddToWishList} disabled={isAddedWishList}
                            className={`rounded-full p-3 border ${isAddedWishList ? "bg-gray-500 cursor-not-allowed" : "bg-white"}`}>
                            <FaRegHeart /></button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ShowDetails;
