import { useState, useEffect } from "react";
import style from "./Scroll.module.css";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Define tu propio valor de umbral
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

  window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id={style.Scroll}
      className={`scroll-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    //   style={{ display: isVisible ? 'block' : 'none' }}
    >
      ^
    </button>
  );
};

export default ScrollButton;
