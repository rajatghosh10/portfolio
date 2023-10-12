import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img1 from "../components/Img1";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";

function Project() {
  return (
    <div>
      <Navbar />
      <Img1 />
      <WorkCard />
      <hr />
      <PricingCard />
      <hr />
      <Footer />
    </div>
  );
}

export default Project;
