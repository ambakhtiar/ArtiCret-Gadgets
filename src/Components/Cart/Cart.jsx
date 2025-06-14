import { useContext, useState } from "react";
import { contextCartItem } from "../Root/Root";
import { PiSortAscendingLight, PiSortDescendingLight } from "react-icons/pi";
import { ImEqualizer2 } from "react-icons/im";
import DashboardItem from "../DashboardItem/DashboardItems";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const { cartItem, setCartItem } = useContext(contextCartItem);
    const [purchaseCost, setPurchaseCost] = useState(0);
    const [isModalClosed, setIsModalClosed] = useState(false);
    const navigate = useNavigate();

    const totalCost = cartItem.reduce((acc, item) => acc + item.price, 0);

    const handleSort = (type) => {
        const sortedCart = [...cartItem].sort((a, b) => {
            return type === 1 ? a.price - b.price : b.price - a.price;
        });
        setCartItem(sortedCart);
    };

    const handlePurchase = () => {
        if (totalCost) {
            setPurchaseCost(totalCost);
            document.getElementById('purchaseModal').showModal();
            setCartItem([]);
            setIsModalClosed(true);
        }
    }

    const handleModalClosed = () => {
        if (isModalClosed) {
            navigate("/");
        }
    }

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
                        <button onClick={handlePurchase} disabled={totalCost === 0}
                            className={`${totalCost === 0 ? "bg-gray-700 cursor-not-allowed" : "bg-[#8332C5]"} rounded-3xl text-white px-4 py-2 text-lg font-semibold`}
                        >Purchase</button>
                    </div>
                </div>
            </div>

            {/* product  */}
            <div className="space-y-6">
                {
                    cartItem.map(product => <DashboardItem key={product.product_id} product={product}></DashboardItem>)
                }
            </div>


            {/* Modal  */}
            {/* <button className="btn" onClick={() => document.getElementById('purchaseModal').showModal()}>open modal</button> */}
            <dialog id="purchaseModal" className="modal ">
                <div className="modal-box w-11/12 max-w-md">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="text-4xl font-bold text-green-700"><BsFillPatchCheckFill></BsFillPatchCheckFill></h2>
                        <h2 className="text-4xl font-bold">Payment Successfully</h2>
                        <p className="font-semibold text-lg">Thansks for Purchassing <span className="inline-block align-middle text-yellow-500"><MdCelebration /></span></p>
                        <p className="font-semibold text-lg">Total: {purchaseCost} BDT</p>
                        <form method="dialog" className="w-full" onSubmit={handleModalClosed}>
                            <button className="btn w-full bg-gray-400 font-semibold rounded-2xl hover:bg-gray-500">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </section >
    );
};

export default Cart;