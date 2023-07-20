import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useMovies from "../../../hooks/useMovies";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, isLoading, error } = useMovies(`/${endpoint}/top_rated`);
  const onTabChange = (tab: string | number, index: number) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel
        data={data?.results}
        isLoading={isLoading}
        endpoint={endpoint}
      ></Carousel>
    </div>
  );
};

export default TopRated;
