import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarang Raulkar </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am graduated from Walchand Institute Of Technology, Solapur from Computer Science And Technology in 2023.
            <br />
            Additionally, I am currently employed as a software Intern at
            Quantian Technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sarang Raulkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
