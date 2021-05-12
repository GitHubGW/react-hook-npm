import { useRef } from "react";

export const useFullscreen = (onFullScreen) => {
  const element = useRef();

  const enterFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      if (onFullScreen && typeof onFullScreen === "function") {
        onFullScreen(true);
      }
    }
  };

  const exitFullScreen = () => {
    const checkFullScreen = document.fullscreenElement;

    if (checkFullScreen !== null) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      if (onFullScreen && typeof onFullScreen === "function") {
        onFullScreen(false);
      }
    }
  };

  return { element, enterFullScreen, exitFullScreen };
};
