import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import { useRef } from "react";

const Home = () => {
    const location = useLocation();
    const productsRef = useRef(null);

    if (location.pathname === "/") {
        document.title = "ArtiCret Gadgets";
    }

    const handleShopNowClick = () => {
        productsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-100 pb-10">
            <Banner onShopNowClick={handleShopNowClick} />
            <h2 ref={productsRef} className="text-2xl lg:text-4xl font-bold text-center mb-12">
                Explore Cutting-Edge Gadgets
            </h2>
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-6">
                <div className="md:w-1/4">
                    <Categories />
                </div>
                <div className="md:w-3/4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
