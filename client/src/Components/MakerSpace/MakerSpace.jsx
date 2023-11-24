import React from "react";
import Projects from "./Projects";
import "./Makerspace.css";
import makerspaceimg from "../../imgs/MakerspaceImg.jpg";
import slides from "./Data/memories.json";
import Memories from "./Memories";
import data from "./Data/Projects.json";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Contact from "../ContactUs/Contact";

const MakerSpace = () => {
  return (
    <>
      <Navbar2 />
      <div className="maker__container teamHeading">
        <h1>MakerSpace</h1>
        <div className="maker__about">
          <div className="maker__about_content">
            <div>
              <h2>About Us</h2>
              <div className="Arrow"></div>
            </div>
            <p>
              Makerspace at NIT Raipur is set up on the theme of Open Community
              Technology Development Culture to promote mainly frugal
              innovations.
            </p>
            <p>
              {" "}
              It is set up to provide working ecosystem to prospective
              entrepreneurs of NIT Raipur. Once the raw and innovative ideas
              will start taking shapes, they will be incubated in a proper
              system of Technology Business Incubator (TBI).
            </p>
          </div>
          <div className="maker__img">
            <img src={makerspaceimg} alt="MakerSpace images" />
          </div>
        </div>
        <div className="maker__projects teamHeading">
          <h1>Want to know what we have done ?</h1>
          <div className="maker_project">
            {data.projects.map((project, idx) => (
              <Projects
                src={project.src}
                alt={project.alt}
                title={project.title}
                text={project.text}
                techstack={project.techstack}
                key={idx}
              />
            ))}
          </div>
        </div>
        <div className="memories__section teamHeading">
          <h1>Some of the Glimps of our previous events</h1>
          <Memories data={slides} />
        </div>
      </div>
<<<<<<< HEAD
      <div className="memories__section teamHeading">
        <h1>Some of the Glimps of our previous events</h1>
        <Memories data={slides} />
      </div>

      </div>
      </div>
=======
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </>
>>>>>>> c569fa5da955a7a909a61284c133c60a5180496c
  );
};

export default MakerSpace;
