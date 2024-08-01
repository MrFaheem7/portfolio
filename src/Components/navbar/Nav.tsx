import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Nav.css";
import pdf from "../../assest/pdf/Faheem_Ud_Din.pdf";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineDownload,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { useState } from "react";

function NavBar() {
  const [expand, updateExpanded] = useState<any>(false);
  const [navColour, updateNavbar] = useState<any>(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex ">
          <div className="logo_class">Faheem Ud Din .</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#about"
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#skills"
                onClick={() => {
                  const element = document.getElementById("skills");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <GiSkills style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#projects"
                onClick={() => {
                  const element = document.getElementById("project");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#contact"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <a
                href={pdf}
                target="_blank"
                className="get_in_touch"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineDownload /> Resume
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
