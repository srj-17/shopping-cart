import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StarsFromRatings from "../Stars";
import styles from "./Product.module.css";

function Product() {
    const { id } = useParams();
    const { products, addToCartHandler } = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const targetItem = products.find((item) => {
        return item.id === +id;
    });

    function onQuantityChange(e) {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        if (addedToCart) {
            setTimeout(() => {
                setAddedToCart(false);
            }, 1000);
        }
        // doesn't have code to make it out of sync
        // but that's not needed here
        // because we only want to run effect to synchronisze
        // the component when the cart is set to false,
        // and we don't need to return a function to cleanup after
        // its set to false
    }, [addedToCart]);

    return (
        <div className={styles.productContainer} id={targetItem.id}>
            <img
                className={styles.image}
                src={targetItem.image}
                alt={targetItem.title}
            />
            <div className={styles.productContent}>
                <div className={styles.productInfo}>
                    <div className={styles.productTitle}>
                        {targetItem.title}
                    </div>
                    <div className={styles.price}>$ {targetItem.price}</div>
                    <div className="rating">
                        <StarsFromRatings rating={targetItem.rating.rate} />
                    </div>
                </div>
                <div className={styles.productDescription}>
                    {targetItem.description.toUpperCase().at(0) +
                        targetItem.description.slice(1)}
                    <br /> {""} <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium voluptatem odit quis, corporis aliquid quos
                    voluptas adipisci dolorem. Natus dolores illum architecto
                    exercitationem sapiente quae deleniti! Rem unde, iusto optio
                    officiis mollitia esse vero.
                </div>
                <form className={styles.addToCartContainer}>
                    <label htmlFor="quantity" className={styles.quantityLabel}>
                        Quantity{" "}
                        <input
                            id="quantity"
                            type="number"
                            className={styles.quantity}
                            value={quantity}
                            onChange={onQuantityChange}
                            min="1"
                            required
                        />
                    </label>

                    <button
                        id={targetItem.id}
                        onClick={(e) => {
                            if (quantity) {
                                addToCartHandler(e, id, quantity);
                                setAddedToCart(true);
                            }
                        }}
                        className={styles.addToCartButton}
                    >
                        {addedToCart ? (
                            <span className={styles.addedInfo}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-sparkles"
                                >
                                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                    <path d="M20 3v4" />
                                    <path d="M22 5h-4" />
                                    <path d="M4 17v2" />
                                    <path d="M5 18H3" />
                                </svg>
                            </span>
                        ) : (
                            ""
                        )}
                        Add to cart
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Product;
