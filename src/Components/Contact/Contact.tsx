import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const form = useRef<any>();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_spbkxsp", //service_id
          "template_35cnblu", //template_id
          form.current,
          "h0bzHD99XdJwazVfZ" //public_key
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container id="contact" style={{ paddingTop: "7rem" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1 style={{ color: "#0e7490" }}>
            <b>Get in Touch</b>
          </h1>
          <p>
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input field"}
            </span>

            <Button type="submit" className="btn" disabled={done}>
              Send <AiOutlineSend />
            </Button>
            <span className="done">
              {done && "Thanks for contacting, you'll be contacted shortly!"}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
