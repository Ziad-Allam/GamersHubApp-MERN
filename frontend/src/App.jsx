import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./components/layouts/AuthLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import MainLayout from "./components/layouts/MainLayout"
import Home from "./pages/Home"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/products/ProductDetails"
import CheckAuth from "./components/common/CheckAuth"
import Notfound from "./pages/NotFound"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./features/auth/authSlice"
import Checkout from "./pages/Chackout"
import PaypalReturn from "./pages/payments/PaypalReturn"
import PaymentSuccess from "./pages/payments/PaymentSuccess"
import OrderDetails from "./pages/orders/OrderDetails"
import ProductsList from "./pages/products/ProductsList"
import Orders from './pages/orders/Orders';
import AccountLayout from './components/layouts/AccountLayout';
import { PiGameControllerFill } from 'react-icons/pi';
import Address from './pages/Address';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {

  const { isAuthenticated, user, isLoading } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  if (isLoading) return <div className="flex flex-col items-center justify-center h-screen gap-4">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent"></div>
    <div className='flex items-center gap-1 text-'>
      <span className='font-semibold text-lg lg:text-xl'>G A</span>
      <PiGameControllerFill className='text-amber-600 text-2xl' />
      <span className='font-semibold text-lg lg:text-xl'>E R S</span>
    </div>
  </div>

  const router = createBrowserRouter([
    {
      element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AuthLayout />
      </CheckAuth>,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },

    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/wishlist",
          element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Wishlist />
          </CheckAuth>,
        },
        {
          path: "/cart",
          element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Cart />
          </CheckAuth>,
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "/shop/:id",
          element: <ProductsList />,
        },

      ],
    },

    {
      path: "/checkout",
      element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <Checkout />
      </CheckAuth>,
    },
    {
      path: "/payment-success",
      element: <PaymentSuccess />,
    },
    {
      path: "/paypal-return",
      element: <PaypalReturn />,
    },

    {
      element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AccountLayout />
      </CheckAuth>,
      children: [
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "order-details/:id",
          element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <OrderDetails />
          </CheckAuth>,
        },

        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "help",
          element: <Help />,
        },
        {
          path: "addresses",
          element: <Address />,
        },
      ],
    },

    {
      path: "*",
      element: <Notfound />
    }


  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
