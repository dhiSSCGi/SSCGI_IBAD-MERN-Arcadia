import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Involved from "../components/Involved";
import MainInnovations from "../components/MainInnovations";
const Innovations = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <MainInnovations />
      <Involved />
    </Fragment>
  );
};

export default Innovations;
