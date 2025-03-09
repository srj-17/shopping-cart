import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CheckOutDialog from "./CheckoutDialog";
import { roundedValue } from "../../utilFunctions";
import StarsFromRatings from "../Stars";

function Cart() {
    const { cart, setCart } = useOutletContext();

    function checkOut() {
        const dialog = document.querySelector(".checkout-dialog");
        dialog.showModal();
        setCart([]);
    }

    const totalProducts = cart.reduce((sum, item) => {
        return sum + item.count;
    }, 0);

    const totalPrice = cart.reduce((price, item) => {
        const itemCount = item.count;
        const itemPrice = item.price;
        return price + itemCount * itemPrice;
    }, 0);

    return (
        <div className={styles.cartsPage}>
            <header className={styles.header}>User Cart</header>
            {cart.length !== 0 ? (
                <div className={styles.checkoutContainer}>
                    <div className={styles.checkoutInfo}>
                        <div className="product-count">
                            Number of products purchased:
                            <span className={styles.productsCount}>
                                {" "}
                                {totalProducts}{" "}
                            </span>
                        </div>
                        <div className="total-price">
                            Total Price:
                            <span className={styles.price}>
                                {" "}
                                $ {roundedValue(totalPrice, 1)}{" "}
                            </span>
                        </div>
                    </div>
                    <div className="checkout-btn-container">
                        <button
                            className={styles.checkoutButton}
                            onClick={checkOut}
                        >
                            Check Out
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className={styles.cartContainer}>
                {cart.length !== 0 ? (
                    cart.map((item) => {
                        return (
                            <div
                                key={item.id}
                                id={item.id}
                                className={styles.cartItemContainer}
                            >
                                <img
                                    className={styles.image}
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className={styles.productInfo}>
                                    <div className={styles.price}>
                                        $ {item.price}
                                    </div>
                                    <div className={styles.title}>
                                        {item.title}
                                    </div>
                                    <div className="rating">
                                        <StarsFromRatings
                                            rating={item.rating.rate}
                                        />
                                    </div>
                                    <div className={styles.count}>
                                        Quantity: {item.count}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div class={styles.emptyCart}>
                        Cart is empty!
                        <br />
                        ¯\_(ツ)_/¯
                    </div>
                )}
            </div>
            <CheckOutDialog />
        </div>
    );
}

export default Cart;
