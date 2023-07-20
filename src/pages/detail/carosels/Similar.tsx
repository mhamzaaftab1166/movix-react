import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useMovies";
import useMovies from "../../../hooks/useMovies";
interface Props {
  mediaType?: string;
  id?: string;
}
const Similar = ({ mediaType, id }: Props) => {
  const { data, isLoading, error } = useMovies(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
      isLoading={isLoading}
      endpoint={mediaType}
    />
  );
};

export default Similar;
