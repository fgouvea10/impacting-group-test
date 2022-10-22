import { useCallback, useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { baseUrl } from "../config/env.json";

const client = axios.create({
  baseURL: baseUrl,
});

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [hasError, setHasError] = useState(false);

  const getData = useCallback(async () => {
    setIsFetching(true);

    try {
      const response = await client.get(url, options);
      setData(response.data);
    } catch (err) {
      setData(null);
      setError(err);
      setHasError(true);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    isFetching,
    error,
    hasError,
  };
}
