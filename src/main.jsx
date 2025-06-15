import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AllProducts from './Components/AllProducts/AllProducts';
import Laptop from './Components/Laptop/Laptop';
import Mobile from './Components/Mobile/Mobile';
import Smartwatch from './Components/Smartwatch/Smartwatch';
import Accessories from './Components/Accessories/Accessories';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import WishList from './Components/WishList/WishList';
import { ToastContainer, Zoom } from 'react-toastify';
import Statistics from './Components/Statistics/Statistics';
import Profile from './Components/Profile/Profile';
import CartStatistics from './Components/CartStatistics/CartStatistics';
import WishListStatistic from './Components/WishListStatistic/WishListStatistic';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/",
                        element: <AllProducts></AllProducts>
                    },
                    {
                        path: "laptop",
                        loader: () => fetch("Laptop.json"),
                        element: <Laptop></Laptop>
                    },
                    {
                        path: "mobile",
                        loader: () => fetch("Mobile.json"),
                        element: <Mobile></Mobile>
                    },
                    {
                        path: "smartwatch",
                        loader: () => fetch("Smartwatch.json"),
                        element: <Smartwatch></Smartwatch>
                    },
                    {
                        path: "accessories",
                        loader: () => fetch("Accessories.json"),
                        element: <Accessories></Accessories>
                    },

                ]
            },
            {
                path: "/product/details",
                element: <ShowDetails></ShowDetails>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        index: true,  // ✅ Makes Cart the default child route of /dashboard
                        element: <Cart></Cart>
                    },
                    {
                        path: "wishlist",
                        element: <WishList></WishList>
                    }
                ],
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                children: [
                    {
                        index: true,
                        element: <CartStatistics></CartStatistics>
                    },
                    {
                        path: "/statistics/wishlist",
                        element: <WishListStatistic></WishListStatistic>
                    }
                ]
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />,
        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
        />
    </StrictMode>,
)
