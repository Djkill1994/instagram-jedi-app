import { useEffect } from "react";

export const useBeforeUnload = (value: any) => {
  const handleBeforeunload = (e: any) => {
    let returnValue;
    if (typeof value === "function") {
      returnValue = value(e);
    } else {
      returnValue = value;
    }
    if (returnValue) {
      e.preventDefault();
      e.returnValue = returnValue;
    }
    return returnValue;
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeunload);
    return () => window.removeEventListener("beforeunload", handleBeforeunload);
  }, []);
};
