import { useState } from "react";

function CheckOutDialog() {
    const [visibility, setVisibility] = useState(false);

    return (
        <dialog className="checkout-dialog">
            <div className="dialog-content">You have placed your order!</div>
        </dialog>
    );
}
