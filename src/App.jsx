import "./App.css";
import NavBar from "./components/navbar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function useProducts() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (response.status >= 400) throw new Error("server error");
                return response.json();
            })
            .then((JSONResponse) => {
                // only return clothing data
                const requiredData = JSONResponse.filter((data) => {
                    if (/clothing/i.test(data.category)) return true;
                }).map((data) => {
                    return {
                        id: data.id,
                        title: data.title,
                        description: data.description,
                        price: data.price,
                        rating: data.rating,
                        image: data.image,
                    };
                });
                setProducts(requiredData);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return { products, error, loading };
}

function App() {
    const { products, error, loading } = useProducts();
    // the whole app is updated everytime something is added to
    // the cart, which is bad design ofc, need to fix
    // we could also use a set here
    const [cart, setCart] = useState([]);

    function addToCartHandler(e, id, quantity) {
        e.preventDefault();
        id = +id;
        quantity = +quantity;

        const targetProduct = products.find((product) => {
            return product.id === id;
        });

        // if the targetproduct already exists in the cart, just increase its count
        if (cart.find((item) => item.id === id)) {
            const newCart = cart.map((item) => {
                if (item.id === id)
                    return { ...item, count: item.count + quantity };
                else return item;
            });

            setCart(newCart);
        } else {
            setCart([...cart, { ...targetProduct, count: quantity }]);
        }
    }

    const totalCartProducts = cart.reduce((sum, item) => {
        return sum + item.count;
    }, 0);

    return (
        <div data-testid="container" className="container">
            <NavBar cartProductsCount={totalCartProducts} />
            <Outlet
                context={{
                    products,
                    error,
                    loading,
                    addToCartHandler,
                    cart,
                    setCart,
                }}
            />
        </div>
    );
}

export default App;
