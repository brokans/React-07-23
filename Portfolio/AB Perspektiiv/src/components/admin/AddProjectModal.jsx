import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import config from "../../data/config.json";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function EditModal(props) {
  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  const nameRef = useRef();
  const categoryRef = useRef();
  const imgRefOne = useRef();
  const imgRefTwo = useRef();
  const imgRefThree = useRef();
  const imgRefFour = useRef();
  const imgRefFive = useRef();
  const imgRefSix = useRef();
  const imgRefSeven = useRef();
  const imgRefEight = useRef();
  const imgRefNine = useRef();
  const imgRefTen = useRef();
  const imgRefEleven = useRef();
  const asukohtRef = useRef();
  const valminudRef = useRef();
  const pindalaRef = useRef();
  const autorRef = useRef();
  const fotograafRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setLoading(false);
      });
  }, []);

  function addProject() {
    projects.push({
      name: nameRef.current.value,
      category: categoryRef.current.value,
      photoOne: imgRefOne.current.value,
      photoTwo: imgRefTwo.current.value,
      photoThree: imgRefThree.current.value,
      photoFour: imgRefFour.current.value,
      photoFive: imgRefFive.current.value,
      photoSix: imgRefSix.current.value,
      photoSeven: imgRefSeven.current.value,
      photoEight: imgRefEight.current.value,
      photoNine: imgRefNine.current.value,
      photoTen: imgRefTen.current.value,
      photoEleven: imgRefEleven.current.value,
      asukoht: asukohtRef.current.value,
      valminud: valminudRef.current.value,
      pindala: pindalaRef.current.value,
      autor: autorRef.current.value,
      fotograaf: fotograafRef.current.value
    });
    setProjects(projects.slice());

    fetch(config.projects, {
      method: "PUT",
      body: JSON.stringify(projects),
    });
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lisa Uus Projekt
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lisa Projekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form key={props.productId}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                ref={nameRef}
                type="text"
                autoFocus
                placeholder="Projekti nimi"
              />
              <Form.Control
                ref={categoryRef}
                type="text"
                autoFocus
                placeholder="Arhitektuur või Sisearhitektuur"
              />
              <Form.Control
                ref={imgRefOne}
                type="text"
                autoFocus
                placeholder="photo 1 URL"
              />
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder="photo 2 URL"
              />
              <Form.Control
                ref={imgRefThree}
                type="textarea"
                autoFocus
                placeholder="photo 3 URL"
              />
              <Form.Control
                ref={imgRefFour}
                type="textarea"
                autoFocus
                placeholder="photo 4 URL"
              />
              <Form.Control
                ref={imgRefFive}
                type="textarea"
                autoFocus
                placeholder="photo 5 URL"
              />
              <Form.Control
                ref={imgRefSix}
                type="textarea"
                autoFocus
                placeholder="photo 6 URL"
              />
              <Form.Control
                ref={imgRefSeven}
                type="textarea"
                autoFocus
                placeholder="photo 7 URL"
              />
              <Form.Control
                ref={imgRefEight}
                type="textarea"
                autoFocus
                placeholder="photo 8 URL"
              />
              <Form.Control
                ref={imgRefNine}
                type="textarea"
                autoFocus
                placeholder="photo 9 URL"
              />
              <Form.Control
                ref={imgRefTen}
                type="textarea"
                autoFocus
                placeholder="photo 10 URL"
              />
              <Form.Control
                ref={imgRefEleven}
                type="textarea"
                autoFocus
                placeholder="photo 11 URL"
              /> <br />
              <Form.Label>Projekti info</Form.Label>
              <Form.Control
                ref={asukohtRef}
                type="textarea"
                autoFocus
                placeholder="Asukoht"
              />
              <br />
              <Form.Control
                ref={valminudRef}
                type="textarea"
                autoFocus
                placeholder="Valminud"
              />
              <br />
              <Form.Control
                ref={pindalaRef}
                type="textarea"
                autoFocus
                placeholder="Pindala"
              />
              <br />
              <Form.Control
                ref={autorRef}
                type="textarea"
                autoFocus
                placeholder="Autor"
              />
              <br />
              <Form.Control
                ref={fotograafRef}
                type="textarea"
                autoFocus
                placeholder="Fotograaf"
              />
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sule
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              addProject();
              handleClose();
            }}
          >
            Salvesta
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
