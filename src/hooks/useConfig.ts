import { useEffect, useState } from "react";
import { fetchUrls } from "../services/api";
interface Config {
  backdrop: string;
  poster: string;
  profile: string;
}
const useMovies = (url: string) => {
  const [data, setData] = useState<Config>({} as Config);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setData({} as Config);
    setError("");

    fetchUrls(url)
      .then((res) => {
        setLoading(false);
        const urls = {
          backdrop: res.data.images.secure_base_url + "original",
          poster: res.data.images.secure_base_url + "original",
          profile: res.data.images.secure_base_url + "original",
        };
        setData(urls);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useMovies;
