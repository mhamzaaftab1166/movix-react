import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useMovies from "../../../hooks/useMovies";

interface Props {
  mediaType?: string;
  id?: string;
}

const Recommendation = ({ mediaType, id }: Props) => {
  const { data, isLoading, error } = useMovies(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <div>
      {data && data?.results?.length > 0 && (
        <Carousel
          title="Recommendations"
          data={data?.results}
          isLoading={isLoading}
          endpoint={mediaType}
        />
      )}
    </div>
  );
};

export default Recommendation;
