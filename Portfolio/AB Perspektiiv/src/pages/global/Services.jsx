import React from "react";
import Footer from "../../components/home/Footer";
import Email from "../../components/Email";

function Services() {
  return (
    <div>
      <div className="services-container">
        <div className="services-img">
          <img src="https://i.postimg.cc/W4zzn64x/Z62-7291.jpg" alt="" />
        </div>
        <div className="services-tekst">
          <h2>TEENUSED</h2>
          <div className="teenused">
            <div className="service">
              <img className="service-icon" src="./3d-printer.png" alt="" />
              <p>Arhitektuurne projekteerimine</p>
            </div>

            <div className="service">
              <img
                className="service-icon"
                src="./interior-design.png"
                alt=""
              />
              <p>Sisearhitektuurne projekteerimine</p>
            </div>
            <div className="service">
              <img className="service-icon" src="./cube.png" alt="" />
              <p>3D visualiseerimine ja mudeldamine</p>
            </div>
            <div className="service">
              <img className="service-icon" src="./moodboard.png" alt="" />
              <p>Mood boardide loomine</p>
            </div>
            <div className="service">
              <img className="service-icon" src="./analytics.png" alt="" />
              <p>Arhitektuurne analüüs äriideedele</p>
            </div>
            <div className="service">
              <img
                className="service-icon"
                src="./speech-bubble.png"
                alt=""
              />
              <p>Konsultatsioon</p>
            </div>
            <div className="service">
              <p className="services-info">
            Meie arhitektuuribüroo pakub laia teenuste valikut, et aidata teil
            luua ruume, mis on funktsionaalsed, esteetiliselt meeldivad ja
            ajatud. Meie töö lähtub loovusest ja heast ruumitundest – iga
            projekt, olgu tegemist kodu või töökoha kujundamisega, on meile
            võimalus luua keskkond, mis vastab teie vajadustele ja peegeldab
            teie isikupära. Arhitektuur ei seisne vaid hoonetes – see on
            elukeskkond, mis mõjutab meie igapäevaelu ja heaolu.
          </p>
            </div>
          </div>
          
        </div>
      </div>
      <hr />
      <Email />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
