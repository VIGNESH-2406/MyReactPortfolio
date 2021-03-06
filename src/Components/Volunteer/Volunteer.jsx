import React from "react";
import "./Volunteer.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: props.heading,
      volunteer: [],
    };
    this.getVolunteer = this.getVolunteer.bind(this);
  }

  componentDidMount() {
    this.getVolunteer();

    ScrollTrigger.config({ limitCallbacks: true });
    gsap.from(".volunteer>.entry>*", {
      x: -100,
      autoAlpha: 0,
      ease: "back",
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".volunteer",
        start: "top 50%",
        once: true,
      },
    });
  }

  getVolunteer() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ volunteer: data.volunteer });
        this.getVolunteer();
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { volunteer } = this.state;
    return (
      <section className="volunteer" id="volunteer">
        <div className="entry">
          <h1>Reach Out</h1>
        </div>

        <div className="volunteer-cards">
          {volunteer.map((volunteer, index) => (
            <div key={index} className="volunteer-card">
              <div className="company-details">
                <div className="logo">
                  <img src={volunteer.logo} alt="" />
                </div>
                <div className="volunteer-details">
                  <div className="company-name">{volunteer.Name}</div>
                  <div className="period">
                    <h3>
                      {volunteer.contact} - {volunteer.email}
                    </h3>
                  </div>
                  <div className="company-name">
                    <h3>{volunteer.role}</h3>
                  </div>
                </div>
              </div>
              {/* <ul>
                {volunteer.duty.map((dut, index) => (
                  <li key={index}>{dut}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Volunteer;
