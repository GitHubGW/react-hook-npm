import { useEffect, useState } from "react";

export const useNetwork = (onNetworkChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleOnline = () => {
    if (typeof onNetworkChange === "function") {
      onNetworkChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOnline);
    };
  }, []);

  return status;
};
