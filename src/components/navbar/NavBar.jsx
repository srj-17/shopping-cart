import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
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
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
