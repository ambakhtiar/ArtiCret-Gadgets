import { NavLink } from "react-router-dom";

const Categories = () => {

    return (
        <div className="flex flex-row md:flex-col justify-between bg-white">
            <NavLink to="/"
                className={({ isActive }) => isActive ? "hidden md:block bg-[#9538E2] px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl text-white font-semibold m-2 md:m-6" : "hidden bg-gray-100  md:block text-black font-normal px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl m-2 md:m-6"}
            >All Products</NavLink>
            <NavLink to="/"
                className={({ isActive }) => isActive ? "md:hidden bg-[#9538E2] px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl text-white font-semibold m-2 md:m-6" : "md:hidden bg-gray-100  text-black font-normal px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl m-2 md:m-6"}
            >All</NavLink>

            <NavLink to="laptop"
                className={({ isActive }) => isActive ? "bg-[#9538E2] px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl text-white font-semibold m-2 md:m-6" : " bg-gray-100 text-black font-normal px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl m-2 md:m-6"}
            >Laptop</NavLink>
            <NavLink to="mobile"
                className={({ isActive }) => isActive ? "bg-[#9538E2] px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl text-white font-semibold m-2 md:m-6" : " bg-gray-100 text-black font-normal px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl m-2 md:m-6"}
            >Mobile</NavLink>
            <NavLink to="smartwatch"
                className={({ isActive }) => isActive ? "bg-[#9538E2] px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl text-white font-semibold m-2 md:m-6" : " bg-gray-100 text-black font-normal px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl m-2 md:m-6"}
            >Smartwatch</NavLink>
            <NavLink to="accessories"
                className={({ isActive }) => isActive ? "bg-[#9538E2] px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl text-white font-semibold m-2 md:m-6" : " bg-gray-100 text-black font-normal px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-2xl m-2 md:m-6"}
            >Accessories</NavLink>
        </div>
    );
};

export default Categories;