import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assest/png/laptop.png";

const About = () => {
  return (
    <Container fluid id="about">
      <h1 className="project-heading">
        <strong className="yellow"> | About Me </strong>
      </h1>
      <Row>
        <Col md={8}>
          <p className="home-about-body">
            I am a recent graduate from UET Lahore with a strong foundation in
            programming concepts. Passionate about software development, I have
            honed my skills in various programming languages and frameworks.
            <br />
            <br />
            Following my graduation, I spent six months in the industry working
            with React.js, where I applied my academic knowledge to real-world
            applications. This experience not only deepened my understanding of
            React.js but also taught me valuable lessons in agile development,
            code optimization, and user interface design. I am now eager to
            leverage my educational background and industry experience to
            contribute to innovative software projects
            <br />
            <br />
            If you're seeking a dedicated<b className="yellow"> React </b>
            developer who can contribute to your team's success, I invite you to
            connect with me. Let's explore opportunities together to collaborate
            and create efficient web applications that suited to user needs.
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
