import React from "react";
import { Outlet } from "react-router-dom";
const About = (): JSX.Element => {
  return (
    <>
      <h2>About</h2>
      <Outlet />
    </>
  );
};

export default About;
