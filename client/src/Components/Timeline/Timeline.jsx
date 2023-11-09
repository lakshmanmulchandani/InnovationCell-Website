import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import "react-vertical-timeline-component/style.min.css";

import { styles } from "./styles";
import { experiences } from "./constants/index";
import { SectionWrapper } from "./hoc/index";

import "./timeline.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "rgba(255, 255, 255, 0.4)", // Change background
        // background: "#383E56",
        background: "rgb(17, 34, 64, 0.77)",
        color: "#fff",
        boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)", // Add boxShadow property
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className=" exp-icon ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className=""
          />
        </div>
      }
    >
      <div className="event-card">
        <div className=" event-pic ">
          <img
            src={experience.pic}
            alt={experience.company_name}
            className=""
          />
        </div>
        <h3 className="title text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className=" title-p text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="timeline-content mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="timeline-main">
   
        <div className="maker__container teamHeading ">
          <h1>Events</h1>
        </div>
        <div className="event-card  mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
