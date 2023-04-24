import Card from "../components/Card";
import JSImg from "/src/assets/project-images/js-games.jpg";
import ConferenceImg from "/src/assets/project-images/conference-concept.jpg";
import AgencyImg from "/src/assets/project-images/agency-concept.jpg";

export default function DevProjects() {
  return (
    <section className="dev-projects">
      <h2>More Development Projects</h2>
      <div className="three-col container">
        <Card
          img={JSImg}
          title="Javascript games"
          desc="A collection of  Javascript games designed in figma and built with vanilla Javascript."
          github="https://github.com/aliciaboyd/Javascript-Games"
          live="https://aliciaboyd.github.io/Javascript-Games/"
        />
        <Card
          img={ConferenceImg}
          title="Conference concept"
          desc="Landing page design concept for a digital conference."
          github="https://github.com/aliciaboyd/conference-concept"
          live="https://aliciaboyd.github.io/conference-concept/"
        />
        <Card
          img={AgencyImg}
          title="Agency landing page"
          desc="Landing page design concept for a interior design agency."
          github="https://github.com/aliciaboyd/agency-concept"
          live="https://aliciaboyd.github.io/agency-concept/"
        />
      </div>
    </section>
  );
}
