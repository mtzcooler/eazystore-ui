import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faUser,
  faShoppingBasket,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../store/cart-context";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  const { totalQuantity } = useCart();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const theme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return theme;
    });
  };

  const navLinkClass =
    "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter";
  const navLinkIconClass = "relative text-primary py-2 dark:text-light";
  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
        <Link to="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Eazy Stickers</span>
        </Link>
        <nav className="flex items-center py-2 z-10">
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className="w-4 h-4 dark:text-light text-primary"
            />
          </button>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? `text-xl ${navLinkClass}` : navLinkClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `text-xl ${navLinkClass}` : navLinkClass
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `text-xl ${navLinkClass}` : navLinkClass
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) =>
                  isActive ? `fa-lg ${navLinkIconClass}` : navLinkIconClass
                }>
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) =>
                  isActive ? ` fa-lg ${navLinkIconClass}` : navLinkIconClass
                }>
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="text-primary dark:text-light w-6"
                />
                <div className="absolute -top-2 -right-6 text-xs bg-yellow-400 text-black font-semibold rounded-full px-2 py-1 leading-none">
                  {totalQuantity}
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// export default Header;
