import { useEffect, useState } from "react";
import { fetchData, movies } from "../services/api";
const useMovies = (url: string) => {
  const [data, setData] = useState<movies>({} as movies);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setData({} as movies);
    setError("");

    fetchData(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useMovies;
