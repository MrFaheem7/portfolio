import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assest/jpeg/home_img.png";
import About from "../About/About";
import Type from "../TypeWrite";
// import pdf from "../assets/fahadSharifResume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Faheem Ud Din </strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <About />
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ padding: "8px 24px" }}
            variant="primary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
