import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./components/homepage/HomePage";
import ShoppingCart from "./components/shopping-cart/cart";
import GameProfile from "./components/gameProfile/gameProfile";

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
        path: "cart", 
        element: <ShoppingCart />,
      }, 
      {
        path: "games/:slug",
        element: <GameProfile />,
      },
    ],
  }, 
];

export default routes;
