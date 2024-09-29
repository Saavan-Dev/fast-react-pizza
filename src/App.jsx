import Cart from "./features/cart/Cart";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Home from "./ui/Home";
import Error from "./ui/Error";
import CreateOrder, {
  action as CreateOrderAction,
} from "./features/order/CreateOrder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

//concept using "render as you fetch" using "MenuLoader" property of child route
const router = createBrowserRouter([
  {
    element: (
      <AppLayout />
    ) /*as we are able to see this component has no route given to so technically its called as "Layout route" */,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />, //need to add error element where the data loading is occuring in order to keep layout intect,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
