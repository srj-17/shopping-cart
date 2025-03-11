import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="error-page">
            <h1> Oops </h1>
            <p>
                An Expected Error Occured, <Link to="/">Click here</Link> to
                return to homepage.
            </p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}

export default ErrorPage;
