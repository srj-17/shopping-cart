import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.homepage}>
            <div className={styles.content}>
                <header className={styles.contentHeader}>Kapada</header>
                Get clothes that best suit you <br /> At the best prices.
            </div>
        </div>
    );
}

export default HomePage;
