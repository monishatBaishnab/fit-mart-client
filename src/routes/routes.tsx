import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";

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
                path: '/products',
                element: <Products />
            }
        ]
    }
])