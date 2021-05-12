import { useState } from "react";

export const useInput = (initialValue, checkLength) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof checkLength === "function") {
      willUpdate = checkLength(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
