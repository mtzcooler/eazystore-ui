import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faUser,
  faShoppingBasket,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

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
  const navLinkIconClass = "text-primary py-2 dark:text-light";
  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
        <a href="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Eazy Stickers</span>
        </a>
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
              <a href="/home" className={navLinkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={navLinkClass}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className={navLinkClass}>
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className={navLinkIconClass}>
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li>
              <a href="/cart" className={navLinkIconClass}>
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// export default Header;
