import styles from "./Cart.module.css";

function closeDialog(e) {
    e.preventDefault();
    const dialog = document.querySelector(".checkout-dialog");
    dialog.close();
}

function CheckOutDialog() {
    return (
        <dialog className={styles.checkoutDialog + " checkout-dialog "}>
            <div className="dialog-content">You have placed your order!</div>
            <div className="close-button-container">
                <button
                    className="checkout-dialog-close-button"
                    onClick={closeDialog}
                >
                    Close
                </button>
            </div>
        </dialog>
    );
}

export default CheckOutDialog;
