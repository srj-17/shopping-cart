import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ cartProductsCount }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" className={styles.link}>
                    Kapada
                </Link>
            </div>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link className={styles.link} to="/">
                        Home
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to="products">
                        Products
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to="cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-shopping-cart"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        <div className={styles.cartProductsCount}>
                            {cartProductsCount}
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

NavBar.propTypes = {
    cartProductsCount: PropTypes.number,
};

export default NavBar;
