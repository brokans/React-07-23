import React, { useEffect, useState } from "react";
import Footer from "../../components/home/Footer";
import Carouselle from "../../components/home/Carouselles";
import config from "../../data/config.json";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Arhitektuur() {
  const [projects, setProjects] = useState([]);
  const foundInterior = projects.filter(
    (project) => project.category === "Arhitektuur"
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  return (
    <div>
      <div>
        <Carouselle />
      </div>
      {foundInterior.map((project, index) => (
        <div key={index} className="project-container">
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

export default Arhitektuur;
