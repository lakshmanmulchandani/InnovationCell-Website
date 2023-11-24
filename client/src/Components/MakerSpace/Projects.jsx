import React, { useEffect } from "react";
import "./Project.css";
import vanillatilt from "vanilla-tilt";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = (props) => {
  useEffect(() => {
    vanillatilt.init(document.querySelectorAll(".Projects__card"), {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);
  return (
      <div className="Projects__card">
        <div className="Project__img__container">
          <img src={props.src} alt={props.src} className="Project-img" />
        </div>
        <div className="Project_card_content">
          <div className="project__icons">
            <span>
              <FaGithub />
            </span>
            <span>
              <FaExternalLinkAlt />
            </span>
          </div>
          <div className="Project_text_content">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className="Project__techstack">
              <p>{props.techstack}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
