import React, { useRef } from "react";

export function useChatScroll<T>(
  dep: T
): React.MutableRefObject<HTMLDivElement | undefined> {
  const ref = useRef<HTMLDivElement>();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}