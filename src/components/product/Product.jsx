import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Product.module.css";

function Product() {
    const { id } = useParams();
    const { products, addToCartHandler } = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    const targetItem = products.find((item) => {
        return item.id === +id;
    });

    function onQuantityChange(e) {
        setQuantity(e.target.value);
    }

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
                    <div className="price">${targetItem.price}</div>
                    <div className="rating">
                        Rating: {targetItem.rating.rate}
                    </div>
                </div>
                <div className={styles.productDescription}>
                    {targetItem.description} <br /> {""} <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium voluptatem odit quis, corporis aliquid quos
                    voluptas adipisci dolorem. Natus dolores illum architecto
                    exercitationem sapiente quae deleniti! Rem unde, iusto optio
                    officiis mollitia esse vero.
                </div>
                <form className={styles.addToCartContainer}>
                    <input
                        type="number"
                        className="quantity"
                        value={quantity}
                        onChange={onQuantityChange}
                        min="1"
                        required
                    />
                    <button
                        id={targetItem.id}
                        onClick={(e) => {
                            if (quantity) addToCartHandler(e, id, quantity);
                        }}
                    >
                        Add to cart
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Product;
