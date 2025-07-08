import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Made with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="footer-icon"
            aria-hidden="true"
          />{" "}
          by
          <a
            href="https://github.com/mtzcooler"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            mtzcooler
          </a>
        </p>
      </div>
    </footer>
  );
}
