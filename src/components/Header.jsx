import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faUser,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const navLinkClass = "text-center text-lg font-primary font-semibold text-primary py-2"
  const navLinkIconClass = "text-primary py-2";
  return (
    <header className="border-b border-gray-300 sticky top-0 z-20 bg-gray-100">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
        <a href="/" className="text-center text-lg font-primary font-semibold text-primary py-2">
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Eazy Stickers</span>
        </a>
        <nav className="flex items-center py-2 z-10">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className={navLinkClass}>
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
