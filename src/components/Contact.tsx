import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:gulatiamanpreetsingh@gmail.com" data-cursor="disable">
                gulatiamanpreetsingh@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Master of Computer Application — Sastra University</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Aman-Preet-Singh-Gulati"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-preet-singh-gulati"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://medium.com/@gulatiamanpreetsingh"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Medium <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Aman Preet Singh Gulati</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
