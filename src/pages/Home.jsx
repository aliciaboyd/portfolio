import { Link } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import Intro from "../components/Intro";
import DevProjects from "../components/DevProjects";
import DesignProjects from "../components/DesignProjects";
import FadeIn from "../components/FadeIn";

export default function Home(props) {
  return (
    <>
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
        <Intro />
      </FadeIn>

      <FadeIn>
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
            casestudy="brewell"
            title="Branding, packaging and landing page for a tea company concept."
            bgColor="#1F4128"
            bgImage="src/assets/feature1-desktop.jpg"
            github="https://github.com/aliciaboyd/brewell"
            demo="https://aliciaboyd.github.io/brewell/"
          />
        </section>
      </FadeIn>

      <FadeIn>
        <DevProjects />
      </FadeIn>

      <FadeIn>
        <DesignProjects />
      </FadeIn>
    </>
  );
}
