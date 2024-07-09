import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

const Skills = () => {
  return (
    <Container id="skills" fluid className="about-section">
      <h1 className="project-heading">
        <strong className="yellow"> | My Skills Set </strong>
      </h1>
      <Techstack />
    </Container>
  );
};

export default Skills;
