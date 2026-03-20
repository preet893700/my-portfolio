import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll utility
export const smoothScrollTo = (target: string | number) => {
  const element =
    typeof target === "string" ? document.querySelector(target) : null;

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else if (typeof target === "number") {
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  useEffect(() => {
    // Enable smooth scrolling on the page
    document.documentElement.style.scrollBehavior = "smooth";

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            smoothScrollTo(section);
          }
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          APG
        </a>
        <a
          href="mailto:gulatiamanpreetsingh@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          gulatiamanpreetsingh@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;