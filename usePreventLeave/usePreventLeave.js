export const usePreventLeave = () => {

  const beforeUnloadListener = (event) => {
    event.preventDefault();
    event.returnValue = false;
    console.log("Please wait a moment without closing the window.");
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", beforeUnloadListener);
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", beforeUnloadListener);
  };

  return { enablePrevent, disablePrevent };
};