import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { contextCartItem, contextWishItem } from "../Root/Root";

const NavBar = () => {
    const { cartItem } = useContext(contextCartItem);
    const { wishItem } = useContext(contextWishItem);
    const navigate = useNavigate();

    const handleGoHomePage = () => {
        navigate("/");
    }

    const cartItemLength = cartItem.length;
    const wishItemLength = wishItem.length;

    return (
        <div className="bg-[#9538E2] mt-1 lg:ml-6 lg:mr-6 text-white rounded-t-xl">
            <div className="navbar max-w-5xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="gap-4 text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink className={({ isActive }) =>
                                isActive ? "underline" : ""}
                                to="/">Home</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "underline" : ""}
                                to="/dashboard">Dashboard</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "underline" : ""}
                                to="">Statistics</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "underline" : ""}
                                to="">Your Account</NavLink>
                        </ul>
                    </div>
                    <button onClick={handleGoHomePage} className="btn btn-ghost text-2xl">ArtiCret Gadgets</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-lg menu menu-horizontal px-1 gap-4 ">
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline" : ""}
                            to="/">Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline" : ""}
                            to="/dashboard">Dashboard</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline" : ""}
                            to="statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline" : ""}
                            to="profile">Your Account</NavLink>
                    </ul>
                </div>
                <div className="gap-4 navbar-end">
                    <div className="relative bg-white text-black p-2 rounded-full">
                        <div className="z-50 "><IoCartOutline ></IoCartOutline></div>
                        {
                            cartItemLength !== 0 && <p className="absolute -top-2 right-0 text-sm px-1 bg-gray-100 rounded-full">{cartItemLength}</p>
                        }
                    </div>
                    <div className="relative bg-white text-black p-2 rounded-full">
                        <FaRegHeart  ></FaRegHeart>
                        {
                            wishItemLength !== 0 && <p className="absolute -top-2 right-0 text-sm px-1 bg-gray-100 rounded-full">{wishItemLength}</p>
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;