import { useState, useRef, useLayoutEffect } from "react";
import "./fadeIn.css";

export default function FadeIn(props) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useLayoutEffect(() => {
    const visibleObserver = new IntersectionObserver((entites) => {
      entites.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    visibleObserver.observe(domRef.current);
    return () => visibleObserver.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
