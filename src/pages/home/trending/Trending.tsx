import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useMovies from "../../../hooks/useMovie";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, isLoading, error } = useMovies(`/trending/all/${endpoint}`);
  const onTabChange = (tab: string | number, index: number) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trendings</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} isLoading={isLoading}></Carousel>
    </div>
  );
};

export default Trending;
