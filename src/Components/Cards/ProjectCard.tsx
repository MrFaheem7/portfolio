import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

const ProjectCard = (props: any) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div style={{ height: "170px", overflow: "hidden" }}>
          <Card.Title
            style={{
              fontSize: "26px",
              fontWeight: "700",
              textAlign: "start",
              padding: "4px 0px",
              color: "#0e7490",
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "14px" }}>
            {props.description}
          </Card.Text>
        </div>

        <div>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                position: "static",
                bottom: "0px",
              }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
