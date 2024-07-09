import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Container fluid className="footer">
        <Row className="justify-content-between">
          <Col md="4" className="footer-copywright">
            <span>
              <b>Faheem Ud Din</b>
            </span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/MrFaheem7"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/faheem-ud-din/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/idk_faheem7?igsh=MWk0Z2VwNm0xOXdiYg=="
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mrfaheemuddin7@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                  aria-label="Gmail"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="divider"></div>
      <div className="copy_rights">
        {" "}
        © Copyright Faheem Ud Din {year} All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
