import { useContext } from "react";
import { contextCartItem } from "../Root/Root";
import { PiSortAscendingLight, PiSortDescendingLight } from "react-icons/pi";
import { ImEqualizer2 } from "react-icons/im";
import DashboardItem from "../DashboardItem/DashboardItems";


const Cart = () => {
    const { cartItem, setCartItem } = useContext(contextCartItem);

    const totalCost = cartItem.reduce((acc, item) => acc + item.price, 0);

    const handleSort = (type) => {
        const sortedCart = [...cartItem].sort((a, b) => {
            return type === 1 ? a.price - b.price : b.price - a.price;
        });
        setCartItem(sortedCart);
    };

    return (
        <section className="max-w-5xl mx-auto">
            {/* Title  */}
            <div className="flex flex-col md:flex-row justify-between my-8 items-center gap-4">
                <h3 className="text-2xl font-bold ">Cart: {cartItem.length}</h3>
                <div className="flex gap-6 items-center flex-col md:flex-row">
                    <h3 className="text-2xl font-bold ">Total Cost: <span>{totalCost}</span></h3>
                    <div className="space-x-20 md:space-x-6">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="rounded-3xl border border-[#8332C5] px-4 py-2 text-lg font-semibold">Sort By Price <span className="inline-block"><ImEqualizer2 /></span></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li onClick={() => handleSort(1)} className="text-lg font-semibold"><a>Ascending <PiSortAscendingLight /></a></li>
                                <li onClick={() => handleSort(0)} className="text-lg font-semibold"><a>Descending <PiSortDescendingLight /></a></li>
                            </ul>
                        </div>
                        <button className="rounded-3xl bg-[#8332C5] text-white px-4 py-2 text-lg font-semibold">Purchase</button>
                    </div>
                </div>
            </div>

            {/* product  */}
            <div className="space-y-6">
                {
                    cartItem.map(card => <DashboardItem key={card.product_id} card={card}></DashboardItem>)
                }
            </div>
        </section>
    );
};

export default Cart;