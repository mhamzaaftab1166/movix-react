import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
const home = () => {
  return (
    <div className="homepage">
      <HeroBanner></HeroBanner>
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default home;
