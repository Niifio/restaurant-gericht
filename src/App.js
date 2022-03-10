import React from "react";
import "./App.css"
import { Navbar } from "./components";

import {
  AboutUs,
  Chef,
  Footer,
  Header,
  Gallery,
  Intro,
  Laurels,
  SpecialMenu,
  FindUs,
} from "./container";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
