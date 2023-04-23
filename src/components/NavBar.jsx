import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <div className="container">
        <span
          className="logo"
          aria-label="Alicia Boyd - Designer and Developer"
        >
          a.boyd
        </span>
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
