import { useOutletContext, useParams } from "react-router-dom";
import styles from "./Product.module.css";

function Product() {
    const { id } = useParams();
    const { products, addToCartHandler } = useOutletContext();
    const targetItem = products.find((item) => {
        return item.id === +id;
    });

    return (
        <div className={styles.productContainer} id={targetItem.id}>
            <img
                className={styles.image}
                src={targetItem.image}
                alt={targetItem.title}
            />
            <div className="content">
                <div className="product-info">
                    <div className={styles.productTitle}>
                        {targetItem.title}
                    </div>
                    <div className="price">${targetItem.price}</div>
                    <div className="rating">
                        Rating: {targetItem.rating.rate}
                    </div>
                </div>
                <div className="product-description">
                    {targetItem.description} <br /> {""} <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium voluptatem odit quis, corporis aliquid quos
                    voluptas adipisci dolorem. Natus dolores illum architecto
                    exercitationem sapiente quae deleniti! Rem unde, iusto optio
                    officiis mollitia esse vero. Consequatur tenetur minima
                    incidunt. Doloremque dicta magnam architecto, possimus nemo
                    illo laborum velit repellat inventore ex.
                </div>
                <div className="add-to-cart">
                    <button id={targetItem.id} onClick={addToCartHandler}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
