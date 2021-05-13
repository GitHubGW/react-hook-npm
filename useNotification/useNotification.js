export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
    return;
  }

  const requestNotification = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    }
  };

  return requestNotification;
};