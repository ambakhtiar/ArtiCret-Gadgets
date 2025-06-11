import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2] py-12 lg:ml-6 lg:mr-6 text-white text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 px-10">
                        Dashboard</h1>
                    <p className="w-3/4 mx-auto mb-8">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="space-x-6">
                        <NavLink className={({ isActive }) => isActive ?
                            "bg-white text-[#9538E2] px-12 py-3 font-semibold rounded-3xl" :
                            "text-white bg-[#9538E2] px-12 py-3 rounded-3xl border"}
                            to="/dashboard" end >Cart</NavLink>
                        <NavLink className={({ isActive }) => isActive ?
                            "bg-white text-[#9538E2] px-12 py-3 font-semibold rounded-3xl" :
                            "text-white bg-[#9538E2] px-12 py-3 rounded-3xl border"}
                            to="/dashboard/wishlist">Wishlist</NavLink>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;