import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./constants/index";
import { SectionWrapper } from "./hoc/index";
import "./timeline.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(17, 34, 64, 0.77)",
        color: "#fff",
        boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
        fontFamily: "frozen",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="exp-icon">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className=""
          />
        </div>
      }
    >
      <div className="event-card">
        <div className="event-pic">
          <img
            src={experience.pic}
            alt={experience.company_name}
            className=""
          />
        </div>
        <h3 className="title">{experience.title}</h3>
        <p className="title-p" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="timeline-content">
        {experience.points.map((point, index) => (
          <li key={`${index}`} className="">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const PastEvents = () => {
  return (
    <>
      <div className="timeline-main">
        <div className="eventsheading">
          <h1>Upcoming Events</h1>
        </div>
        <div className="event-card mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.upcoming.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="timeline-main">
        <div className="eventsheading">
          <h1>Past Events</h1>
        </div>
        <div className="event-card mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.past.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(PastEvents, "work");
