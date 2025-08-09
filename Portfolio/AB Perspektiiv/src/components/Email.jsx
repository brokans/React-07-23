import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zoynupw",
        "template_akogdbi",
        form.current,
        "PXhCZSpIJP4mL_Cfv"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="email-form">
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group style={{ width: "22rem", margin: "auto" }} className="mb-3">
          <Form.Control type="text" placeholder="Nimi" name="from_name" />
        </Form.Group>
        <Form.Group
          style={{ width: "22rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="E-Mail"
            name="from_email"
          />
        </Form.Group>

        <Form.Group
          style={{ width: "22rem", margin: "auto" }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            placeholder="Räägi oma ideest!"
            rows={5}
            name="message"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Saada
        </Button>
      </Form>
    </div>
  );
}

export default Email;
