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
            Welcome to NIT Raipur's Makerspace, a vibrant hub where innovation thrives amid cutting-edge technology. Explore a playground designed to empower inventors, entrepreneurs, and curious minds, providing the tools to turn ideas into reality.
            </p>
            <p>
              {" "}
              Our collaborative environment fosters interdisciplinary teamwork, uniting engineers, designers, and enthusiasts. The Makerspace is more than a physical space; it's a community dedicated to exploration, learning, and pushing the boundaries of what's possible. Join us on a journey of discovery and let the Makerspace launch your next big idea!
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
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </>
  );
};

export default MakerSpace;
