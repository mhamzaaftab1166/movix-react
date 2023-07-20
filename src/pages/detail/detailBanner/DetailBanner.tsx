import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./DetailBanner.scss";

import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import useFetch from "../../../hooks/useMovies";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/LazyLoadImage/Img";
import PosterFallback from "../../../assets/no-poster.png";
import useMovies from "../../../hooks/useMovies";
import useConfig from "../../../hooks/useConfig";
import useMovie from "../../../hooks/useMovie";
interface Props {
  video: any;
  crew: any;
}
const DetailsBanner = ({ video, crew }: Props) => {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useMovie(`/${mediaType}/${id}`);
  const { data: urls } = useConfig("/configuration");

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!isLoading ? (
        <div>
          <div className="backdrop-img">
            <Img src={urls.backdrop + data.backdrop_path}></Img>
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data.poster_path ? (
                  <Img
                    src={urls.poster + data.poster_path}
                    className="posterImg"
                  ></Img>
                ) : (
                  <Img src={PosterFallback} className="posterImg"></Img>
                )}
              </div>
              <div className="right"></div>
            </div>
          </ContentWrapper>
        </div>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
