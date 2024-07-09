import { Col, Row } from "react-bootstrap";
import oop from "../../assest/svg/oop.svg";
import dsa from "../../assest/svg/dsa.svg";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiMysql,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedux,
  SiMongodb,
  SiCss3,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";

const Techstack = () => {
  const items = [
    {
      id: 1,
      name: "C++",
      icon: <SiCplusplus />,
    },
    {
      id: 2,
      name: "OOP",
      icon: <img width={90} src={oop} />,
    },
    {
      id: 3,
      name: "DSA",
      icon: <img width={90} src={dsa} />,
    },
    {
      id: 4,
      name: "HTML",
      icon: <DiHtml5 />,
    },
    {
      id: 5,
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      id: 6,
      name: "MySQL",
      icon: <DiMysql />,
    },
    {
      id: 7,
      name: "JavaScript",
      icon: <DiJavascript1 />,
    },
    {
      id: 8,
      name: "React",
      icon: <DiReact />,
    },
    {
      id: 9,
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      id: 10,
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      id: 11,
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      id: 12,
      name: "Git",
      icon: <DiGit />,
    },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {items.map((data, key) => (
        <Col xs={4} md={2} className="tech-icons" key={key}>
          {data.icon}
          <span className="tooltiptext">{data.name}</span>
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;
