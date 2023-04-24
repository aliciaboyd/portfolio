import { Link } from "react-router-dom";
import designImg1 from "/src/assets/project-images/dw-1.jpg";
import designImg2 from "/src/assets/project-images/dw-2.jpg";
import designImg3 from "/src/assets/project-images/dw-3.jpg";
import designImg4 from "/src/assets/project-images/dw-4.jpg";
import designImg5 from "/src/assets/project-images/dw-5.jpg";
import designImg6 from "/src/assets/project-images/dw-6.jpg";

export default function DesignProjects() {
  return (
    <section className="design-projects container">
      <h2>Multidisciplinary design experience</h2>
      <p>Experience working on branding, print and UX/UI design projects.</p>

      <div className="three-col-sm">
        <img
          src={designImg1}
          alt="Design of a login page"
        />
        <img
          src={designImg2}
          alt="Landing page design for a financial company"
        />
        <img
          src={designImg3}
          alt="Stationary design example of a letterhead, folder and business card"
        />
        <img
          src={designImg4}
          alt="Logo for a personal finance blog"
        />
        <img
          src={designImg5}
          alt="Design of a login page"
        />
        <img
          src={designImg6}
          alt="Design of a login page"
        />
      </div>
      <Link to="/about" className="btn-primary">
        My experience
      </Link>
    </section>
  );
}
