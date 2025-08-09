import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/home/Footer";
import config from "../../data/config.json";

function Sisearhitektuur() {
  const [projects, setProjects] = useState([]);
  const [randomHomePageImg, setRandomHomePageImg] = useState("");
  const found = projects.filter(
    (project) => project.category === "Sisearhitektuur"
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  useEffect(() => {
    if (found.length > 0) {
      const randomIndex = Math.floor(Math.random() * found.length);
      const randomProject = found[randomIndex];
      if (randomProject && randomProject.photoOne) {
        setRandomHomePageImg(randomProject.photoOne);
      }
    }
  }, [found]);
  return (
    <div>
      <div className="homePageImgContainer">
        <Carousel fade>
          {found.map((project) => (
            <Carousel.Item
              interval={project.photoOne ? 3000 : project.photoOne}
            >
              {project.photoOne && <img src={project.photoOne} alt="" />}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* <article className="sa-info">
        <h1>Valga Kodu</h1>
        <p>
          Asukoht: <strong>VALGA</strong>
        </p>
        <p>
          Valminud: <strong>2024</strong>
        </p>
        <p>
          Pindala: <strong>45m²</strong>
        </p>
        <p>
          Autor: <strong>Angeelika Saaron</strong>
        </p>
        <p>
          Fotograaf: <strong>Lisette Laanoja</strong>
        </p>
      </article> */}
      {/* <div className="project-container">
        <div className="project-img-info-container">
          <div className="carousel-container-int">
            <Carousel className="carousel-int" fade>
              {found.flatMap((project) =>
                ["photoOne", "photoTwo", "photoThree", "photoFour", "photoFive"]
                  .map((key) => project[key])
                  .filter(Boolean)
                  .map((photo, index) => (
                    <Carousel.Item
                      key={`${project.id}-${index}`}
                      interval={3000}
                    >
                      <img src={photo} alt={`Project ${project.id}`} />
                    </Carousel.Item>
                  ))
              )}
            </Carousel>
          </div>
          <div className="project-info-container">
            <h1 className="project-name">{project.name}</h1>
              <p className="project-info">{project.info}</p>
            <h1 className="project-name">Valga Kodu</h1>
            <p className="project-info">
              Asukoht: <strong>VALGA</strong>
            </p>
            <p className="project-info">
              Valminud: <strong>2024</strong>
            </p>
            <p className="project-info">
              Pindala: <strong>45m²</strong>
            </p>
            <p className="project-info">
              Autor: <strong>Angeelika Saaron</strong>
            </p>
            <p className="project-info">
              Fotograaf: <strong>Lisette Laanoja</strong>
            </p>
          </div>
        </div>
      </div> */}

      {found.map((project) => (
        <div className="project-container">
          <div className="project-img-info-container">
            <div className="carousel-container">
              <Carousel className="carousel-img" fade interval={3000}>
                {project.photoOne && (
                  <Carousel.Item>
                    <img src={project.photoOne} alt="" />
                  </Carousel.Item>
                )}
                {project.photoTwo && (
                  <Carousel.Item>
                    <img src={project.photoTwo} alt="" />
                  </Carousel.Item>
                )}
                {project.photoThree && (
                  <Carousel.Item>
                    <img src={project.photoThree} alt="" />
                  </Carousel.Item>
                )}
                {project.photoFour && (
                  <Carousel.Item>
                    <img src={project.photoFour} alt="" />
                  </Carousel.Item>
                )}
                {project.photoFive && (
                  <Carousel.Item>
                    <img src={project.photoFive} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
                {project.photoSix && (
                  <Carousel.Item>
                    <img src={project.photoSix} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
                {project.photoSeven && (
                  <Carousel.Item>
                    <img src={project.photoSeven} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
                {project.photoEight && (
                  <Carousel.Item>
                    <img src={project.photoEight} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
                {project.photoNine && (
                  <Carousel.Item>
                    <img src={project.photoTen} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
                {project.photoEleven && (
                  <Carousel.Item>
                    <img src={project.photoEleven} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
                {project.photoSix && (
                  <Carousel.Item>
                    <img src={project.photoSix} alt="" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
            <div className="project-info-container">
              <h1 className="project-name">{project.name}</h1>
              <p className="project-info">Asukoht: {project.asukoht}</p>
              <p className="project-info">Valminud: {project.valminud}</p>
              <p className="project-info">Projekt: {project.projekt}</p>
              <p className="project-info">Pindala: {project.pindala}</p>
              <p className="project-info">Autor: {project.autor}</p>
              <p className="project-info">Fotograaf: {project.fotograaf}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Sisearhitektuur;
