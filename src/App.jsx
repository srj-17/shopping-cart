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

    function addToCartHandler(e) {
        e.preventDefault();
        const productId = +e.target.id;
        const targetProduct = products.find((product) => {
            return product.id === productId;
        });

        // if the targetproduct already exists in the cart, just increase its count
        if (cart.find((item) => item.id === productId)) {
            const newCart = cart.map((item) => {
                if (item.id === productId)
                    return { ...item, count: item.count + 1 };
                else return item;
            });

            setCart(newCart);
            console.log(newCart);
        } else {
            setCart([...cart, { ...targetProduct, count: 1 }]);
        }
    }

    return (
        <div className="container">
            <NavBar />
            <Outlet
                context={{ products, error, loading, addToCartHandler, cart }}
            />
        </div>
    );
}

export default App;
