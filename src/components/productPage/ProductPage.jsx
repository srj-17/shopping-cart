import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";

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

function ProductPage() {
    const { products, loading, error } = useProducts();

    if (error)
        return (
            <div className="error-status">
                An error has occured when getting products.
            </div>
        );

    if (loading) return <div className="loading-indicator">Loading...</div>;

    return (
        <div className="product-page">
            <header className={styles.header}>Products</header>
            {products ? (
                <div className={styles.productsContainer}>
                    {products.map((product) => {
                        return (
                            <div
                                className={styles.productContainer}
                                key={product.id}
                            >
                                <img
                                    className={styles.image}
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className="product-info">
                                    <div className="price">
                                        ${product.price}
                                    </div>
                                    <div className="title">{product.title}</div>
                                    <div className="rating">
                                        Rating: {product.rating.rate}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                "There are no products bruv!"
            )}
        </div>
    );
}

export default ProductPage;
