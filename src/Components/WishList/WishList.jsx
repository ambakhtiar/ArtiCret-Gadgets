import { useContext } from "react";
import { contextWishItem, contextCartItem, contextAddToCart } from "../Root/Root";
import { PiSortAscendingLight, PiSortDescendingLight } from "react-icons/pi";
import { ImEqualizer2 } from "react-icons/im";
import DashboardItem from "../DashboardItem/DashboardItems";
import { toast } from "react-toastify";

const WishList = () => {
    const { wishItem, setWishItem } = useContext(contextWishItem);
    const { cartItem, setCartItem } = useContext(contextCartItem);
    const handleAddToCart = useContext(contextAddToCart);

    const handleSort = (type) => {
        const sortedWish = [...wishItem].sort((a, b) => {
            return type === 1 ? a.price - b.price : b.price - a.price;
        });
        setWishItem(sortedWish);
    };


    return (
        <section className="max-w-5xl mx-auto">
            {/* Title  */}
            <div className="flex flex-col md:flex-row justify-between my-8 items-center gap-4">
                <h3 className="text-2xl font-bold ">WishList: {wishItem.length}</h3>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="rounded-3xl border border-[#8332C5] px-4 py-2 text-lg font-semibold">
                        Sort By Price <ImEqualizer2 className="inline-block" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSort(1)} className="text-lg font-semibold">
                            <a>Ascending <PiSortAscendingLight /></a>
                        </li>
                        <li onClick={() => handleSort(0)} className="text-lg font-semibold">
                            <a>Descending <PiSortDescendingLight /></a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Product List */}
            <div className="space-y-6">
                {wishItem.map(product => (
                    <DashboardItem key={product.product_id} product={product}>
                        <button onClick={() => handleAddToCart(product)}
                            className="bg-[#9538E2] px-3 py-1 md:px-3 md:py-2 rounded-2xl md:rounded-3xl whitespace-nowrap text-white font-semibold"
                        >Add to Cart</button>
                    </DashboardItem>
                ))}
            </div>
        </section>
    );
};

export default WishList;
