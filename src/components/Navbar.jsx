import state from "../store";
import { useSnapshot } from "valtio";

const Navbar = () => {
  const snap = useSnapshot(state);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          {/* Logo*/}
          <a
            className="navbar-brand d-flex align-items-center lh-1 me-10 transition-opacity opacity-75-hover"
            role="button"
            onClick={() => (state.page = "home")}
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
            <span className="fw-bold text-body">Sigma</span>
          </a>
          {/* / Logo*/}
          {/* Mobile Menu Btn*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ri-menu-line" />
          </button>
          {/* /Mobile Menu Btn*/}
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Features
                </a>
                {/* Features dropdown menu*/}
                <div className="dropdown-menu dropdown-megamenu">
                  <div className="container">
                    {/* Dropdown Menu Links Section*/}
                    <div className="row py-lg-5 gx-8">
                      {/* menu row*/}
                      <div className="col-auto me-4 mb-4 me-lg-0 mb-lg-0 col-lg-4 d-flex align-items-start">
                        <span className="f-w-16 d-block text-primary me-4 d-none d-lg-flex">
                          <svg
                            className="w-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 2 7 12 12 22 7 12 2" />
                            <polyline points="2 17 12 22 22 17" />
                            <polyline opacity=".4" points="2 12 12 17 22 12" />
                          </svg>
                        </span>
                        <div className="position-relative">
                          <h6 className="dropdown-heading">Tasks planner</h6>
                          <p className="text-muted">
                            Plan and schedule your weekly tasks on web or mobile
                            through our desktop or mobile apps.
                          </p>
                          <a
                            href="#"
                            className="fw-medium fs-7 text-decoration-none link-cover"
                          >
                            Read more →
                          </a>
                        </div>
                      </div>
                      {/* /menu row*/}
                      {/* menu row*/}
                      <div className="col-auto me-4 mb-4 me-lg-0 mb-lg-0 col-lg-4 d-flex align-items-start">
                        <span className="f-w-16 d-block text-primary me-4 d-none d-lg-flex">
                          <svg
                            className="w-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x={4}
                              y={4}
                              width={16}
                              height={16}
                              rx={2}
                              ry={2}
                            />
                            <rect
                              opacity=".3"
                              x={9}
                              y={9}
                              width={6}
                              height={6}
                            />
                            <line x1={9} y1={1} x2={9} y2={4} />
                            <line x1={15} y1={1} x2={15} y2={4} />
                            <line x1={9} y1={20} x2={9} y2={23} />
                            <line x1={15} y1={20} x2={15} y2={23} />
                            <line x1={20} y1={9} x2={23} y2={9} />
                            <line x1={20} y1={14} x2={23} y2={14} />
                            <line x1={1} y1={9} x2={4} y2={9} />
                            <line x1={1} y1={14} x2={4} y2={14} />
                          </svg>
                        </span>
                        <div className="position-relative">
                          <h6 className="dropdown-heading">
                            Team collaborations
                          </h6>
                          <p className="text-muted">
                            Invite unlimited team members to view, edit, comment
                            and create landing pages with you.
                          </p>
                          <a
                            href="#"
                            className="fw-medium fs-7 text-decoration-none link-cover"
                          >
                            Read more →
                          </a>
                        </div>
                      </div>
                      {/* /menu row*/}
                      {/* menu row*/}
                      <div className="col-auto me-4 mb-4 me-lg-0 mb-lg-0 col-lg-4 d-flex align-items-start">
                        <span className="f-w-16 d-block text-primary me-4 d-none d-lg-flex">
                          <svg
                            className="w-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={18} cy={18} r={3} />
                            <circle cx={6} cy={6} r={3} />
                            <path opacity=".4" d="M13 6h3a2 2 0 0 1 2 2v7" />
                            <line opacity=".4" x1={6} y1={9} x2={6} y2={21} />
                          </svg>
                        </span>
                        <div className="position-relative">
                          <h6 className="dropdown-heading">Version control</h6>
                          <p className="text-muted">
                            Full integration with Git, GitLab and Bitbucket to
                            easily allow version control.
                          </p>
                          <a
                            href="#"
                            className="fw-medium fs-7 text-decoration-none link-cover"
                          >
                            Read more →
                          </a>
                        </div>
                      </div>
                      {/* /menu row*/}
                    </div>
                    {/* Latest from the blog*/}
                    <div className="mt-4 border-top d-none d-lg-flex flex-column py-5">
                      <p className="text-muted">From the blog</p>
                      <a href="#">
                        The ultimate guide to event project management →
                      </a>
                      <a href="#">
                        How to use Agile to implememt Scrum method →
                      </a>
                      <a href="#">
                        What is the best software version control? →
                      </a>
                    </div>
                    {/* / Latest from the blog*/}{" "}
                    {/* /Dropdown Menu Links Section*/}
                  </div>
                </div>
                {/* / Features dropdown menu*/}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pricing.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => (state.page = "contact")}
                  role="button"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-none d-lg-flex">
              <a href="#" className="btn btn-link text-muted" role="button">
                Login
              </a>
              <a href="#" className="btn btn-primary ms-2" role="button">
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
