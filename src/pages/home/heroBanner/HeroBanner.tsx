import React, { useState, KeyboardEvent, useEffect } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useMovies from "../../../hooks/useMovies";
import useConfig from "../../../hooks/useConfig";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import Img from "../../../components/LazyLoadImage/Img";

const HeroBanner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, isLoading, error } = useMovies("/movie/upcoming");
  const { data: urls } = useConfig("/configuration");

  useEffect(() => {
    const backgroundImage =
      urls.backdrop +
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path ?? "";
    setBackgroundImage(backgroundImage);
  }, [data]);

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search/movie/${searchQuery}`);
    }
  };
  const handleBtnSearch = () => {
    if (searchQuery.length > 0) {
      navigate(`/search/movie/${searchQuery}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        {!isLoading && (
          <Img
            className="lazy-load-image-background"
            src={backgroundImage}
          ></Img>
        )}
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows, and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearch}
              type="text"
              placeholder="Search for a movie or TV show"
            />
            <button onClick={handleBtnSearch}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
