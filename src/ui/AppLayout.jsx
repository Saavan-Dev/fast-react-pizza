import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl overflow-auto">
          {/* //Layout of the App where we are going to show all of the child routes to make it accessible on the UI*/}

          {/* TO SHOW CHILD ROUTE RELATED COMPONENTS RENDERED HERE!! */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
