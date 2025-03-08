import "./App.css";
import NavBar from "./components/navbar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
    const [cart, setCart] = useState([]);
    function addToCartHandler(e) {
        const productId = e.target.id;
    }

    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
