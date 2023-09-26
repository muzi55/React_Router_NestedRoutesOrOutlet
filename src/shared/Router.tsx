import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Detail from "../pages/Detail";
import Header from "../pages/Header";
import About from "../pages/about/About";
import Location from "../pages/about/Location";
import Member from "../pages/about/Member";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/test" element={<Test />} />
          <Route path="/detail" element={<Detail />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/location" element={<Location />} />
          <Route path="/about/member" element={<Member />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
