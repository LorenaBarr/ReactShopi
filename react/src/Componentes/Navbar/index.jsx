import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furniture">Furniture</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others">Others</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink>User@shopi.com</NavLink>
        </li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-order">My Order</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>
          <NavLink>🛒 0 </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar