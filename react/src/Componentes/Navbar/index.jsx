import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  const handleCategoryClick = (category) => {
    context.setSearchByCategory(category);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-[#fafafa]">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => handleCategoryClick("")}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleCategoryClick("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleCategoryClick("jewelery")}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleCategoryClick("men's clothing")}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleCategoryClick("women's clothing")}
          >
            Women's Clothing
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">User@Shopi.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
