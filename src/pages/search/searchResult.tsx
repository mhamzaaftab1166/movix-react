import React, { useEffect, useState } from "react";
import "./searchResult.scss";
import { useParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import { fetchSearch, movies } from "../../services/api";
import Spinner from "../../components/spinner/Spinner";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState<movies | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchSearch(`/search/multi?query=${query}&page=${page}`).then((res) => {
      setData(res.data);
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    setLoading(true);
    fetchSearch(`/search/multi?query=${query}&page=${page + 1}`).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data.results, ...res.data.results] });
      } else {
        setData(res.data);
      }
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    setPage(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true}></Spinner>}
      {!loading && data && data?.results?.length > 0 ? (
        <ContentWrapper>
          <div className="pageTitle">{`Search ${
            data.total_results > 1 ? "results" : "results"
          } of ${query}`}</div>
          <InfiniteScroll
            className="content"
            dataLength={data?.results?.length}
            next={fetchNextPageData}
            hasMore={page <= data.total_pages}
            loader={<Spinner></Spinner>}
          >
            {data.results.map((item, index) => (
              <MovieCard
                key={index}
                mediaType={item.media_type}
                data={item}
                fromSearch={true}
              ></MovieCard>
            ))}
          </InfiniteScroll>
        </ContentWrapper>
      ) : (
        <span className="resultNotFound"></span>
      )}
    </div>
  );
};

export default SearchResult;
