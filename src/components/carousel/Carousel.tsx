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
}

const Carousel: React.FC<Props> = ({ data, isLoading }) => {
  const carouselContainerRef = useRef();
  const { data: urls } = useConfig("/configuration");
  const navigate = useNavigate();

  const navigation = (direction: string) => {
    // Handle navigation logic here
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
        <BsFillArrowLeftCircleFill
          onClick={() => navigation("left")}
          className="carouselLeftNav arrow"
        />
        <BsFillArrowRightCircleFill
          onClick={() => navigation("right")}
          className="carouselRightNav arrow"
        />
        {!isLoading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? urls.poster + item.poster_path
                : PosterFallback;

              return (
                <div key={item.id} className="carouselItem">
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
