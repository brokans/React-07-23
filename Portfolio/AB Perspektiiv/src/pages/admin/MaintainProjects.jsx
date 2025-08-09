import React, { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddProjectModul from "../../components/admin/AddProjectModal";
import EditModal from "../../components/admin/EditModal"

function MaintainProjects(props) {
  const [projects, setProjects] = useState([]);
  const [dbProjects, setDbProjects] = useState([]);

  const searchedRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setDbProjects(json || []);
        setLoading(false);
      });
  }, []);

  function deleteProject(index) {
    projects.splice(index, 1);
    setProjects(projects.slice());
    fetch(config.projects, {
      method: "PUT",
      body: JSON.stringify(projects),
    });
  }

  function searchFromProducts() {
    const result = dbProjects.filter((project) =>
      project.name
        .toLowerCase()
        .includes(searchedRef.current.value.toLowerCase())
    );
    setProjects(result);
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <br />
      <p>Otsi projekti:</p>
      <input
        onChange={searchFromProducts}
        ref={searchedRef}
        type="text"
        placeholder="Projekti nimi"
      />{" "}
      <br />
      {}
      <br /> <br />
      <AddProjectModul /> <br /> <br />
      {projects.map((project, index) => (
        <div key={index} className="manage_project">
          <br />
          {project.name} <br />
          {project.category} <br />
          {project.autor} <br />
          {project.fotograaf} <br />
          {project.asukoht} <br />
          {project.pindala} <br />
          {project.valminud} <br />
          {index}
          <br /> <br />
          <Button
            as={Link}
            to={"/admin/maintain-projects/edit-project/" + index}
          >
            Muuda
          </Button>
          <Button
            onClick={() => deleteProject(index)}
            variant="dark "
            type="submit"
          >
            X
          </Button>
          <br /> <br />
        </div>
      ))}
      <br /> <br />
    </div>
  );
}

export default MaintainProjects;
