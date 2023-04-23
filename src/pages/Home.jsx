import { Link } from "react-router-dom";
import Card from "../components/Card";
import FeaturedProject from "../components/FeaturedProject";

export default function Home(props) {
  return (
    <>
      <section className="hero homepage-hero">
        <h1 className="heading-xl">
          I’m Alicia Boyd, a front-end developer and visual designer based in
          Tampa, Florida.
        </h1>
        <div>
          <span>Currently designing over at a leading financial firm.</span>
          <Link to="/about" className="link-primary">
            About Me
          </Link>
        </div>
      </section>

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
            <h3>My developmnet techologies</h3>
            <ul className="skill-bubbles">
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Node</li>
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

      <section className="featured">
        <h2>Featured Projects</h2>
        <FeaturedProject
          title="A monthly budget planner and expense tracker built in React."
          bgColor="#003C8F"
          bgImage="src/assets/feature2-desktop.jpg"
          github="https://github.com/aliciaboyd/budget-planner"
          demo="https://monthly-budgettracker.netlify.app/"
        />
        <FeaturedProject
          title="Branding, packaging and landing page for a tea company concept."
          bgColor="#1F4128"
          bgImage="src/assets/feature1-desktop.jpg"
          github="https://github.com/aliciaboyd/brewell"
          demo="https://aliciaboyd.github.io/brewell/"
        />
      </section>

      <section className="dev-projects">
        <h2>More Development Projects</h2>
        <div className="three-col container">
          <Card
            img="src/assets/project-images/js-games.jpg"
            title="Javascript games"
            desc="A collection of  Javascript games designed in figma and built with vanilla Javascript."
            github="https://github.com/aliciaboyd/Javascript-Games"
            live="https://aliciaboyd.github.io/Javascript-Games/"
          />
          <Card
            img="src/assets/project-images/conference-concept.jpg"
            title="Conference concept"
            desc="Landing page design concept for a digital conference."
            github="https://github.com/aliciaboyd/conference-concept"
            live="https://aliciaboyd.github.io/conference-concept/"
          />
          <Card
            img="src/assets/project-images/agency-concept.jpg"
            title="Agency landing page"
            desc="Landing page design concept for a interior design agency."
            github="https://github.com/aliciaboyd/agency-concept"
            live="https://aliciaboyd.github.io/agency-concept/"
          />
        </div>
      </section>

      <section className="design-projects container">
        <h2>Multidisciplinary design experience</h2>
        <p>Experience working on branding, print and UX/UI design projects.</p>

        <div className="three-col-sm">
          <img
            src="src/assets/project-images/dw-1.jpg"
            alt="Design of a login page"
          />
          <img
            src="src/assets/project-images/dw-2.jpg"
            alt="Landing page design for a financial company"
          />
          <img
            src="src/assets/project-images/dw-3.jpg"
            alt="Stationary design example of a letterhead, folder and business card"
          />
          <img
            src="src/assets/project-images/dw-4.jpg"
            alt="Logo for a personal finance blog"
          />
          <img
            src="src/assets/project-images/dw-5.jpg"
            alt="Design of a login page"
          />
          <img
            src="src/assets/project-images/dw-6.jpg"
            alt="Design of a login page"
          />
        </div>
        <Link to="/about" className="btn-primary">
          My experience
        </Link>
      </section>
    </>
  );
}
