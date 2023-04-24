import { Link } from "react-router-dom";
import "./featuredProject.css";

export default function FeaturedProject(props) {
  let backgroundImageURL = props.bgImage;

  return (
    <div
      className="feature-block"
      style={{
        backgroundColor: `${
          props.bgColor ? props.bgColor : "var(--link-blue)"
        }`,
        backgroundImage: `url(${backgroundImageURL})`,
      }}
    >
      <div>
        <p className="feature-title">{props.title}</p>
        {/* <Link to={`/featured/${props.url}`}>Case study</Link> */}
        <a
          className="link-white"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
        <a
          className="link-white"
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
