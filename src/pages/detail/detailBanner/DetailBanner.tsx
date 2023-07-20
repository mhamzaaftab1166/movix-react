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
import { PlayBtn } from "../PlayBtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

interface Props {
  video: any;
  crew: any[];
}

const DetailsBanner = ({ video, crew }: Props) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const { mediaType, id } = useParams();
  const { data, isLoading } = useMovie(`/${mediaType}/${id}`);
  const { data: urls } = useConfig("/configuration");

  const director = crew.filter((dir) => dir.job === "Director");
  const writer = crew.filter(
    (dir) =>
      dir.job === "Screenplay" || dir.job === "Writer" || dir.job === "Story"
  );

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!isLoading && data ? (
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
              <div className="right">
                <div className="title">
                  {`${data.name || data.title} ${dayjs(
                    data.release_date
                  ).format("YYYY")}`}
                </div>
                <div className="subtitle">{data.tagline}</div>
                <div className="genre-detail genres">
                  <ul>
                    {data?.genres?.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="row">
                  <CircleRating
                    rating={parseFloat(data.vote_average?.toFixed(1) || "0")}
                  ></CircleRating>
                  <div
                    className="playbtn"
                    onClick={() => {
                      setShow(true);
                      setVideoId(video.key);
                    }}
                  >
                    <PlayBtn></PlayBtn>
                    <span className="text">Watch Trailer</span>
                  </div>
                </div>
                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="description">{data.overview}</div>
                </div>
                <div className="info">
                  {data.status && (
                    <div className="infoItem">
                      <span className="text bold">Status: </span>
                      <span className="text">{data.status}</span>
                    </div>
                  )}
                  {data.release_date && (
                    <div className="infoItem">
                      <span className="text bold">Release: </span>
                      <span className="text">
                        {dayjs(data.release_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  )}
                  {data.runtime && (
                    <div className="infoItem">
                      <span className="text bold">Runtime: </span>
                      <span className="text">
                        {toHoursAndMinutes(data.runtime)}
                      </span>
                    </div>
                  )}
                </div>
                {director.length > 0 && (
                  <div className="info">
                    <span className="bold text">Director: </span>
                    <span className="text">
                      {director &&
                        director.map((dir) => (
                          <span key={dir.id}>{dir.name}</span>
                        ))}
                    </span>
                  </div>
                )}
                {writer.length > 0 && (
                  <div className="info">
                    <span className="bold text">Writer: </span>
                    <span className="text">
                      {writer &&
                        director.map((writer) => (
                          <span key={writer.id}>{writer.name}</span>
                        ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <VideoPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            ></VideoPopup>
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
