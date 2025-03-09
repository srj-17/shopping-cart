import App from "./App";
import ProductPage from "./components/productPage/ProductPage";
import Cart from "./components/cart/Cart";
import HomePage from "./components/homePage/HomePage.jsx";
import Product from "./components/product/Product.jsx";
import ErrorPage from "./ErrorPage.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "products", element: <ProductPage /> },
            { path: "cart", element: <Cart /> },
            { path: "product/:id", element: <Product /> },
        ],
        errorElement: <ErrorPage />,
    },
];

export default routes;
