import { useContext } from "react";
import { contextWishItem } from "../Root/Root";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const WishListStatistic = () => {
    const { wishItem } = useContext(contextWishItem);

    if (!wishItem || wishItem.length === 0) {
        return (
            <div className="h-[400px] w-full p-4 flex justify-center items-center text-xl font-semibold">
                No data available to display chart.
            </div>
        );
    }

    const data = wishItem.map(product => ({
        name: product.product_title,
        price: product.price,
        rating: product.rating * 10, // 🔔 multiply rating to make visible
    }));

    return (
        <div className="h-[400px] w-full p-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* 🔵 First part of bar (Price) */}
                    <Bar dataKey="price" stackId="a" fill="#8884d8" name="Price (BDT)" />
                    {/* 🟢 Second part of bar (Rating) */}
                    <Bar dataKey="rating" stackId="a" fill="#82ca9d" name="Rating (scaled). Out of 50" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WishListStatistic;
