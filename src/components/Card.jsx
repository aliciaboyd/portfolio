import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card-img-container"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p>{props.desc}</p>
        <div>
          <a
            className="link-blue"
            href={`${props.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
          <a
            className="link-blue"
            href={`${props.live}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
