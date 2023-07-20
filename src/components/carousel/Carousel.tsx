import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/contentWrapper";
import Img from "../LazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import "./carousel.scss";
import { movie } from "../../services/api";
import useConfig from "../../hooks/useConfig";
import CircleRating from "../circleRating/CircleRating";

interface Props {
  data: movie[];
  isLoading: boolean;
  endpoint?: string;
  title?: string;
}

const Carousel: React.FC<Props> = ({ data, isLoading, endpoint, title }) => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const { data: urls } = useConfig("/configuration");
  const navigate = useNavigate();

  const navigation = (direction: string) => {
    const container = carouselContainerRef.current;
    if (container) {
      const scrollAmount =
        direction === "left"
          ? container.scrollLeft - (container.offsetWidth + 20)
          : container.scrollLeft + (container.offsetWidth + 20);
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const skeletonItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          color="white"
          onClick={() => navigation("left")}
          className="carouselLeftNav arrow"
        />
        <BsFillArrowRightCircleFill
          color="white"
          onClick={() => navigation("right")}
          className="carouselRightNav arrow"
        />
        {!isLoading ? (
          <div className="carouselItems" ref={carouselContainerRef}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? urls.poster + item.poster_path
                : PosterFallback;

              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <Img
                      src={posterUrl}
                      className={".lazy-load-image-background"}
                    />
                    <CircleRating
                      rating={parseFloat(item.vote_average.toFixed(1))}
                    ></CircleRating>
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="title">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
