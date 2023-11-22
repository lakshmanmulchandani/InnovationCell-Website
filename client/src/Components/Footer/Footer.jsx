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
    <footer>
      <div className="footer-logo">
        <img src={ICellImg} alt="Icell Logo" />
        <h2>Innovation Cell</h2>
      </div>

      <div className="about-container container">
        <h1>I-Cell</h1>

        <div className="about">
          <a className="footer-a" href="#aboutusnav">
            About Us
          </a>
          <a className="footer-a" href="#eventsnav">
            Events
          </a>
          <a className="footer-a" href="#spons">
            Sponsors
          </a>
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
            <BsPinMapFill style={{ margin: "1px 15px 0 0", scale: "150%" }} />
            <span>NIT Raipur, Raipur, CG 492013</span>
          </a>

          <a href="mailto:info@icell.io" target="_blank" rel="noreferrer">
            <BsEnvelope style={{ margin: "1px 15px 0 0", scale: "150%" }} />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="social-container">
        <h1>Let&apos;s Connect</h1>

        <div className="socials">
          {footerLinks.map((links, idx) => (
            <a key={idx} href={links.link} target="_blank">
              <links.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
