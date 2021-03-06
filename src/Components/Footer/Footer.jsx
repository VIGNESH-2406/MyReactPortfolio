import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="contact">
          {/* <a href="#portfolio">
            <span>
              Read About Me <span className="icon icon-moonarrow-down2"></span>
            </span>
          </a>
          <a href="#hero">
            <span className="icon icon-moonmail4"></span> Back To Top
          </a> */}
          <br />

          <ul className="socials">
            <li>
              <a
                href="https://drive.google.com/file/d/1eSRS4Fs7bV3Y56_xQU3RlcABFfQw-Bny/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-moonfile-pdf"></span>
              </a>
            </li>
            {/* <li> */}
            {/* <a
                href="https://twitter.com/Vahlcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-moontwitter"></span>
              </a> */}
            {/* </li> */}
            <li>
              <a
                href="https://github.com/VIGNESH-2406"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-moongithub"></span>
              </a>
            </li>
            {/* <li> */}
            {/* <a
                href="https://dev.to/vahlcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-moonfeed"></span>
              </a> */}
            {/* </li> */}
          </ul>
        </div>
        <p>
          Designed and Written with{" "}
          <span className="icon icon-moonheart"></span> in Bombay by
          <a
            href="https://twitter.com/Vahlcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vignesh Paulraj
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
