import { useEffect, useState } from "react";
import { detail, fetchVideos } from "../services/api";
const useVideos = (url: string) => {
  const [data, setData] = useState<{ results: any[] }>(
    {} as { results: any[] }
  );
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setData({} as { results: any[] });
    setError("");

    fetchVideos(url)
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

export default useVideos;
