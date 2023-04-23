import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="container">
          <Link to="/" className="logo">
            a.boyd
          </Link>
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
      <div className="container">
        <p>
          Open to freelance opportunities, contact me at{" "}
          <a href="mailto:aliciaboyddesign@gmail.com">
            aliciaboyddesign@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
