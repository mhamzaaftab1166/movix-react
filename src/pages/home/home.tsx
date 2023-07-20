import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/popular";
import TopRated from "./topRated/TopRated";
const home = () => {
  return (
    <div className="homepage">
      <HeroBanner></HeroBanner>
      <Trending></Trending>
      <Popular></Popular>
      <TopRated></TopRated>
    </div>
  );
};

export default home;
