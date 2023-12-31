import React from "react";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

import { useSnapshot } from "valtio";
import state from "../store";

const Layouts = () => {
  return (
    <>
      <HomePage />
      <ContactPage />
    </>
  );
};

export default Layouts;
