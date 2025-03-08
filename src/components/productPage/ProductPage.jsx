import { useOutletContext } from "react-router-dom";
import styles from "./ProductPage.module.css";

function ProductPage() {
    const { products, loading, error, addToCartHandler } = useOutletContext();

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
                                <div className="add-to-cart">
                                    <button
                                        id={product.id}
                                        className={styles.button}
                                        onClick={addToCartHandler}
                                    >
                                        Add to cart
                                    </button>
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
