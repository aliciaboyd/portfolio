import CaseStudy from "./CaseStudy";
import FadeIn from "../components/FadeIn";
import WebsitePreviewImg from "../components/WebsitePreviewImg";

export default function Brewell() {
  return (
    <CaseStudy
      title="Branding, packaging and landing page for a tea company concept."
      github="https://github.com/aliciaboyd/brewell"
      live="https://aliciaboyd.github.io/brewell/"
      desc="Brewell is an organic tea company that offers an array of products
      from loose leaf tea to organic gummies and chocolate. In this
      concept, I wanted to design a full brand experience from logo to
      website presence for a contemporary product company. I illustrated
      the floral elements that are dispersed through the various brand
      assets. With organic shapes and structured serif type, these
      elements are combined to create a modern brand identity."
    >
      <FadeIn>
        <WebsitePreviewImg>
          <img src="/src/assets/project-images/Brewell-HeroPreview.jpg" />
        </WebsitePreviewImg>
      </FadeIn>
      <FadeIn>
        <img
          className="img-full-width"
          src="/src/assets/project-images/Brewell-Presentation-01.jpg"
        />
      </FadeIn>
      <FadeIn>
        <img
          className="img-full-width"
          src="/src/assets/project-images/Brewell-Presentation_logos.jpg"
        />
      </FadeIn>
      <FadeIn>
        <img
          className="img-full-width"
          src="/src/assets/project-images/Brewell-Presentation_bags.jpg"
        />
      </FadeIn>
      <FadeIn>
        <img
          className="img-full-width"
          src="/src/assets/project-images/Brewell-Presentation_floating.jpg"
        />
      </FadeIn>
      <FadeIn>
        <img
          className="img-full-width"
          src="/src/assets/project-images/Brewell-Presentation-05.jpg"
        />
      </FadeIn>
    </CaseStudy>
  );
}
