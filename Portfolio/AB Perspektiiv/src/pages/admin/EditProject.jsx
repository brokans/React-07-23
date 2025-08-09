import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import config from "../../data/config.json";
import Form from "react-bootstrap/Form";
import { Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function EditProject() {
  const { index } = useParams();
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
  const projektRef = useRef();
  const pindalaRef = useRef();
  const autorRef = useRef();
  const fotograafRef = useRef();

  const navigate = useNavigate();
  const found = projects[index];

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setLoading(false);
      });
  }, []);

  function edit() {
    if (nameRef.current.value === "") {
      toast.error("Palun sisesta projekti nimi.");
      return; // funktsioon ei lähe edasi siit kohast
    }

    //  nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast.error("Palun sisesta projekti nimi suure algustähega.");
      return;
    }

    projects[index] = {
      category: categoryRef.current.value,
      name: nameRef.current.value,
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
      projekt: projektRef.current.value,
      pindala: pindalaRef.current.value,
      autor: autorRef.current.value,
      fotograaf: fotograafRef.current.value
    };
    fetch(config.projects, {
      method: "PUT",
      body: JSON.stringify(projects),
    }).then(() => navigate("/admin/maintain-projects"));
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <Form>
        <Form.Group style={{ width: "18rem", margin: "auto" }} className="project-form">
          <Form.Label>Projekti nimi</Form.Label>
          <Form.Control
            ref={nameRef}
            defaultValue={found.name}
            type="text"
            placeholder="Nimi"
            name="from_name"
          />
        </Form.Group>
        <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
          <Form.Label>Kategooria</Form.Label>
          <Form.Control
            ref={categoryRef}
            defaultValue={found.category}
            type="text"
            placeholder="Kategooria"
            name="from_name"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Pildid</Form.Label>
          <Form.Control
            ref={imgRefOne}
            defaultValue={found.photoOne}
            className="mb-3"
            type="text"
            placeholder="Foto 1 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefTwo}
            defaultValue={found.photoTwo}
            className="mb-3"
            type="text"
            placeholder="Foto 2 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefThree}
            defaultValue={found.photoThree}
            className="mb-3"
            type="text"
            placeholder="Foto 3 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefFour}
            defaultValue={found.photoFour}
            className="mb-3"
            type="text"
            placeholder="Foto 4 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefFive}
            defaultValue={found.photoFive}
            className="mb-3"
            type="text"
            placeholder="Foto 5 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefSix}
            defaultValue={found.photoSix}
            className="mb-3"
            type="text"
            placeholder="Foto 6 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefSeven}
            defaultValue={found.photoSeven}
            className="mb-3"
            type="text"
            placeholder="Foto 7 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefEight}
            defaultValue={found.photoEight}
            className="mb-3"
            type="text"
            placeholder="Foto 8 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefNine}
            defaultValue={found.photoNine}
            className="mb-3"
            type="text"
            placeholder="Foto 9 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefTen}
            defaultValue={found.photoTen}
            className="mb-3"
            type="text"
            placeholder="Foto 10 URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={imgRefEleven}
            defaultValue={found.photoEleven}
            className="mb-3"
            type="text"
            placeholder="Foto 11 URL"
          />
        </Form.Group>

        <Form.Group
          style={{ width: "18rem", margin: "auto"  }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Projekti info</Form.Label>
          <Form.Control
            ref={asukohtRef}
            defaultValue={found.asukoht}
            type="text"
            placeholder="Autor"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto"  }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={valminudRef}
            defaultValue={found.valminud}
            type="text"
            placeholder="Valminud"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto"  }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={projektRef}
            // defaultValue={found.projekt}
            type="text"
            placeholder="Projekt"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto"  }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={pindalaRef}
            defaultValue={found.pindala}
            type="text"
            placeholder="Pindala"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto"  }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={autorRef}
            defaultValue={found.autor}
            type="text"
            placeholder="Autor"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto"  }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            ref={fotograafRef}
            defaultValue={found.fotograaf}
            type="text"
            placeholder="Fotograaf"
          />
        </Form.Group>
        <Button onClick={edit} variant="primary">
          Muuda
        </Button>
      </Form>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default EditProject;
