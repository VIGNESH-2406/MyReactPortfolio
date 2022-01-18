import React, { Component } from "react";
import "./Hero.css";
import Photo from "../../Assets/Images/pp.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: props.loaded,
    };
  }

  componentDidMount() {
    let TL = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top 50%",
          end: "bottom top",
          toggleActions: "restart none none reset",
        },
      })
      .from(
        ".image>img",
        { y: 100, opacity: 0, ease: "back", duration: 1 },
        "<1"
      )
      .from(
        ".about>*",
        { x: -100, opacity: 0, ease: "back", duration: 1, stagger: 0.2 },
        "<1"
      );
    TL.pause();
    if (this.state.loaded) {
      TL.play();
    }
  }

  componentWillReceiveProps({ loaded }) {
    this.setState({ loaded });
  }

  render() {
    return (
      <section className="hero animated fadeIn" id="hero">
        <div className="row">
          <div className="about">
            <h4 className="compliment">
              Hey THERE{" "}
              <span role="img" aria-label="Hi!">
                🙂
              </span>
              , I'm
            </h4>
            <h1 className="intro">Vignesh Paulraj</h1>
            <p className="bio">
              I'm a web developer and brand identity designer with good
              experience in building sleek and scalable user interface,
              designing unique brand identities and building optimal backend
              systems.
            </p>
            <div className="hero-cta">
              <ul className="socials">
                {/* <li>
                  <a href="https://twitter.com/Vahlcode">
                    <span className="icon icon-moontwitter"></span>
                  </a>
                </li> */}
                <li>
                  <a
                    title="Github"
                    href="https://github.com/VIGNESH-2406"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon icon-moongithub"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1eSRS4Fs7bV3Y56_xQU3RlcABFfQw-Bny/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Resume"
                  >
                    <span className="icon icon-moonfile-pdf"></span>
                  </a>
                </li>
                {/* <li>
                  <a href="https://dev.to/vahlcode">
                    <span className="icon icon-moonfeed"></span>
                  </a>
                </li> */}
              </ul>
              <a href="#portfolio">
                <span>
                  Read About Me{" "}
                  <span className="icon icon-moonarrow-down2"></span>
                </span>
              </a>
            </div>
          </div>
          <div className="image">
            <img src={Photo} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
