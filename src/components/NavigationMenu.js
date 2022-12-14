import { Link } from "react-router-dom";

const NavigationMenu = ({ closeMenu }) => {
  return (
    <div>
      <div className="font-bold py-3">App Name</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
