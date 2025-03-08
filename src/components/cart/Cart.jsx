import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
    const { cart } = useOutletContext();

    const totalProducts = cart.reduce((price, item) => {
        return price + item.count;
    }, 0);

    const totalPrice = cart.reduce((price, item) => {
        const itemCount = item.count;
        const itemPrice = item.price;
        return price + itemCount * itemPrice;
    }, 0);

    return (
        <div className="carts-page">
            <header className={styles.header}>User Cart</header>
            {cart.length !== 0 ? (
                <div className="checkout-container">
                    <div className="checkout-info">
                        <div className="product-count">
                            Number of products purchased: {totalProducts}
                        </div>
                        <div className="total-price">
                            Total Price: {totalPrice}
                        </div>
                    </div>
                    <div className="checkout-btn-container">
                        <button className="checkoutButton" onClick={checkOut}>
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className={styles.cartContainer}>
                {cart.length !== 0
                    ? cart.map((item) => {
                          return (
                              <div
                                  key={item.id}
                                  className={styles.cartItemContainer}
                              >
                                  <img
                                      className={styles.image}
                                      src={item.image}
                                      alt={item.title}
                                  />
                                  <div className="product-info">
                                      <div className="price">${item.price}</div>
                                      <div className="title">{item.title}</div>
                                      <div className="rating">
                                          Rating: {item.rating.rate}
                                      </div>
                                      <div className="count">
                                          Count: {item.count}
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : "Cart is empty"}
            </div>
        </div>
    );
}

export default Cart;
