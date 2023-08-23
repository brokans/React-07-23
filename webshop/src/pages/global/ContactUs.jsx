import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label>
      <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label>
      <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" />
    </form>
  );
};
