import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted pt-1 m-2">
        <section class="">
          <div class="container text-center text-md-start mt-2">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-5 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase text-justify fw-bold mb-4">
                  Arhitektuuribüroo Perspektiiv OÜ
                </h6>
                <p>"Meie loome teekonna eesmärkideni"</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Kasulikud lingid</h6>
                <p>
                  <a href="https://www.instagram.com/perspektiiv_ab?igsh=eXo5M3JqMzRya2Vo&utm_source=qr" target="_blank" rel="noopener noreferrer" class="text-reset">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="https://www.facebook.com/profile.php?id=61569858399297" target="_blank" rel="noopener noreferrer" class="text-reset">
                    Facebook
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
                <p>Lai 19, Valga</p>
                <p>angeelika.saaron@abperspektiiv.com</p>
                <p>+372 5170440</p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-1">© 2024 Copyright</div>
      </footer>
    </div>
  );
}

export default Footer;
