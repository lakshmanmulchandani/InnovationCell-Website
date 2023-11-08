import React from 'react';
import './UpcomingEvents.css'; 
import img09 from"../../imgs/photo09.jpg"
import img08 from"../../imgs/photo08.jpg"
import img10 from"../../imgs/photo10.jpg"
import img11 from"../../imgs/photo11.jpg"


const UpcomingEvents = () => {
return (
<>

<div id="Event" className="EventsHeading">
        <h1>EVENTS</h1>
      </div>

    <div className="about-us-container">
      <div className="about-us-image">
      <img src={img09} alt="Event Image" className="zoom-on-hover"/>
      </div>
      <div className="about-us-content">
        <h2>EVENT NAME</h2>
        <br />
        <p>
          <span><i className="fas fa-calendar-alt"></i> Date: October 30, 2023</span>
          <br />
          <br />
          <span><i className="fas fa-map-marker-alt"></i> Venue: Event Venue</span>
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <br />
        <p>
          <span><i className="fas fa-calendar-alt"></i> Date: October 30, 2023</span>
          <br />
          <br />
          <span><i className="fas fa-map-marker-alt"></i> Venue: Event Venue</span>
          <br />
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="about-us-image02">
        <img src={img10} alt="Event Image" className="zoom-on-hover"/>
      </div>
    </div>

    <div className="about-us-container">
      <div className="about-us-image">
      <img src={img08} alt="Event Image" className="zoom-on-hover"/>
      </div>
      <div className="about-us-content">
        <h2>EVENT NAME</h2>
        <br />
        <p>
          <span><i className="fas fa-calendar-alt"></i> Date: October 30, 2023</span>
          <br />
          <br />
          <span><i className="fas fa-map-marker-alt"></i> Venue: Event Venue</span>
          <br />
          <br />
          Ut enim ad minim veniam, 
        </p>
      </div>
    </div>

    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <br />
        <p>
          <span><i className="fas fa-calendar-alt"></i> Date: October 30, 2023</span>
          <br />
          <br />
          <span><i className="fas fa-map-marker-alt"></i> Venue: Event Venue</span>
          <br />
          <br />
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="about-us-image02">
      <img src={img11} alt="Event Image" className="zoom-on-hover"/>
      </div>
    </div>
</>
)
}

export default UpcomingEvents;




// import React from 'react';
// import './UpcomingEvents.css';
// import img09 from "../../imgs/photo09.jpg";
// import img08 from "../../imgs/photo08.jpg";
// import img10 from "../../imgs/photo10.jpg";
// import img11 from "../../imgs/photo11.jpg";

// const eventData = [
//   {
//     name: "EVENT NAME",
//     date: "October 30, 2023",
//     venue: "Event Venue",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: img09,
//   },
//   {
//       name: "About Us",
//       date: "October 30, 2023",
//       venue: "Event Venue",
//       description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       image: img10,
//   },
//   {
//     name: "Happy",
//     date: "October 30, 2023",
//     venue: "Event Venue",
//     description: "Ut enim ad minim veniam,",
//     image: img08,
//   },
//   {
//     name: "About Us",
//     date: "October 30, 2023",
//     venue: "Event Venue",
//     description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: img11,
//   },
// ];

// const UpcomingEvents = () => {
//   return (
//     <>
//       <div id="Event" className="EventsHeading">
//         <h1>EVENTS</h1>
//       </div>
//       {eventData.map((event, index) => (
//         <div className="about-us-container" key={index}>
//           <div className="about-us-image">
//             <img src={event.image} alt="Event Image" className="zoom-on-hover" />
//           </div>
//           <div className="about-us-content">
//             <h2>{event.name}</h2>
//             <br />
//             <p>
//               <span>
//                 <i className="fas fa-calendar-alt"></i> Date: {event.date}
//               </span>
//               <br />
//               <br />
//               <span>
//                 <i className="fas fa-map-marker-alt"></i> Venue: {event.venue}
//               </span>
//               <br />
//               <br />
//               {event.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default UpcomingEvents;