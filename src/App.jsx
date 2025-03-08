import "./App.css";
import NavBar from "./components/navbar/NavBar.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
