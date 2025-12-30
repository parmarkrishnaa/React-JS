import React from "react";
import gallery1 from "../assets/img/gallery-1.jpg";
import gallery2 from "../assets/img/gallery-2.jpg";
import gallery3 from "../assets/img/gallery-3.jpg";
import gallery4 from "../assets/img/gallery-4.jpg";
import gallery5 from "../assets/img/gallery-5.jpg";
import gallery6 from "../assets/img/gallery-6.jpg";

const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Our Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-x-twitter" />
                </a>
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="#!">
                About Us
              </a>
              <a className="btn btn-link" href="#!">
                Contact Us
              </a>
              <a className="btn btn-link" href="#!">
                Our Services
              </a>
              <a className="btn btn-link" href="#!">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="#!">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Gallery</h4>
              <div className="row g-2">
                <div className="col-4">
                  <img className="img-fluid w-100" src={gallery1} alt />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src={gallery2} alt />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src={gallery3} alt />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src={gallery4} alt />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src={gallery5} alt />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src={gallery6} alt />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright pt-5">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="fw-semi-bold" href="#!">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Designed By{" "}
                <a className="fw-semi-bold" href="https://htmlcodex.com">
                  HTML Codex
                </a>
                . Distributed by
                <a className="fw-semi-bold" href="https://themewagon.com">
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default Footer;
