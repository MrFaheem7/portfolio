import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Cards/ProjectCard";
import bpAdminPanelImg from "..//../assest/png/bpAdminPanel.png";
import buildifyImg from "..//../assest/png/buildify.png";

import bpSPA from "../../assest/png/bpSpaProject.png";

const Projects = () => {
  const items = [
    {
      id: 1,
      imgPath: bpSPA,
      title: "Balloch Park (SPA)",
      description:
        "Balloch Park is a stunning Single Page Application (SPA) built with React, leveraging React Bootstrap, Redux, Typescript and Sass for responsive front-end design. Custom APIs built with Node.js and Express.js fetch real-time data to populate the site's content. Utilizing MongoDB to store and manage data efficiently.",
      demoLink: "https://ballochparkguide.com/",
    },
    {
      id: 2,
      imgPath: bpAdminPanelImg,
      title: "Balloch Park Admin Panel",
      description:
        "The Balloch Park Admin Panel, built with React, React Bootstrap, TypeScript, and Sass, enables admins to manage SPA content and staff. Features include Google Maps API for location management, CRUD functionality, and password resets. Backend is powered by Node.js, Express.js, and MongoDB.",
      demoLink: "https://balloch-park-admin-panel.netlify.app/",
    },
    {
      id: 3,
      imgPath: buildifyImg,
      title: "Buildify",
      description:
        "Buildify allow to collaborate constructor and builders to work together on a single platform. It is a platform where constructors can post their projects and builders can bid on them. It is a platform where constructors can post their projects and builders can bid on them.",
      demoLink: "https://buildify-seven.vercel.app/",
    },
  ];
  return (
    <Container id="project" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">| Recent Top Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "space-around", paddingBottom: "10px" }}>
          {items.map((data, key) => (
            <Col md={5} className="project-card" key={key}>
              <ProjectCard
                imgPath={data.imgPath}
                title={data.title}
                description={data.description}
                demoLink={data.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
