import { useOutletContext } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { useNavigate } from "react-router-dom";
import StarsFromRatings from "../Stars";

function ProductPage() {
    const navigate = useNavigate();
    const { products, loading, error } = useOutletContext();

    function handleProductClick(e) {
        const id = e.target.closest(".product-container").id;
        navigate(`/product/${id}`);
    }

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
                            <button
                                className={
                                    styles.productContainer +
                                    " product-container"
                                }
                                id={product.id}
                                onClick={handleProductClick}
                                key={product.id}
                            >
                                <img
                                    className={styles.image}
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className={styles.productInfo}>
                                    <div className={styles.price}>
                                        $ {product.price}
                                    </div>
                                    <div className={styles.title}>
                                        {product.title}
                                    </div>
                                    <div className="rating">
                                        <StarsFromRatings
                                            rating={product.rating.rate}
                                        />
                                    </div>
                                </div>
                            </button>
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
