import FadeIn from "../components/FadeIn";
import WorkItem from "../components/WorkItem";

export default function About(props) {
  return (
    <div className="container">
      <FadeIn>
        <div className="heading-group">
          <h1>
            I’m Alicia Boyd, an experienced designer and self-taught developer
            who loves crafting digital experiences.
          </h1>

          <a
            href="mailto:aliciaboyddesign@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact Me
          </a>
        </div>
      </FadeIn>
      <FadeIn>
        <section className="about-info">
          <div>
            <p>
              As a multidisciplinary designer, I have an eye for aesthetics with
              an understanding of accessibility and user experience concerns.
              I've worked on a variety of projects, including web design,
              branding, and marketing campaigns. My technical skills include
              proficiency in HTML, CSS, JavaScript, and React. With my
              experience in both design and development, I'm seeking
              opportunites where I can leverage my skill set to build
              exceptional digital products.
            </p>

            <div className="about-currently">
              <h3>Currently</h3>
              <ul>
                <li>Learning: Node JS and Sitecore</li>
                <li>Reading: The Pragmatic Programmer</li>
                <li>Watching: Succession</li>
                <li>Listening to: Renaissance – Beyonce</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <div>
              <h2>Education</h2>
              <span className="bold-title">University of South Florida</span>
              <span>
                Bachelor of Fine Arts, Concentration in Graphic Design
              </span>
            </div>
            <div>
              <h3>My developmnet technologies</h3>
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
      </FadeIn>

      <FadeIn>
        <section className="work-history container">
          <h2>Work History</h2>
          <WorkItem
            bgColor="#002949"
            date="2021 – Present"
            title="Associate Designer"
            desc="Raymond James Financial"
            skills="Sitecore CMS, UI/UX design, graphic design"
          />
          <WorkItem
            bgColor="#36610A"
            date="2020 – 2021"
            title="Graphic Designer"
            desc="WebstaurantStore"
            skills="HTML emails, graphic design"
          />
          <a
            href="https://www.linkedin.com/in/aliciaboyddesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View all my experiences on LinkedIn
          </a>
        </section>
      </FadeIn>
    </div>
  );
}
