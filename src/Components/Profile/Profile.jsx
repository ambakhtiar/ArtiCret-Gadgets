import React, { useContext } from 'react';
import { contextPurchaseDate, contextPurchaseHistory } from '../Root/Root';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const [purchaseHistory, setPurchaseHistory] = useContext(contextPurchaseHistory);
    const [purchaseDate, setPurchaseDate] = useContext(contextPurchaseDate);
    const location = useLocation();

    if (location.pathname === "/profile") {
        document.title = "Profile | ArtiCret";
    }

    return (
        <div>
            <div className="bg-[#9538E2] py-12 lg:ml-6 lg:mr-6 text-white text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 px-10">
                        ArtiCret Gadgets
                    </h1>
                    <h1 className="text-xl md:text-3xl font-semibold mb-6 px-10">
                        ArtiCret (Your Name)
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 px-4">
                <h1 className="text-lg md:text-2xl font-semibold mb-6">
                    Your Purchase History
                </h1>
                {
                    (purchaseHistory.length !== 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                purchaseDate.map((date, idx) => (
                                    <div key={idx} className="border p-3 rounded-lg shadow bg-gray-50">
                                        <h3 className="font-semibold text-gray-700">Date: {new Date(date).toLocaleString()}</h3>
                                        <h3 className="text-gray-600">Amount: {purchaseHistory[idx]} BDT</h3>
                                    </div>
                                ))
                            }
                        </div> :
                        <div className='h-[300px] w-full p-4 flex justify-center items-center text-xl font-semibold'
                        >No Purchase History available to display.</div>
                    )
                }
            </div>
        </div>
    );
};

export default Profile;
