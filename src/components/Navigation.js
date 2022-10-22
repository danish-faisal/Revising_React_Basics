import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} />
      </span>
      {showMenu && (
        <>
          <div
            className="fixed bg-black-t-50 top-0 left-0 w-full h-full"
            onClick={() => setShowMenu(false)}
          ></div>
          <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
            <NavigationMenu closeMenu={() => setShowMenu(false)} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
