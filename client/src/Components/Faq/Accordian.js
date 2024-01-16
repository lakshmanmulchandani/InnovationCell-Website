import React, { useRef, useState } from "react";
import data from "./AccordianData";
import { RiArrowDropDownLine } from "react-icons/ri";
import MAN2 from "../../imgs/MAN2.png";
import "./Accordian.css";

//  accordion item component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
                {answer.map((value, index) => (
          <p key = {`${index}`} className="answer-content">{value}</p>
        ))}

        {/* <p className="answer-content">{answer}</p> */}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="acc-main">
      <div className="teamHeading FAQ-heading">
        <h1>FAQ</h1>
      </div>

      <div className="acc-container">
        <div className="acc-img"> 
          <img
            className="snowman"
            src={MAN2}
            alt="snowman"
          />
        </div>
        <div className="container">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Accordion;