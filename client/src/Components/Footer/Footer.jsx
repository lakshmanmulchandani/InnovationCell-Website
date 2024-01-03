// import {
//   BsInstagram,
//   BsLinkedin,
//   BsTwitter,
//   BsPinMapFill,
//   BsEnvelope,
//   BsYoutube,
// } from "react-icons/bs";

// import "./Footer.css";
// import ICellImg from "../../Assets/images/i_cell_logo.png";

// const footerLinks = [
//   {
//     icon: BsLinkedin,
//     link: "https://www.linkedin.com/company/innovation-cell-nit-raipur/mycompany/",
//   },
//   {
//     icon: BsInstagram,
//     link: "https://www.instagram.com/innovation_cell.nitrr/",
//   },
//   {
//     icon: BsTwitter,
//     link: "https://twitter.com/I_Cell_NITRR",
//   },
//   {
//     icon: BsYoutube,
//     link: "https://youtube.com/@innovationnitraipur4631?si=6bdai9SuxaTjotyq",
//   },
// ];

// export default function Footer() {
//   return (
//     <>
//       <footer className="footer">
//         <div className="upper-section">
//           <div className="footer-logo">
//             <img src={ICellImg} alt="Icell Logo" />
//             <h2>Innovation Cell</h2>
//           </div>

//           <div className="about-container container">
//             <h1>I-Cell</h1>

//             <div className="about">
//               <a href="#aboutusnav">About Us</a>
//               <a href="#eventsnav">Events</a>
//               <a href="#spons">Sponsors</a>
//               <a href="#team">Team</a>
//             </div>
//           </div>

//           <div className="container">
//             <h1>Contact</h1>

//             <div className="contacts">
//               <a
//                 href="https://maps.app.goo.gl/EWSsuCfKTZvQZBxCA"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <BsPinMapFill
//                   style={{ margin: "0px 10px 0 0", scale: "120%" }}
//                 />
//                 <span>NIT Raipur, Raipur, CG 492013</span>
//               </a>

//               <a href="mailto:info@icell.io" target="_blank" rel="noreferrer">
//                 <BsEnvelope style={{ margin: "0px 10px 0 0", scale: "120%" }} />
//                 <span>Email</span>
//               </a>
//             </div>
//           </div>

//           <div className="social-container">
//             <h1>Let&apos;s Connect</h1>

//             <div className="socials">
//               {footerLinks.map((link) => (
//                 <a href={link.link} key={link.link} target="_blank">
//                   <link.icon />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <hr style={{ width: "auto" }} />

//         <div className="lower-section">
//           <h1>
//             Made with ❣️ by <span>Tech Team</span>
//           </h1>
//         </div>
//       </footer>
//     </>
//   );
// }

import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsPinMapFill,
  BsEnvelope,
  BsYoutube,
} from "react-icons/bs";

import "./Footer.css";
import ICellImg from "../../Assets/images/i_cell_logo.png";

const footerLinks = [
  {
    icon: BsLinkedin,
    link: "https://www.linkedin.com/company/innovation-cell-nit-raipur/mycompany/",
  },
  {
    icon: BsInstagram,
    link: "https://www.instagram.com/innovation_cell.nitrr/",
  },
  {
    icon: BsTwitter,
    link: "https://twitter.com/I_Cell_NITRR",
  },
  {
    icon: BsYoutube,
    link: "https://youtube.com/@innovationnitraipur4631?si=6bdai9SuxaTjotyq",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="upper-section">
          <div className="footer-logo">
            <img src={ICellImg} alt="Icell Logo" />
            <h2>Innovation Cell</h2>
          </div>

          <div className="about-container container">
            <h1>I-Cell</h1>

            <div className="about">
              <a href="#aboutusnav">About Us</a>
              <a href="#eventsnav">Events</a>
              <a href="#spons">Sponsors</a>
              <a href="#team">Team</a>
            </div>
          </div>

          <div className="container">
            <h1>Contact</h1>

            <div className="contacts">
              <a
                href="https://maps.app.goo.gl/EWSsuCfKTZvQZBxCA"
                target="_blank"
                rel="noreferrer"
              >
                <BsPinMapFill
                  style={{ margin: "0px 10px 0 0", scale: "120%" }}
                />
                <span>NIT Raipur, Raipur, CG 492013</span>
              </a>

              <a href="mailto:info@icell.io" target="_blank" rel="noreferrer">
                <BsEnvelope style={{ margin: "0px 10px 0 0", scale: "120%" }} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="social-container">
            <h1>Let&apos;s Connect</h1>

            <div className="socials">
              {footerLinks.map((link) => (
                <a href={link.link} key={link.link} target="_blank">
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr style={{ width: "auto" }} />

        <div className="lower-section">
          <h1>
            Made with ❣️ by <span>Tech Team</span>
          </h1>
        </div>
      </footer>
    </>
  );
}
