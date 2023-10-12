import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://facebook.com/"
            className="me-4 link-secondary social-icons"
          >
            <i className="fa fa-facebook-f" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://twitter.com/" className="me-4 link-secondary">
            <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://google.com" className="me-4 link-secondary">
            <i className="fa fa-google" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://intsagram.com" className="me-4 link-secondary">
            <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://linkedIn.com/" className="me-4 link-secondary">
            <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://github.com/" className="me-4 link-secondary">
            <i className="fa fa-github" style={{ fontSize: "24px" }}></i>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>NIKTA CODERS
              </h6>
              <p>
                When you choose our ReactJS developer, you're not just getting a
                coder; you're getting a creative and innovative partner
                dedicated to bringing your web applications to life. With their
                expertise, your web projects are bound to make a lasting
                impression.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i
                  className="fa fa-address-card-o"
                  style={{ fontSize: "24px" }}
                ></i>{" "}
                KOLKATA, INDIA
              </p>
              <p>
                <i className="fa fa-envelope" style={{ fontSize: "24px" }}></i>
                RAJATGHOSH816@GMAIL.COM
              </p>
              <p>
                <i className="fa fa-envelope" style={{ fontSize: "24px" }}></i>
                RAJATGHOSH817@GMAIL.COM
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://gmail.com/">
          rajatghosh816@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
