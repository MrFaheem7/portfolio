import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assest/png/laptop.png";

const About = () => {
  return (
    <Container fluid id="about">
      <Row>
        <Col md={8}>
          <p className="home-about-body">
            Innovative React and Node JS Developer with over 3 years of
            experience creating dynamic and responsive web applications from
            scratch to end.
            <br />
            <br />
            Possessing a strong foundation in{" "}
            <b className="yellow">
              {" "}
              React.js, Node.js, Express.js, Redux, HTML, CSS, SASS, JavaScript,
              TypeScript, MongoDB, Firebase, Git, GitHub and GitLab.
            </b>
            <br />
            <br />
            Throughout my career, I have collaborated with talented teams to
            successfully deliver high-quality projects. I excel in agile
            development methodologies and possess strong problem-solving skills,
            allowing me to identify and rectify issues swiftly. My commitment to
            continuous learning ensures I stay up-to-date with latest industry
            trends and technologies, leveraging cutting-edge tools and
            frameworks like Nest.js to enhance the development process and
            deliver optimal solutions.
            <br />
            <br />
            If you're seeking a dedicated<b className="yellow"> React </b>and
            <b className="yellow"> Node JS </b>developer who can contribute to
            your team's success, I invite you to connect with me. Let's explore
            opportunities together to collaborate and create efficient web
            applications that suited to user needs.
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <img src={LaptopImg} className="img-fluid" alt="avatar" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
