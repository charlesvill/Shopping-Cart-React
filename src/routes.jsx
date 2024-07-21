import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./components/homepage/HomePage";
import SearchResult from "./components/searchresult/SearchResult"
import ShoppingCart from "./components/cart/ShoppingCart";

const routes = [
  {
    path: "/", 
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <HomePage />
      },
      {
        path: "search-result",
        element: <SearchResult />,
      },
      {
        path: "cart", 
        element: <ShoppingCart />,
      }, 
    ],
  }, 
];

export default routes;
