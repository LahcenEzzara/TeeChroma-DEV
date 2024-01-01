import React, { useRef, useEffect } from "react";

import "./header.css";

import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const profileActionRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        if (headerRef.current && headerRef.current.classList) {
          headerRef.current.classList.add("sticky_header");
        }
      } else {
        if (headerRef.current && headerRef.current.classList) {
          headerRef.current.classList.remove("sticky_header");
        }
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => {
    if (menuRef.current && menuRef.current.classList) {
      menuRef.current.classList.toggle("active_menu");
    }
  };

  const navigateToCart = () => {};

  const toggleProfileActions = () => {
    if (profileActionRef.current && profileActionRef.current.classList) {
      profileActionRef.current.classList.toggle("show_profileActions");
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>TeeChroma</h1>
              </div>
            </div>

            <div className="nav_icons">
              <span className="fav_icon" style={{ color: "white" }}>
                <i className="ri-heart-line"></i>
              </span>
              <span className="cart_icon">
                <i className="ri-shopping-bag-2-line"></i>
              </span>

              <div className="profile">
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
                <div
                  className="profile_actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                ></div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
