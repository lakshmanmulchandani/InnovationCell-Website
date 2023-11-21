import { BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from "react-icons/bs"

import ICellImg from "../../Assets/images/i_cell_logo.png"
import "./Footer.css"


const footerLinks = [
  {
    icon: BsInstagram,
    link: "https://www.instagram.com/"
  },
  {
    icon: BsLinkedin,
    link: "https://www.linkedin.com/"
  },
  {
    icon: BsTwitter,
    link: "https://twitter.com/"
  },
  {
    icon: BsMailbox,
    link: "mailto:info@icell.io"
  },
]


export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-left">
        <div className="footer-left-upper">
          <img src={ICellImg} />
          <p>Innovation Cell</p>
        </div>

        <div className="footer-left-lower">
          <h1>About NIT Raipur</h1>
          <p>
            NIT Raipur is a premier technical institute in India, renowned for its academic excellence and research capabilities. It offers a wide range of undergraduate and postgraduate programs in engineering, science, and humanities. The institute is also known for its vibrant student life and its commitment to social responsibility.
          </p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          {footerLinks.map((links) => (
            <a key={links.icon} href={links.link}>{<links.icon />}</a>
          ))}
        </div>

        <div className="pages">
          <a href="">About</a>
          <a href="">Events</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </section>
  )
}