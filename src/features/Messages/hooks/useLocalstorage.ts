import { useState, useEffect } from "react";

export const useLocalStorage = (key: any, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    const item = JSON.stringify(value);
    window.localStorage.setItem(key, item);
  }, [value]);

  return [value, setValue];
};
