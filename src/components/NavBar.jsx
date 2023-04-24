import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [menu, showMenu] = useState(false);

  function revealMenu() {
    showMenu((prevMenu) => !prevMenu);
  }

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  const display = menu ? "block" : "none";

  return (
    <nav className="main-nav">
      <div className="container">
        <Link to="/" className="logo">
          a.boyd
        </Link>
        <button className="menu-btn" onClick={revealMenu}>
          {menu ? "Close" : "Menu"}
        </button>
        <div
          onClick={revealMenu}
          className="mobile-links"
          style={{ display: display }}
        >
          <ul>
            <li className="mobile-link-internal">
              <Link to="/">Home</Link>
            </li>
            <li className="mobile-link-internal">
              <Link to="about">About Me</Link>
            </li>
            <li className="mobile-link-external">
              <a
                href="https://www.linkedin.com/in/aliciaboyddesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="mobile-link-external">
              <a
                href="https://github.com/aliciaboyd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul className="internal-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About Me</Link>
            </li>
          </ul>

          <div className="external-links">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/aliciaboyddesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aliciaboyd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
