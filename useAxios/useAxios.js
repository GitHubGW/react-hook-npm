import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (options, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });

    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  if (!options.url) {
    return;
  }
  return { ...state, refetch };
};