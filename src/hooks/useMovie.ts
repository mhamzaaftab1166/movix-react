import { useEffect, useState } from "react";
import { detail, fetchDetail } from "../services/api";
const useMovies = (url: string) => {
  const [data, setData] = useState<detail>({} as detail);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setData({} as detail);
    setError("");

    fetchDetail(url)
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
