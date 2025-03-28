import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import MainEvents from "../components/MainEvents";
import UpComing from "../components/UpComing";
import Previous from "../components/Previous";
import SectionEvent from "../components/SectionEvent";
const Events = () => {
  return (
    <>
      <MainEvents />
      <SectionEvent />
      <UpComing />

      <Previous />
    </>
  );
};

export default Events;
