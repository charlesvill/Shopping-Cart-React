import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Sorry! This page does not exist</h1>
      <Link to="/">
        Homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
