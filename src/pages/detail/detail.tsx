import React from "react";
import "./detail.scss";
import { useParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import DetailsBanner from "./detailBanner/DetailBanner";
const Detail = () => {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useMovies(`/${mediaType}/${id}`);
  return (
    <div>
      <DetailsBanner video={1} crew={1}></DetailsBanner>
    </div>
  );
};

export default Detail;
