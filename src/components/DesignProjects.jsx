import { Link } from "react-router-dom";

export default function DesignProjects() {
  return (
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
  );
}
