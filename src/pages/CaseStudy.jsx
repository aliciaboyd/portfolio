import "./caseStudy.css";
import { Link } from "react-router-dom";

export default function CaseStudy(props) {
  return (
    <div className="casestudy container">
      <h1>{props.title}</h1>

      <div className="casestudy-info">
        <div className="casestudy-links">
          <a
            href={props.live}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <a
            href={props.github}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
      </div>
      <div className="align-center">
        {props.children}
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
