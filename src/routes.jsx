import App from "./App";
import ProductPage from "./components/productPage/ProductPage";
import Cart from "./components/cart/Cart";
import ErrorPage from "./ErrorPage.jsx";
import HomePage from "./components/homePage/HomePage.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "products", element: <ProductPage /> },
            { path: "cart", element: <Cart /> },
        ],
        errorElement: <ErrorPage />,
    },
];

export default routes;
