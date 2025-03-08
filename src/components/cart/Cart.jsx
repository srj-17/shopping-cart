import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
    const { cart } = useOutletContext();

    return (
        <div className="carts-page">
            <header className={styles.header}>User Cart</header>
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
