import React from "react";
import "./detail.scss";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailBanner/DetailBanner";
import useVideos from "../../hooks/useVideos";
import useCredits from "../../hooks/useCredits";
import Cast from "./cast/Cast";
import Similar from "./carosels/Similar";
import Recommendation from "./carosels/Recomendation";
const Detail = () => {
  const { mediaType, id } = useParams<{ mediaType: string; id: string }>(); // Add type assertion for mediaType
  const { data: videos, isLoading: videoLoading } = useVideos(
    `/${mediaType}/${id}/videos`
  );
  const { data: credits, isLoading: creditLoading } = useCredits(
    `/${mediaType}/${id}/credits`
  );

  if (videoLoading || creditLoading) {
    return <div>Loading...</div>;
  }

  if (!videos?.results?.length || !credits?.crew?.length) {
    return <div>Data not available</div>;
  }

  return (
    <div>
      <DetailsBanner video={videos.results[0]} crew={credits.crew} />
      <Cast data={credits.cast} loading={creditLoading}></Cast>
      <Similar mediaType={mediaType} id={id}></Similar>
      <Recommendation mediaType={mediaType} id={id}></Recommendation>
    </div>
  );
};

export default Detail;
