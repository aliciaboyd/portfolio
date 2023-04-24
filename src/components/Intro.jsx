import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="intro">
      <div className="link-group">
        <div className="container">
          <h2>Design + Development</h2>
          <Link to="/about" className="btn-primary">
            About me
          </Link>
        </div>
      </div>

      <div className="container two-col">
        <p>
          I'm a multidisciplinary designer and self-taught developer with a
          Bachelor's degree in Graphic Design. My passion for both design and
          coding has given me a unique perspective on how the two fields can
          work together to create digital experiences.
        </p>

        <div className="intro-skills">
          <h3>My development stack</h3>
          <ul className="skill-bubbles">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            {/* <li>Node</li> */}
            <li>React</li>
            <li>Git and Github</li>
          </ul>

          <h3>My design tools</h3>
          <ul className="skill-bubbles">
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Indesign</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
