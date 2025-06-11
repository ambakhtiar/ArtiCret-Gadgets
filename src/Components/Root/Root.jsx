import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext, useState } from "react";

export const contextCartItem = createContext();
export const contextWishItem = createContext();

const Root = () => {
    const [cartItem, setCartItem] = useState([]);
    const [wishItem, setWishItem] = useState([]);

    return (
        <div>
            <contextWishItem.Provider value={{ wishItem, setWishItem }}>
                <contextCartItem.Provider value={{ cartItem, setCartItem }}>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </contextCartItem.Provider>
            </contextWishItem.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;