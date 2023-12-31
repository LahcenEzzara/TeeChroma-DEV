import React from "react";
import { Helmet } from "react-helmet";

import "../assets/css/theme.bundle.css";
import "../assets/css/libs.bundle.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSnapshot } from "valtio";
import state from "../store";

const ContactPage = () => {
  const snap = useSnapshot(state);
  return (
    <>
      {state.page === "contact" && (
        <div>
          <div>
            {/* Navbar */}
            <Navbar />
            {/* / Navbar*/}
            {/* Main Section*/}
            <main className="mt-0 ">
              {/* Page Title*/}
              <header className="pt-10">
                <div className="container">
                  <div className="text-center col-12 col-sm-9 col-lg-7 col-xl-6 mx-auto position-relative z-index-20">
                    <h1 className="display-3 fw-bold mb-3">Contact us</h1>
                    <p className="text-muted lead mb-0">
                      Select a category below to email the correct support team,
                      or alternatively, send us a general message using the form
                      below.
                    </p>
                  </div>
                </div>
              </header>
              {/* / Page Title*/}
              {/* Page Content Goes Here */}
              <div className="container position-relative z-index-20 py-7">
                {/* Support Categories*/}
                <div className="row g-5">
                  {/* Single Category*/}
                  <div className="col-12 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <span className="f-w-10 d-block text-primary">
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
                        <p className="fw-medium mb-1 my-4 fs-5">
                          Knowledgebase
                        </p>
                        <span className="text-muted fs-7 mb-4">
                          Browse our resources or submit a ticket to our support
                          team.
                        </span>
                        <a href="#" className="fw-bolder">
                          Visit help center →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* / Single Category*/}
                  {/* Single Category*/}
                  <div className="col-12 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <span className="f-w-10 d-block text-primary">
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
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path opacity=".4" d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path opacity=".4" d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </span>
                        <p className="fw-medium mb-1 my-4 fs-5">
                          Contact sales
                        </p>
                        <span className="text-muted fs-7 mb-4">
                          Ask about a custom pricing plan, our business
                          products, or request a demo.
                        </span>
                        <a href="#" className="fw-bolder">
                          Contact sales →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* / Single Category*/}
                  {/* Single Category*/}
                  <div className="col-12 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <span className="f-w-12 d-block text-primary">
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
                        <p className="fw-medium mb-1 my-4 fs-5">
                          Technical Support
                        </p>
                        <span className="text-muted fs-7 mb-4">
                          Need help with our API, or assistance using our
                          landing page design tool?
                        </span>
                        <a href="#" className="fw-bolder">
                          Contact support →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* / Single Category*/}
                </div>
                {/* Support Categories*/}
                {/* Contact Details & Form*/}
                <div className="row gx-10 my-10 pt-5">
                  {/* Contact Form*/}
                  <div className="col-12 col-lg-8">
                    <p className="mb-3 small fw-bolder tracking-wider text-uppercase text-primary">
                      Get in touch
                    </p>
                    <h2 className="display-5 fw-bold mb-6">
                      Send us a message
                    </h2>
                    <form>
                      <div className="row g-5">
                        {/* Name*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="John Doe"
                          />
                        </div>
                        {/* / Name*/}
                        {/* Email*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="john@doe.com"
                          />
                        </div>
                        {/* / Email*/}
                        {/* Company Name*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            placeholder="ACME Limited"
                          />
                        </div>
                        {/* / Company Name*/}
                        {/* Telephone*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Telephone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="telephone"
                            placeholder="+44 (0)208 445 678"
                          />
                        </div>
                        {/* / Telephone*/}
                        {/* Project Information*/}
                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea
                            name="about"
                            className="form-control"
                            cols={30}
                            rows={10}
                            defaultValue={""}
                          />
                        </div>
                        {/* / Project Information*/}
                        {/* Submit btn*/}
                        <div className="col-12 justify-content-end d-flex">
                          <button className="btn btn-primary" type="submit">
                            Send Message
                          </button>
                        </div>
                        {/* / Submit Btn*/}
                      </div>
                    </form>
                  </div>
                  {/* / Contact Form*/}
                  {/* Contact Details*/}
                  <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                    <div className="mb-5">
                      <p className="mb-4 small fw-bolder tracking-wider text-uppercase text-primary">
                        Find us online
                      </p>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-github-line me-3 ri-lg" />{" "}
                          <a className="text-muted" href="#">
                            Github
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-facebook-line me-3 ri-lg" />{" "}
                          <a className="text-muted" href="#">
                            Facebook
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-twitter-line me-3 ri-lg" />{" "}
                          <a className="text-muted" href="#">
                            Twitter
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-codepen-line me-3 ri-lg" />{" "}
                          <a className="text-muted" href="#">
                            Codepen
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="mb-4 small fw-bolder tracking-wider text-uppercase text-primary">
                      Our head office
                    </p>
                    <p>
                      33 Sandhurst Road, Canterbury Avenue, Central London, SM3
                      4RT, United Kingdom
                    </p>
                  </div>
                  {/* / Contact Details*/}
                </div>
                {/* Contact Details & Form*/}
              </div>
              {/* /Page Content */}
            </main>
            {/* / Main Section*/}
            {/* Footer */}
            {/* Footer*/}
            <Footer />
            {/* / Footer*/}
          </div>

          <div>
            <Helmet>
              <script src="/assets/js/vendor.bundle.js"></script>
              <script src="/assets/js/theme.bundle.js"></script>
            </Helmet>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
