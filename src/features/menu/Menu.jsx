import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // concept using "render as you fetch" using hook "useLoaderData"
  const menuData = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menuData.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// following export is the "Named export" of the function
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

//following is the "default export" of the function component Menu
export default Menu;
