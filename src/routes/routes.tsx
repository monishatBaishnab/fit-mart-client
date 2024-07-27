import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import ProductManagement from "../pages/ProductManagement";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

export const navLinks = [
    {
        key: 'home',
        label: 'Home',
        path: '/'
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products'
    },
    {
        key: 'about',
        label: 'About',
        path: '/about'
    },
    {
        key: 'productsManagement',
        label: 'Products Management',
        path: '/product-management'
    }
]

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'product-management',
                element: <ProductManagement />
            },
            {
                path: 'products/:id',
                element: <ProductsDetails />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'checkout',
                element: <Checkout />
            }
        ]
    }
])