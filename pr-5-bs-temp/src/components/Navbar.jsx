import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        {/* Topbar Start */}
        <div
          className="container-fluid bg-secondary top-bar wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="row align-items-center h-100">
            <div className="col-lg-4 text-center text-lg-start">
              <a href="index.html">
                <h1 className="display-5 text-primary m-0">Charitize</h1>
              </a>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex justify-content-end">
                    <div className="flex-shrink-0 btn-square bg-primary">
                      <i className="fa fa-phone-alt text-dark" />
                    </div>
                    <div className="ms-2">
                      <h6 className="text-primary mb-0">Call Us</h6>
                      <span className="text-white">+012 345 6789</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-end">
                    <div className="flex-shrink-0 btn-square bg-primary">
                      <i className="fa fa-envelope-open text-dark" />
                    </div>
                    <div className="ms-2">
                      <h6 className="text-primary mb-0">Mail Us</h6>
                      <span className="text-white">info@domain.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-end">
                    <div className="flex-shrink-0 btn-square bg-primary">
                      <i className="fa fa-map-marker-alt text-dark" />
                    </div>
                    <div className="ms-2">
                      <h6 className="text-primary mb-0">Address</h6>
                      <span className="text-white">123 Street, NY, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div
          className="container-fluid bg-secondary px-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
              <h4 className="d-lg-none m-0">Menu</h4>
              <button
                type="button"
                className="navbar-toggler me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav me-auto">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="about.html" className="nav-item nav-link">
                    About
                  </a>
                  <a href="service.html" className="nav-item nav-link">
                    Service
                  </a>
                  <a href="donation.html" className="nav-item nav-link">
                    Donation
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu bg-light m-0">
                      <a href="event.html" className="dropdown-item">
                        Event
                      </a>
                      <a href="feature.html" className="dropdown-item">
                        Feature
                      </a>
                      <a href="team.html" className="dropdown-item">
                        Our Team
                      </a>
                      <a href="testimonial.html" className="dropdown-item">
                        Testimonial
                      </a>
                      <a href="404.html" className="dropdown-item">
                        404 Page
                      </a>
                    </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div className="d-none d-lg-flex ms-auto">
                  <a className="btn btn-square btn-dark ms-2" href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square btn-dark ms-2" href="#!">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square btn-dark ms-2" href="#!">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </div>
    </div>
  );
};

export default Navbar;
