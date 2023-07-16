import { useCallback } from "react";
import { useToggle as useOriginalToggle } from "react-use";

export default function useToggle(initState = false) {
  const [on, toggle] = useOriginalToggle(initState);

  const toggleOn = useCallback(() => {
    toggle(true);
  }, [toggle]);

  const toggleOff = useCallback(() => {
    toggle(false);
  }, [toggle]);

  return {
    on,
    toggle,
    toggleOff,
    toggleOn,
  };
}
