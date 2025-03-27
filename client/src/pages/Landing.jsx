import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Key from "../components/Key";
import Focus from "../components/Focus";
import About from "../components/About";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Hero />
      <Impact />
      <Key />
      <Focus />
      <About />
    </Fragment>
  );
};

export default Landing;
