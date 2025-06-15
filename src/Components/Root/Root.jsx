import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contextCartItem = createContext();
export const contextWishItem = createContext();
export const contextAddToCart = createContext();
export const contextPurchaseHistory = createContext();
export const contextPurchaseDate = createContext();

const Root = () => {
    const [cartItem, setCartItem] = useState([]);
    const [wishItem, setWishItem] = useState([]);
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [purchaseDate, setPurchaseDate] = useState([]);

    const handleAddToCart = (product) => {
        const totalCost = cartItem.reduce((acc, item) => acc + item.price, 0) + product.price;
        if (!product.availability) {
            toast.error("Product Stock Out !");
        } else if (!cartItem.find(item => item.product_id === product.product_id)) {
            if (totalCost <= 5000) {
                setCartItem([...cartItem, product]);
                toast.success(`Succesfully Product Add in Cart ! Now Total Cost ${totalCost} BDT`);
            } else {
                toast.warn("Your Cart Products Price Alreday Over 5000 BDT !");
            }
        } else {
            toast.error("Product Already Add In Cart !");
        }
    }

    const location = useLocation();

    return (
        <div>
            <contextWishItem.Provider value={{ wishItem, setWishItem }}>
                <contextCartItem.Provider value={{ cartItem, setCartItem }}> {/*value send like object*/}
                    <contextAddToCart.Provider value={handleAddToCart}> {/*value send like function*/}
                        <contextPurchaseHistory.Provider value={[purchaseHistory, setPurchaseHistory]}>
                            <contextPurchaseDate.Provider value={[purchaseDate, setPurchaseDate]}>
                                <NavBar></NavBar>
                                <Outlet></Outlet>
                            </contextPurchaseDate.Provider>
                        </contextPurchaseHistory.Provider>
                    </contextAddToCart.Provider>
                </contextCartItem.Provider>
            </contextWishItem.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;