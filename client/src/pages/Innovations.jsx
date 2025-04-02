import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Hero from "../components/Hero";
import Involved from "../components/Involved";
const Innovations = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Hero />
      <Involved />
    </Fragment>
  );
};

export default Innovations;
