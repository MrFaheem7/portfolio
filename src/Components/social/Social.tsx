import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeProfile from "../../assest/jpeg/profile.jpeg";
import "./social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="home-about-social">
          <h1 className="yellow">
            {" "}
            <span style={{ color: "#0e7490 " }}>|</span> FIND ME ON
          </h1>
          <p>Please don't hesitate to reach out to me and connect.</p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/MrFaheem7"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/faheem-ud-din/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:mrfaheemuddin7@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="Gmail"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div>
        <img src={homeProfile} className="profile_img" />
      </div>
    </Container>
  );
};

export default Social;
