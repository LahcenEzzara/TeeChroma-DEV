import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-10 pb-8  ">
        <div className="container">
          {/* Free trial */}
          <div className="border-bottom border-white-10 pb-7">
            <div className="col-12 col-md-8 col-lg-6 d-flex mx-auto flex-column align-items-center justify-content-center">
              <h2 className="fs-1 fw-bolder text-white text-center">
                Try Sigma for free for 30 days with unlimited features.
              </h2>
              <a
                href="#"
                className="btn btn-primary mt-3 w-100 w-md-auto"
                role="button"
              >
                Start free trial
              </a>
            </div>
          </div>
          {/* Free trial*/}
        </div>
        {/* Footer Menus*/}
        <div className="container pt-7">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
            {/* Footer Logo*/}
            <a
              className="d-flex align-items-center lh-1 text-white transition-opacity opacity-50-hover text-decoration-none mb-4 mb-md-0"
              href="#"
            >
              {/* Logo SVG Icon*/}
              <span className="f-w-7 d-block text-success me-2">
                <svg
                  className="w-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 246.46 258.91"
                >
                  <path
                    d="M145.61,187.72,22.41,116.58,0,129.52l50.45,29.13L0,187.77l22.41,12.94s90.75,52.38,100.82,58.2l123.23-71.13L44.7,71.2l78.54-45.34,78.4,45.26-28,16.2-50.31-29L100.85,71.2l123.21,71.13,22.4-12.94L196,100.25q25.25-14.55,50.46-29.12L123.23,0,0,71.13,201.77,187.71l-78.52,45.41L44.8,187.78l28.06-16.19,50.34,29.07Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              {/*/ Logo SVG Icon */}
              <span className="fw-bold">Sigma</span>
            </a>
            {/* /Footer Logo*/}
            {/* Footer socials*/}
            <ul className="list-unstyled d-flex align-items-center justify-content-end">
              <li className="ms-5">
                <a
                  href="#"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-facebook-circle-line ri-lg" />
                </a>
              </li>
              <li className="ms-5">
                <a
                  href="#"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-twitter-line ri-lg" />
                </a>
              </li>
              <li className="ms-5">
                <a
                  href="#"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-instagram-line ri-lg" />
                </a>
              </li>
              <li className="ms-5">
                <a
                  href="#"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-snapchat-line ri-lg" />
                </a>
              </li>
            </ul>
            {/* Footer socials*/}
          </div>
          <div className="d-flex flex-wrap justify-content-between mt-5 mt-lg-7">
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Product
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">
                    Page builder{" "}
                    <span className="badge bg-danger rounded ms-2 align-middle">
                      new
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">AI generator</a>
                </li>
                <li>
                  <a href="#">Landing page templates</a>
                </li>
                <li>
                  <a href="#">Sketch plugin</a>
                </li>
                <li>
                  <a href="#">
                    Figma addon{" "}
                    <span className="badge bg-primary rounded ms-2 align-middle">
                      beta
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">XD integration</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Company
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our core values</a>
                </li>
                <li>
                  <a href="#">Join our team</a>
                </li>
                <li>
                  <a href="#">Our blog</a>
                </li>
                <li>
                  <a href="#">Latest news</a>
                </li>
                <li>
                  <a href="#">Share price</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Navigation
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">Start free trial</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Help &amp; support</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Forgotten password</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Legals
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; conditions</a>
                </li>
                <li>
                  <a href="#">Cookie policy</a>
                </li>
                <li>
                  <a href="#">Refund policy</a>
                </li>
                <li>
                  <a href="#">GDPR information</a>
                </li>
                <li>
                  <a href="#">Company legals</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
          </div>
        </div>
        {/* Footer Menus*/}
        {/* Footer bottom*/}
        <div className="container">
          <div className="border-top pt-6 mt-7 border-white-10 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <span className="small text-white opacity-50 mb-2 mb-md-0">
              All rights reserved © Sigma 2021
            </span>
            <span className="small text-white opacity-50">
              Terms of service | Security policy
            </span>
          </div>
        </div>
        {/* Footer bottom*/}
      </footer>
    </>
  );
};

export default Footer;
